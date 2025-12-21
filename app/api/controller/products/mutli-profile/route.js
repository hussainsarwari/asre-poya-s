// app/api/controller/multi-profile/route.js
import { NextResponse } from "next/server";
import db from "../../../../api/models/db"; // مسیر اتصال به دیتابیس

/* ===== GET ALL DATA ===== */
export async function GET() {
  try {
    const connection = await db.getConnection();

    // پلن‌ها
    const [plans] = await connection.execute(
      `SELECT id, title, description1, amount, description2, features FROM product_page_plans ORDER BY id ASC`
    );

    // نظرات مشتریان
    const [testimonials] = await connection.execute(
      `SELECT id, name, jobTitle, rating, date, description, image, profile_img FROM product_page_customer_feedback ORDER BY id ASC`
    );

    // سوالات متداول
    const [faqs] = await connection.execute(
      `SELECT id, question, answer FROM multi_profile_faqs ORDER BY id ASC`
    );

    connection.release();

    return NextResponse.json({ plans, testimonials, faqs }, { status: 200 });
  } catch (err) {
    console.error("GET multi-profile error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to fetch multi-profile data" },
      { status: 500 }
    );
  }
}

/* ===== UPDATE ALL DATA ===== */
export async function PUT(req) {
  try {
    const body = await req.json();
    const { plans, testimonials, faqs } = body;

    const connection = await db.getConnection();
    await connection.beginTransaction();

    // پاک کردن داده‌های قدیمی و جایگزینی با داده‌های جدید (راه ساده برای مدیریت تمام داده‌ها)
    await connection.execute(`DELETE FROM product_page_plans`);
    await connection.execute(`DELETE FROM product_page_customer_feedback`);
    await connection.execute(`DELETE FROM multi_profile_faqs`);

    // اضافه کردن پلن‌ها
    for (const plan of plans) {
      await connection.execute(
        `INSERT INTO product_page_plans (id, title, description1, amount, description2, features) VALUES (?, ?, ?, ?, ?, ?)`,
        [plan.id, plan.title, plan.description1, plan.amount, plan.description2, JSON.stringify(plan.features)]
      );
    }

    // اضافه کردن نظرات مشتریان
    for (const t of testimonials) {
      await connection.execute(
        `INSERT INTO product_page_customer_feedback (id, name, jobTitle, rating, date, description, image, profile_img) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [t.id, t.name, t.jobTitle, t.rating, t.date, t.description, t.image,t.profile_img]
      );
    }

    // اضافه کردن سوالات متداول
    for (const f of faqs) {
      await connection.execute(
        `INSERT INTO multi_profile_faqs (id, question, answer) VALUES (?, ?, ?)`,
        [f.id, f.question, f.answer]
      );
    }

    await connection.commit();
    connection.release();

    return NextResponse.json({ message: "Multi-profile data updated successfully" }, { status: 200 });
  } catch (err) {
    console.error("PUT multi-profile error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to update multi-profile data" },
      { status: 500 }
    );
  }
}
