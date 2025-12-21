import fs from "fs";
import path from "path";
import mysql from "mysql2/promise";

/* ===== MYSQL CONFIG ===== */
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'asre-poya-website',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};


// delete method


export async function DELETE(req, { params }) {
  const { entity } = await params;

  let connection;
  try {
    const body = await req.json();
    const { id, type } = body; // نوع رکورد: "plan", "testimonial", "faq"

    if (!id || !type) {
      return new Response(JSON.stringify({ error: "Missing id or type" }), { status: 400 });
    }

    connection = await mysql.createConnection(dbConfig);

    let tableName;
    switch (type) {
      case "plan":
        tableName = "plans";
        break;
      case "testimonial":
        tableName = "testimonials";
        break;
      case "faq":
        tableName = "faqs";
        break;
      default:
        return new Response(JSON.stringify({ error: "Invalid type" }), { status: 400 });
    }

    // حذف رکورد از جدول مشخص
    const [result] = await connection.execute(
      `DELETE FROM ${tableName} WHERE id = ? AND entity = ?`,
      [id, entity]
    );

    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ error: "Record not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: `${type} deleted successfully` }), { status: 200 });

  } catch (err) {
    console.error("❌ DELETE ROUTE ERROR:", err);
    return new Response(JSON.stringify({ error: err.message || "Server error" }), { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}




// get method 
export async function GET(req, { params }) {
  const { entity } = await params;

  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);

    // ===== Fetch Plans =====
    const [plans] = await connection.execute(
      `SELECT * FROM plans WHERE entity = ? ORDER BY created_at ASC`,
      [entity]
    );

    // ===== Fetch Testimonials =====
    const [testimonials] = await connection.execute(
      `SELECT * FROM testimonials WHERE entity = ? ORDER BY created_at ASC`,
      [entity]
    );

    // ===== Fetch FAQs =====
    const [faqs] = await connection.execute(
      `SELECT * FROM faqs WHERE entity = ? ORDER BY created_at ASC`,
      [entity]
    );

    // Build response
    const responseData = {
      plans,
      testimonials,
      faqs
    };


    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (err) {
    console.error("❌ GET ROUTE ERROR:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}

export async function POST(req, { params }) {
  const { entity } = await params;

  try {
    const formData = await req.formData();

    // ===== JSON DATA =====
    const dataRaw = formData.get("data");
    if (!dataRaw) throw new Error("DATA NOT FOUND");

    const data = JSON.parse(await dataRaw.text());
    const { plans, testimonials, faqs } = data;


    // ===== UPLOAD DIRECTORY =====
    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    // ===== SAVE FILES FOR TESTIMONIALS =====
    for (let i = 0; i < testimonials.length; i++) {
      const t = testimonials[i];

      // customer profile picture
      const custFile = formData.get(`customerProfilePic_${i}`);
      if (custFile && custFile.size > 0) {
        const buffer = Buffer.from(await custFile.arrayBuffer());
        const filename = Date.now() + "_cust_" + custFile.name;
        const filepath = path.join(uploadDir, filename);
        fs.writeFileSync(filepath, buffer);
        t.customerProfilePicPath = `/uploads/${filename}`;
      } else {
        t.customerProfilePicPath = t.customerProfilePicPath || null;
      }

      // background image
      const bgFile = formData.get(`backgroundImg_${i}`);
      if (bgFile && bgFile.size > 0) {
        const buffer = Buffer.from(await bgFile.arrayBuffer());
        const filename = Date.now() + "_bg_" + bgFile.name;
        const filepath = path.join(uploadDir, filename);
        fs.writeFileSync(filepath, buffer);
        t.backgroundImgPath = `/uploads/${filename}`;
      } else {
        t.backgroundImgPath = t.backgroundImgPath || null;
      }
    }


    // ===== DATABASE CONNECTION =====
    const connection = await mysql.createConnection(dbConfig);

   // ===== PLANS =====
for (const plan of plans) {
  // بررسی اینکه حداقل یک فیلد غیرخالی باشد
  const hasContent = plan.titleFa || plan.titlePs || plan.titleEn ||
                     plan.description1Fa || plan.description1Ps || plan.description1En ||
                     plan.description2Fa || plan.description2Ps || plan.description2En ||
                     plan.amount;
  if (!hasContent) continue; // اگر خالی است رد شود

  await connection.execute(
    `
    INSERT INTO plans 
      (entity, title_fa, title_ps, title_en,
       description1_fa, description1_ps, description1_en,
       description2_fa, description2_ps, description2_en,
       amount, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    ON DUPLICATE KEY UPDATE
      title_fa=VALUES(title_fa),
      title_ps=VALUES(title_ps),
      title_en=VALUES(title_en),
      description1_fa=VALUES(description1_fa),
      description1_ps=VALUES(description1_ps),
      description1_en=VALUES(description1_en),
      description2_fa=VALUES(description2_fa),
      description2_ps=VALUES(description2_ps),
      description2_en=VALUES(description2_en),
      amount=VALUES(amount)
    `,
    [
      entity,
      plan.titleFa, plan.titlePs, plan.titleEn,
      plan.description1Fa, plan.description1Ps, plan.description1En,
      plan.description2Fa, plan.description2Ps, plan.description2En,
      plan.amount || 0
    ]
  );
}

// ===== TESTIMONIALS =====
for (const t of testimonials) {
  const hasContent = t.namefa || t.nameps || t.nameEn ||
                     t.jobTitlefa || t.jobTitleps || t.jobTitleEn ||
                     t.feedbackfa || t.feedbackps || t.feedbackEn;
  if (!hasContent) continue;

  await connection.execute(
    `
    INSERT INTO testimonials
      (entity, name_fa, name_ps, name_en,
       job_fa, job_ps, job_en,
       description_fa, description_ps, description_en,
       rating, review_date,
       created_at, customer_profile_pic, backgournd_img)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?)
    ON DUPLICATE KEY UPDATE
      name_fa=VALUES(name_fa),
      name_ps=VALUES(name_ps),
      name_en=VALUES(name_en),
      job_fa=VALUES(job_fa),
      job_ps=VALUES(job_ps),
      job_en=VALUES(job_en),
      description_fa=VALUES(description_fa),
      description_ps=VALUES(description_ps),
      description_en=VALUES(description_en),
      rating=VALUES(rating),
      review_date=VALUES(review_date),
      customer_profile_pic=VALUES(customer_profile_pic),
      backgournd_img=VALUES(backgournd_img)
    `,
    [
      entity,
      t.namefa, t.nameps, t.nameEn,
      t.jobTitlefa, t.jobTitleps, t.jobTitleEn,
      t.feedbackfa, t.feedbackps, t.feedbackEn,
      t.rating || 0,
      t.date || null,
      t.customerProfilePicPath || null,
      t.backgroundImgPath || null
    ]
  );
}

// ===== FAQS =====
for (const f of faqs) {
  const hasContent = f.questionfa || f.questionps || f.questionEN ||
                     f.answerfa || f.answerps || f.answerEN;
  if (!hasContent) continue;

  await connection.execute(
    `
    INSERT INTO faqs
      (entity, question_fa, question_ps, question_en,
       answer_fa, answer_ps, answer_en, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
    ON DUPLICATE KEY UPDATE
      question_fa=VALUES(question_fa),
      question_ps=VALUES(question_ps),
      question_en=VALUES(question_en),
      answer_fa=VALUES(answer_fa),
      answer_ps=VALUES(answer_ps),
      answer_en=VALUES(answer_en)
    `,
    [
      entity,
      f.questionfa, f.questionps, f.questionEN,
      f.answerfa, f.answerps, f.answerEN
    ]
  );
}

    await connection.end();
    return new Response(JSON.stringify({ message: "Saved successfully" }), { status: 200 });

  } catch (err) {
    console.error("ERROR SAVING MULTI-PROFILE:", err);
    return new Response(JSON.stringify({ error: err.message || "Server error" }), { status: 500 });
  }
}