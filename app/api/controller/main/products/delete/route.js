import { NextResponse } from "next/server";
import HomePageController from "../../../../models/HomePageController";

export async function DELETE(request) {
  try {
    const formData = await request.formData();
  

  // گرفتن id
  const id = formData.get("id");     // string

    const data = {
        id: id,
      
    };

    
    const result = await HomePageController.deleteProduct(data.id)  ;

    return NextResponse.json(
      { message: "Homepage data saved successfully", data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Invalid form data" },
      { status: 500 }
    );
  }
}
