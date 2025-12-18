// app/api/controller/main/products/update/route.js
import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";


// import db from "../../../../api/models/db"; 

export async function GET(req) {
  const url = new URL(req.url);
  const ID = url.searchParams.get("id"); // گرفتن id از query string
 

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
