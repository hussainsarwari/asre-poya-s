const db = require("./db");
const fs = require("fs").promises; // ✅ async/await version
const path = require("path");

class HomePageController {
  // ========================  UPDATE product item BY ID ==================
static async updateProduct(payload) {
  const connection = await db.getConnection();
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  // ایجاد پوشه در صورت عدم وجود
  await fs.mkdir(uploadDir, { recursive: true });

  await connection.beginTransaction();

  try {
    let newImageName = null;

    // 1. گرفتن نام فایل قبلی از دیتابیس
    const [[product]] = await connection.execute(
      "SELECT product_img FROM home_page_product WHERE id = ?",
      [payload.id]
    );

    const oldImageName = product?.product_img;

    // 2. اگر فایل جدید ارسال شده
    if (payload.product_img_new_img) {
      const file = payload.product_img_new_img;

      const ext = path.extname(file.name);
      newImageName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;

      const filePath = path.join(uploadDir, newImageName);
      const buffer = Buffer.from(await file.arrayBuffer());

      await fs.writeFile(filePath, buffer);

      // 3. حذف فایل قبلی
      if (oldImageName) {
        const oldFilePath = path.join(uploadDir, oldImageName);
        try {
          await fs.access(oldFilePath);
          await fs.unlink(oldFilePath);
        } catch {}
      }
    }

    // 4. آپدیت دیتابیس شامل EN / FA / PS
    await connection.execute(
      `UPDATE home_page_product
       SET product_name       = ?,
           description        = ?,
           product_name_fa    = ?,
           description_fa     = ?,
           product_name_ps    = ?,
           description_ps     = ?,
           product_img        = COALESCE(?, product_img)
       WHERE id = ?`,
      [
        payload.name || null,
        payload.description || null,
        payload.name_fa || null,
        payload.description_fa || null,
        payload.name_ps || null,
        payload.description_ps || null,
        newImageName,
        payload.id,
      ]
    );

    await connection.commit();
    return { success: true };
  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    connection.release();
  }
}


  /* ================= GET product by ID ================= */
static async getProductById(id) {
  const connection = await db.getConnection();
  try {
    const [rows] = await connection.execute(
      `SELECT
         id,
         product_name,
         description,
         product_name_fa,
         description_fa,
         product_name_ps,
         description_ps,
         product_img AS image
       FROM home_page_product
       WHERE id = ?`,
      [id]
    );

    if (!rows.length) throw new Error("Product not found");

    const product = rows[0];

    // اطمینان از مقداردهی اولیه برای همه فیلدها
    product.product_name = product.product_name || "";
    product.description = product.description || "";
    product.product_name_fa = product.product_name_fa || "";
    product.description_fa = product.description_fa || "";
    product.product_name_ps = product.product_name_ps || "";
    product.description_ps = product.description_ps || "";

    product.image = product.image ? `/uploads/${product.image}` : null;

    return product;
  } finally {
    connection.release();
  }
}


  // ================= DELETE product item ==================
  static async deleteProduct(id) {
    const connection = await db.getConnection();
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    try {
      await connection.beginTransaction();

      const [rows] = await connection.execute(
        "SELECT product_img FROM home_page_product WHERE id = ?",
        [id]
      );

      if (!rows.length) throw new Error("Product not found");

      const oldImage = rows[0].product_img;
      if (oldImage) {
        const imagePath = path.join(uploadDir, oldImage);
        try {
          await fs.access(imagePath);
          await fs.unlink(imagePath);
        } catch {}
      }

      await connection.execute("DELETE FROM home_page_product WHERE id = ?", [id]);
      await connection.commit();
      return { success: true };
    } catch (err) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  }

  // ================= DELETE PARTNER LOGO ==================
  static async deletePartnerLogo(id) {
    const connection = await db.getConnection();
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    try {
      await connection.beginTransaction();

      const [rows] = await connection.execute(
        "SELECT image FROM our_partener WHERE id = ?",
        [id]
      );

      const oldImage = rows[0]?.image;
      if (oldImage) {
        const imagePath = path.join(uploadDir, oldImage);
        try {
          await fs.access(imagePath);
          await fs.unlink(imagePath);
        } catch {}
      }

      await connection.execute("DELETE FROM our_partener WHERE id = ?", [id]);
      await connection.commit();
      return { success: true };
    } catch (err) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  }

  // ================= REPLACE PARTNER IMG ==================
  static async replacePartnerImg(payload) {
    const connection = await db.getConnection();
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    await fs.mkdir(uploadDir, { recursive: true });

    try {
      await connection.beginTransaction();

      const [rows] = await connection.execute(
        "SELECT image FROM our_partener WHERE id = ?",
        [payload.id]
      );

      if (!rows.length) throw new Error("Partner not found");

      const oldImage = rows[0]?.image;
      if (oldImage) {
        const oldPath = path.join(uploadDir, oldImage);
        try {
          await fs.access(oldPath);
          await fs.unlink(oldPath);
        } catch {}
      }

      const ext = path.extname(payload.file.name);
      const newImageName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
      const buffer = Buffer.from(await payload.file.arrayBuffer());
      await fs.writeFile(path.join(uploadDir, newImageName), buffer);

      await connection.execute(
        "UPDATE our_partener SET image = ? WHERE id = ?",
        [newImageName, payload.id]
      );

      await connection.commit();
      return { success: true, url: `/uploads/${newImageName}` };
    } catch (err) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  }

  // ================= SAVE HOMEPAGE ==================
  static async saveHomepage(payload) {
    if (!payload) throw new Error("Invalid payload");

    const connection = await db.getConnection();
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    try {
      await connection.beginTransaction();

      // ===== UPDATE STATISTICS =====
      if (payload.statistics) {
        const { workExperience, activeUsers } = payload.statistics;
        await connection.execute(
          `UPDATE home_general_statistic
           SET work_experience = ?, active_client = ?
           WHERE id = 2`,
          [workExperience, activeUsers]
        );
      }

      // ===== INSERT PRODUCTS =====
      for (const product of payload.products || []) {
        if (!product.name) continue;

        let imageName = null;
        if (product.image && product.image instanceof File) {
          const ext = path.extname(product.image.name);
          imageName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
          const buffer = Buffer.from(await product.image.arrayBuffer());
          await fs.writeFile(path.join(uploadDir, imageName), buffer);
        }

        await connection.execute(
          `INSERT INTO home_page_product
           (product_name, product_img, description, product_name_fa, description_fa, product_name_ps, description_ps)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            product.name,
            imageName,
            product.description || null,
            product.name_fa || null,
            product.description_fa || null,
            product.name_ps || null,
            product.description_ps || null,
          ]
        );
      }

      // ===== INSERT PARTNERS =====
   
      for (const partnerFile of payload.partners || []) {
        
        if (!partnerFile || !(partnerFile instanceof File)) continue;

        const ext = path.extname(partnerFile.name);
        const logoName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
        const buffer = Buffer.from(await partnerFile.arrayBuffer());
        await fs.writeFile(path.join(uploadDir, logoName), buffer);

        await connection.execute(
          `INSERT INTO our_partener (image) VALUES (?)`,
          [logoName]
        );
      }

      
      // ===== INSERT REVIEWS =====
      for (const review of payload.reviews || []) {
  console.log("Received homepage data:", review);
  // حداقل نام انگلیسی و امتیاز باید موجود باشد
  if (!review.firstName || !review.rating) continue;

  let photoName = null;
  if (review.photo && review.photo instanceof File) {
    const ext = path.extname(review.photo.name);
    photoName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
    const buffer = Buffer.from(await review.photo.arrayBuffer());
    await fs.writeFile(path.join(uploadDir, photoName), buffer);
  }


  

  await connection.execute(
    `INSERT INTO home_customer_feedback
     (customer_name, customer_lastname, customer_job, description,
      customer_name_fa, customer_lastname_fa, customer_job_fa, description_fa,
      customer_name_ps, customer_lastname_ps, customer_job_ps, description_ps,
      feedback_date, rating, photo)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      review.firstName,
      review.lastName ,
      review.jobTitle ,
      review.description ,
      review.firstName_fa ,
      review.lastName_fa ,
      review.jobTitle_fa ,
      review.description_fa ,
      review.firstName_ps ,
      review.lastName_ps ,
      review.jobTitle_ps ,
      review.description_ps ,
      review.date ,
      review.rating,
      photoName,
    ]
  );
}


      await connection.commit();
      return { success: true };
    } catch (error) {
      await connection.rollback();
      console.error("Error saving homepage:", error);
      throw error;
    } finally {
      connection.release();
    }
  }

  // ================= GET HOMEPAGE ==================
  static async getHomepage() {
    const connection = await db.getConnection();
    try {
      const [statistics] = await connection.execute(
        `SELECT work_experience, active_client FROM home_general_statistic WHERE id = 2`
      );

      const [products] = await connection.execute(
        `SELECT
          id,
          product_name AS name,
          description,
          product_name_fa AS name_fa,
          description_fa AS description_fa,
          product_name_ps AS name_ps,
          description_ps AS description_ps,
          product_img AS image
         FROM home_page_product`
      );

      const [partners] = await connection.execute(
        `SELECT id, image FROM our_partener`
      );

      const [reviews] = await connection.execute(
        `SELECT
           id,
           customer_name AS firstName,
           customer_lastname AS lastName,
           customer_job AS jobTitle,
           description,
           customer_name_fa AS firstName_fa,
           customer_lastname_fa AS lastName_fa,
           customer_job_fa AS jobTitle_fa,
           description_fa AS description_fa,
           customer_name_ps AS firstName_ps,
           customer_lastname_ps AS lastName_ps,
           customer_job_ps AS jobTitle_ps,
           description_ps AS description_ps,
           feedback_date AS date,
           rating,
           photo
         FROM home_customer_feedback`
      );

      const withImagePath = (file) => (file ? `/uploads/${file}` : null);

      return {
        statistics: statistics[0] || {},
        products: products.map((p) => ({ ...p, image: withImagePath(p.image) })),
        partners: partners.map((p) => ({ ...p, image: withImagePath(p.image) })),
        reviews: reviews.map((r) => ({ ...r, photo: withImagePath(r.photo) })),
      };
    } finally {
      connection.release();
    }
  }
}

module.exports = HomePageController;
