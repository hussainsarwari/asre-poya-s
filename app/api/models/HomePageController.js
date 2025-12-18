const db = require("./db");
const fs = require("fs");
const path = require("path");

class HomePageController {



// ========================  UPDATE product item BY ID ==================
static async updateProduct(payload) {
  const connection = await db.getConnection();
  const uploadDir = path.join(
    process.cwd(),
    "public",
    "uploads",
  );

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

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
      newImageName = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}${ext}`;

      const filePath = path.join(uploadDir, newImageName);
      const buffer = Buffer.from(await file.arrayBuffer());

      // ذخیره فایل جدید
      fs.writeFileSync(filePath, buffer);

      // 3. حذف فایل قبلی
      if (oldImageName) {
        const oldFilePath = path.join(uploadDir, oldImageName);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
    }

    // 4. آپدیت دیتابیس
    await connection.execute(
      `UPDATE home_page_product
       SET product_name = ?,
           product_img  = COALESCE(?, product_img),
           description  = ?
       WHERE id = ?`,
      [payload.name, newImageName, payload.description, payload.id]
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
            product_name   AS name,
            description,
            product_img    AS image
          FROM home_page_product
          WHERE id = ?`,
        [id]
      );
      if (rows.length === 0) {
        throw new Error("Product not found");
      }

      const product = rows[0];
      product.image = product.image ? `/uploads/${product.image}` : null;

      
      return product;
    } finally {
      connection.release();
    }
  }

// ================ DELETE product item ==================
static async deleteProduct(id) {
  const connection = await db.getConnection();
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  try {
    await connection.beginTransaction();

    // 1️⃣ گرفتن نام فایل از دیتابیس
    const [rows] = await connection.execute(
      "SELECT product_img FROM home_page_product WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      throw new Error("Partner not found");
    }

    const oldImage = rows[0].product_img;

    // 2️⃣ ساخت مسیر واقعی فایل روی سرور
    if (oldImage) {
      const imagePath = path.join(uploadDir, oldImage);
      console.log("path:",imagePath);
      

      // 3️⃣ حذف فایل از دیسک اگر وجود داشت
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // 4️⃣ حذف رکورد از دیتابیس
    await connection.execute(
      "DELETE FROM home_page_product WHERE id = ?",
      [id]
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
// ================ DELETE PARTNER LOGO ==================
static async deletePartnerLogo(id) {
  const connection = await db.getConnection();
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  try {
    await connection.beginTransaction();

    // 1️⃣ گرفتن نام فایل از دیتابیس
    const [rows] = await connection.execute(
      "SELECT image FROM our_partener WHERE id = ?",
      [id]
    );

   

    const oldImage = rows[0].image;

    // 2️⃣ ساخت مسیر واقعی فایل روی سرور
    if (oldImage) {
      const imagePath = path.join(uploadDir, oldImage);
      console.log("path:",imagePath);
      

      // 3️⃣ حذف فایل از دیسک اگر وجود داشت
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // 4️⃣ حذف رکورد از دیتابیس
    await connection.execute(
      "DELETE FROM our_partener WHERE id = ?",
      [id]
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
// ============== REPLACE PARTNER IMG ==================
static async replacePartnerImg(payload) {
  const connection = await db.getConnection();
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  try {
    await connection.beginTransaction();

    const [rows] = await connection.execute(
      "SELECT image FROM our_partener WHERE id = ?",
      [payload.id]
    );

    if (rows.length === 0) throw new Error("Partner not found");

    const oldImage = rows[0].image;
    if (oldImage && fs.existsSync(path.join(uploadDir, oldImage))) {
      fs.unlinkSync(path.join(uploadDir, oldImage));
    }

    // ← این خط اصلاح شد
    const ext = path.extname(payload.file.name);
    const newImageName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
    const buffer = Buffer.from(await payload.file.arrayBuffer());
    fs.writeFileSync(path.join(uploadDir, newImageName), buffer);

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

  /* ================= SAVE btn (POST) ================= */
  static async saveHomepage(payload) {
    if (!payload) throw new Error("Invalid payload");

    const connection = await db.getConnection();
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    try {
      await connection.beginTransaction();

      /* ===== UPDATE STATISTICS ===== */
      if (payload.statistics) {
        const { workExperience, activeUsers } = payload.statistics;
        
        await connection.execute(
          `UPDATE home_general_statistic
          SET work_experience = ?,
               active_client   = ?
           WHERE id = 2`,
          [workExperience, activeUsers]
        );
      }
      
      /* ===== INSERT PRODUCTS ===== */
      for (const product of payload.products || []) {
        if (!product.name) continue;

        let imageName = null;
        if (product.image) {
          const ext = path.extname(product.image.name);
          imageName = `${Date.now()}-${Math.random()
            .toString(36)
            .slice(2)}${ext}`;

          const buffer = Buffer.from(await product.image.arrayBuffer());
          fs.writeFileSync(path.join(uploadDir, imageName), buffer);
        }

        await connection.execute(
          `INSERT INTO home_page_product
           (product_name, product_img, description)
           VALUES (?, ?, ?)`,
          [product.name, imageName, product.description || null]
        );
      }

      /* ===== INSERT PARTNERS ===== */
      for (const partnerFile of payload.partners || []) {
        if (!partnerFile) continue;

        const ext = path.extname(partnerFile.name);
        const logoName = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}${ext}`;

        const buffer = Buffer.from(await partnerFile.arrayBuffer());
        fs.writeFileSync(path.join(uploadDir, logoName), buffer);

        await connection.execute(
          `INSERT INTO our_partener (image) VALUES (?)`,
          [logoName]
        );
      }

      /* ===== INSERT REVIEWS ===== */
      for (const review of payload.reviews || []) {
        if (!review.firstName || !review.rating) continue;

        let photoName = null;
        if (review.photo) {
          const ext = path.extname(review.photo.name);
          photoName = `${Date.now()}-${Math.random()
            .toString(36)
            .slice(2)}${ext}`;

          const buffer = Buffer.from(await review.photo.arrayBuffer());
          fs.writeFileSync(path.join(uploadDir, photoName), buffer);
        }

        await connection.execute(
          `INSERT INTO home_customer_feedback
           (customer_name, customer_lastname, customer_job, description, feedback_date, rating, photo)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            review.firstName,
            review.lastName || null,
            review.jobTitle || null,
            review.description || null,
            review.date || null,
            review.rating,
            photoName,
          ]
        );
      }

      await connection.commit();
      return { success: true };

    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  /* ================= GET all home page contents (NEW) ================= */
  static async getHomepage() {
    const connection = await db.getConnection();

    try {
      /* ===== STATISTICS ===== */
      const [statistics] = await connection.execute(
        `SELECT work_experience, active_client
         FROM home_general_statistic
         WHERE id = 2`
      );

      /* ===== PRODUCTS ===== */
      const [products] = await connection.execute(
        `SELECT
           id,
           product_name   AS name,
           description,
           product_img    AS image
         FROM home_page_product`
      );

      /* ===== PARTNERS ===== */
      const [partners] = await connection.execute(
        `SELECT
           id,
           image
         FROM our_partener`
      );

      /* ===== REVIEWS ===== */
      const [reviews] = await connection.execute(
        `SELECT
           id,
           customer_name      AS firstName,
           customer_lastname  AS lastName,
           customer_job       AS jobTitle,
           description,
           feedback_date      AS date,
           rating,
           photo
         FROM home_customer_feedback`
      );

      /* ===== ADD IMAGE URL PREFIX ===== */
      const withImagePath = (file) =>
        file ? `/uploads/${file}` : null;

      return {
        statistics: statistics[0] || {},
        products: products.map(p => ({
          ...p,
          image: withImagePath(p.image),
        })),
        partners: partners.map(p => ({
          ...p,
          image: withImagePath(p.image),
        })),
        reviews: reviews.map(r => ({
          ...r,
          photo: withImagePath(r.photo),
        })),
      };

    } finally {
      connection.release();
    }
  }
}

module.exports = HomePageController;
