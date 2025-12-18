// app/api/controller/main/products/update/route.js
import { NextResponse } from "next/server";
import HomePageController from "../../../../models/HomePageController";
import fs from "fs";
import path from "path";
// Get product by ID
export async function GET(req) {
 
    const url = new URL(req.url);
    const productId = url.searchParams.get("id"); // گرفتن id از query string


    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    const productData = await HomePageController.getProductById(productId);

    return NextResponse.json({
      message: "Product data fetched successfully",
      data: productData,
    }, { status: 200 });
 
  
}
// Update product by ID

export async function PUT(req) {

    const formData = await req.formData();
    const id = formData.get("id");
    const name = formData.get("name");
    const description = formData.get("description");
    const product_img_name = formData.get("product_img_name"); // نام فایل قبلی
    const product_img_new_img = formData.get("product_img_new_img"); // فایل جدید


  console.log("product new img & product old img:", {
    product_img_new_img,
    product_img_name,
  }); 

    const result = await HomePageController.updateProduct({
      id,
      name,
      description,
      product_img_old_img: product_img_name,
      product_img_new_img: product_img_new_img,
    });

    return NextResponse.json({
      message: "Product updated successfully",
      data: "result",
    });
 
  
}