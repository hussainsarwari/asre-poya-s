import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const formData = await request.formData();
  

  // گرفتن id
  const id = formData.get("id");     // string

    const data = {
        id: id,
      
    };
    // sql code 
    
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
