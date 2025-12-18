// app/api/controller/main/products/update/route.js
import { NextResponse } from "next/server";

import db from "../../../../api/models/db"; // مسیر اتصال به دیتابیس


export async function PUT(req) {
  try {
    const formData = await req.formData();

    // const id = formData.get("id");
    // const firstName = formData.get("firstName");
    // const lastName = formData.get("lastName");
    // const jobTitle = formData.get("jobTitle");
    // const description = formData.get("description");
    // const rating = formData.get("rating");
    // const oldImageName = formData.get("old_img_name");
    // const newImage = formData.get("new_img_file");

    if (!id) {
      return NextResponse.json(
        { error: "Review ID is required  products/put/route" },
        { status: 400 }
      );
    }

    const connection = await db.getConnection();
    await connection.beginTransaction();

    const [result] = await connection.execute(
     "sql code here"
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
