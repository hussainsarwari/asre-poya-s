import { NextResponse } from "next/server";
import HomePageController from "../../models/HomePageController";
import db from "../../../api/models/db"; 
import { log } from "console";
// get home page data
export async function GET() {
  try {
    const data = await HomePageController.getHomepage();

    return NextResponse.json(
      {
        message: "Homepage data fetched successfully",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch homepage data" },
      { status: 500 }
    );
  }
}

// insert new data to home page
export async function POST(request) {
  try {
    const formData = await request.formData();

    // ===== Statistics =====
    const statisticsRaw = formData.get("statistics");
    const statistics = statisticsRaw ? JSON.parse(statisticsRaw) : {};

    // ===== Products =====
    const products = [];
    let i = 0;
    while (formData.get(`products[${i}][name]`)) {
      products.push({
        name: formData.get(`products[${i}][name]`),
        description: formData.get(`products[${i}][description]`),
        name_fa: formData.get(`products[${i}][name_fa]`) || null,
        description_fa: formData.get(`products[${i}][description_fa]`) || null,
        name_ps: formData.get(`products[${i}][name_ps]`) || null,
        description_ps: formData.get(`products[${i}][description_ps]`) || null,
        image:
          formData.get(`products[${i}][image]`) instanceof File
            ? formData.get(`products[${i}][image]`)
            : null,
      });
      i++;
    }

   // ===== Partners =====
const partners = [];

// پیمایش تمام کلیدهای FormData
for (let [key, value] of formData.entries()) {
  if (key.startsWith("partners[") && value instanceof File) {
    partners.push(value);
  }
}

console.log("Partners files:", partners);


    // ===== Reviews =====
    const reviews = [];
    i = 0;
    while (formData.get(`reviews[${i}][firstName]`)) {
      reviews.push({
        firstName: formData.get(`reviews[${i}][firstName]`),
        lastName: formData.get(`reviews[${i}][lastName]`),
        jobTitle: formData.get(`reviews[${i}][jobTitle]`),
        description: formData.get(`reviews[${i}][description]`),
        firstName_fa: formData.get(`reviews[${i}][firstName_fa]`) || null,
        lastName_fa: formData.get(`reviews[${i}][lastName_fa]`) || null,
        jobTitle_fa: formData.get(`reviews[${i}][jobTitle_fa]`) || null,
        description_fa: formData.get(`reviews[${i}][description_fa]`) || null,
        firstName_ps: formData.get(`reviews[${i}][firstName_ps]`) || null,
        lastName_ps: formData.get(`reviews[${i}][lastName_ps]`) || null,
        jobTitle_ps: formData.get(`reviews[${i}][jobTitle_ps]`) || null,
        description_ps: formData.get(`reviews[${i}][description_ps]`) || null,
        date: formData.get(`reviews[${i}][date]`) || null,
        rating: formData.get(`reviews[${i}][rating]`) || null,
        photo:
          formData.get(`reviews[${i}][photo]`) instanceof File
            ? formData.get(`reviews[${i}][photo]`)
            : null,
      });
      i++;
    }

    const data = { statistics, products, partners, reviews };


    
  
    // ===== Save data via controller =====
    const result = await HomePageController.saveHomepage(data);

    return NextResponse.json(
      { message: "Homepage data saved successfully", data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /homepage:", error);
    return NextResponse.json({ error: "Invalid form data" }, { status: 500 });
  }
}


export async function DELETE(request) {
  try {
    const formData = await request.formData();
    const id = formData.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Review ID is required" },
        { status: 400 }
      );
    }

    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();

      // 1️⃣ گرفتن نام فایل عکس review از دیتابیس
      const [rows] = await connection.execute(
        "SELECT photo FROM home_customer_feedback WHERE id = ?",
        [id]
      );

      if (rows.length === 0) {
        throw new Error("Review not found");
      }

      const photoName = rows[0].photo;

      // 2️⃣ حذف فایل عکس از پوشه uploads اگر وجود داشته باشد
      if (photoName) {
        const fs = require("fs");
        const path = require("path");
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        const photoPath = path.join(uploadDir, photoName);
        if (fs.existsSync(photoPath)) {
          fs.unlinkSync(photoPath);
        }
      }

      // 3️⃣ حذف رکورد از جدول
      await connection.execute(
        "DELETE FROM home_customer_feedback WHERE id = ?",
        [id]
      );

      await connection.commit();

      return NextResponse.json(
        { message: "Review deleted successfully" },
        { status: 200 }
      );
    } catch (err) {
      await connection.rollback();
      console.error(err);
      return NextResponse.json(
        { error: err.message || "Failed to delete review" },
        { status: 500 }
      );
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 }
    );
  }
}
