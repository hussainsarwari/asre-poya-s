import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();

        //  formData.get(`reviews[${i}][firstName]`),
        //  formData.get(`reviews[${i}][lastName]`),
        //  formData.get(`reviews[${i}][jobTitle]`),
        //  formData.get(`reviews[${i}][description]`),
        //  formData.get(`reviews[${i}][date]`),
        //  formData.get(`reviews[${i}][rating]`),
        //  formData.get(`reviews[${i}][photo]`), 


    
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
