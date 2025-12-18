// app/api/controller/main/products/update/route.js
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
// Get product by ID
import db from "../../../../../api/models/db"; // مسیر اتصال به دیتابیس

export async function GET(req) {
  const url = new URL(req.url);
  const productId = url.searchParams.get("id"); // گرفتن id از query string
  // if (!productId) {
  //   return NextResponse.json(
  //     { error: "Product ID is required" },
  //     { status: 400 }
  //   );
  // }
  
  
  const connection = await db.getConnection();
  
  const [rows] = await connection.execute(
    `SELECT id, customer_name, customer_lastname, customer_job, description, feedback_date, rating, photo
    FROM home_customer_feedback
    WHERE id = ?`,
    [productId]
  );

    connection.release();

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    const productData = rows[0];

    return NextResponse.json(
      {
        message: "Product data fetched successfully",
        data: productData,
      },
      { status: 200 }
    );
 
}
export async function PUT(req) {
  try {
    const formData = await req.formData();

    const id = formData.get("id");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const jobTitle = formData.get("jobTitle");
    const description = formData.get("description");
    const rating = formData.get("rating");
    const oldImageName = formData.get("old_img_name");
    const newImage = formData.get("new_img_file");

    if (!id) {
      return NextResponse.json(
        { error: "Review ID is required" },
        { status: 400 }
      );
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // پیش‌فرض: عکس قبلی
    let imageName = oldImageName;

    // فقط اگر عکس جدید ارسال شده باشد
    if (newImage && newImage.size > 0) {
      const ext = path.extname(newImage.name);
      imageName = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}${ext}`;

      const buffer = Buffer.from(await newImage.arrayBuffer());
      const filePath = path.join(uploadDir, imageName);
      fs.writeFileSync(filePath, buffer);

      // حذف عکس قبلی
      if (oldImageName) {
        const oldFilePath = path.join(uploadDir, oldImageName);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
    }

    const connection = await db.getConnection();
    await connection.beginTransaction();

    const [result] = await connection.execute(
      `UPDATE home_customer_feedback
       SET customer_name = ?,
           customer_lastname = ?,
           customer_job = ?,
           description = ?,
           feedback_date = NOW(),
           rating = ?,
           photo = ?
       WHERE id = ?`,
      [
        firstName,
        lastName,
        jobTitle,
        description,
        rating,
        imageName,
        id,
      ]
    );

    await connection.commit();
    connection.release();

    return NextResponse.json(
      { message: "Review updated successfully", data: result },
      { status: 200 }
    );
  } catch (err) {
    console.error("PUT review error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to update review" },
      { status: 500 }
    );
  }
}
