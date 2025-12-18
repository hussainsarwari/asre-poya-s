import { NextResponse } from "next/server";
import HomePageController from "../../../models/HomePageController";
// Replace homepage partner logo
export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const file = formData.get("file"); // File object

  // گرفتن id
  const id = formData.get("id");     // string

    const data = {
        id: id,
        file: file
    };


    
    const result = await HomePageController.replacePartnerImg(data);
console.log(result);

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


// Delete homepage partner logo
export async function DELETE(request) {
  try {
    const formData = await request.formData();
console.log("logo ID:" ,formData);

  // گرفتن id
  const id = formData.get("id");     // string

    const data = {
        id: id,
      
    };

    
    const result = await HomePageController.deletePartnerLogo(data.id)  ;

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
