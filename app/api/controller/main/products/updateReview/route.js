// app/api/controller/main/products/update/route.js
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
// Get product by ID
import db from "../../../../../api/models/db"; // مسیر اتصال به دیتابیس
// get review for edit by id

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const reviewID = url.searchParams.get("id");

    if (!reviewID) {
      return NextResponse.json(
        { error: "Review ID is required" },
        { status: 400 }
      );
    }

    const connection = await db.getConnection();

    try {
      const [rows] = await connection.execute(
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
         FROM home_customer_feedback
         WHERE id = ?`,
        [reviewID]
      );


      if (!rows || rows.length === 0) {
        return NextResponse.json(
          { error: "Review not found" },
          { status: 404 }
        );
      }

      const reviewData = rows[0];

      // مسیر کامل تصویر
      reviewData.photo = reviewData.photo
        ? `/${reviewData.photo}`
        : null;

      return NextResponse.json(
        {
          message: "Review data fetched successfully",
          data: reviewData,
        },
        { status: 200 }
      );
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error("Error fetching review:", err);
    return NextResponse.json(
      { error: "Failed to fetch review" },
      { status: 500 }
    );
  }
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
