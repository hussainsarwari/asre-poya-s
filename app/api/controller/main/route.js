import { NextResponse } from "next/server";
import HomePageController from "../../models/HomePageController";


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

export async function POST(request) {
  try {
    const formData = await request.formData();

    // statistics
    const statistics = JSON.parse(formData.get("statistics"));

    // products
    const products = [];
    let i = 0;
    while (formData.get(`products[${i}][name]`)) {
      products.push({
        name: formData.get(`products[${i}][name]`),
        description: formData.get(`products[${i}][description]`),
        image: formData.get(`products[${i}][image]`), // File
      });
      i++;
    }
    
      console.log(" product ==============", products);

    const length = [...formData.keys()].length;
    // partners
    const partners = [];

for (let i = 0; i < length; i++) {

  partners.push(formData.get(`partners[${i}]`)); // File
  
}





    

    // reviews
    const reviews = [];
    i = 0;
    while (formData.get(`reviews[${i}][firstName]`)) {
      reviews.push({
        firstName: formData.get(`reviews[${i}][firstName]`),
        lastName: formData.get(`reviews[${i}][lastName]`),
        jobTitle: formData.get(`reviews[${i}][jobTitle]`),
        description: formData.get(`reviews[${i}][description]`),
        date: formData.get(`reviews[${i}][date]`),
        rating: formData.get(`reviews[${i}][rating]`),
        photo: formData.get(`reviews[${i}][photo]`), // File
      });
      i++;
    }

    const data = {
      statistics,
      products,
      partners,
      reviews,
    };

    const result = await HomePageController.saveHomepage(data);

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
