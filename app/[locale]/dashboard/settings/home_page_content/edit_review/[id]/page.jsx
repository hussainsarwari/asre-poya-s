"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import Swal from "sweetalert2";

export default function EditReviewPage() {
  const router = useRouter();
  const { id: reviewId } = useParams();

  const [review, setReview] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    description: "",
    rating: "",
    old_img_name: null,
    new_img: null,
    new_img_name: "",
    imgPreview: "",
  });

  // Fetch review data
  useEffect(() => {
    const fetchReview = async () => {
      if (!reviewId) return;

      const res = await fetch(`/api/controller/main/products/updateReview?id=${reviewId}`);
      const { data } = await res.json();
       const fileName = data?.image
        ? data.image.split("/").pop()
        : "";

      setReview({
        firstName: data?.customer_name || "",
        lastName: data?.customer_lastname || "",
        jobTitle: data?.customer_job || "",
        description: data?.description || "",
        rating: data?.rating || "",
        old_img_name: data?.photo || null,
        new_img: null,
        new_img_name: fileName,
        imgPreview: data?.photo || "",
      });
    };

    fetchReview();
  }, [reviewId]);
  
  // Cleanup blob URLs
  useEffect(() => {
    return () => {
      if (review.imgPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(review.imgPreview);
      }
    };
  }, [review.imgPreview]);
  
  // Input handlers
  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setReview({
      old_img_name: review.new_img_name,     
    })
    // console.log("Selected file:", file.name);
    
    setReview((prev) => {
      // آزادسازی blob قبلی
      
      if (prev.imgPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(prev.imgPreview);
      }
      
      setReview({
        ...prev,
        new_img: file,
        new_img_name: file.name,
        imgPreview: URL.createObjectURL(file),
      }); 
      
      
      return {
       
        new_img_name: file.name,
        new_img: file,
        imgPreview: URL.createObjectURL(file),
      };
    });
  };


  // Save handler
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("id", reviewId);
      formData.append("firstName", review.customer_name);
      formData.append("lastName", review.customer_lastname);
      formData.append("jobTitle", review.customer_job);
      formData.append("description", review.description);
      formData.append("rating", review.rating);
      formData.append("old_img_name", review.old_img_name);
      formData.append("new_img_name", review.new_img_name);
      formData.append("new_img_file", review.new_img);
      


      const res = await fetch(`/api/controller/main/products/updateReview?id=${reviewId}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update review");

      Swal.fire({
        icon: "success",
        title: "Review updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      router.back();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };

  // UI
  return (
    <div className="max-w-lg p-8 mx-auto space-y-8 shadow-md bg-gray-50 rounded-xl">
      <h1 className="text-2xl font-semibold text-center text-gray-800">
        Edit User Review
      </h1>

      <div className="flex flex-col space-y-6">
        {/* First & Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 text-sm font-medium text-gray-700">First Name</label>
            <input
              name="firstName"
              value={review.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="mb-2 text-sm font-medium text-gray-700">Last Name</label>
            <input
              name="lastName"
              value={review.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>
        </div>

        {/* Job Title */}
        <div>
          <label className="mb-2 text-sm font-medium text-gray-700">Job Title</label>
          <input
            name="jobTitle"
            value={review.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />
        </div>

        {/* Review Description */}
        <div>
          <label className="mb-2 text-sm font-medium text-gray-700">Review</label>
          <textarea
            name="description"
            value={review.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border rounded-lg resize-none"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="mb-2 text-sm font-medium text-gray-700">Rating (1–5)</label>
          <input
            type="number"
            name="rating"
            min={1}
            max={5}
            value={review.rating}
            onChange={handleChange}
            className="w-24 px-4 py-3 border rounded-lg"
          />
        </div>

        {/* Image */}
        <div>
          <label className="mb-2 text-sm font-medium text-gray-700">User Photo</label>
          <input type="file" onChange={handleImageChange} className="text-sm" />

          {review.imgPreview && (
            <div className="relative w-32 h-32 mt-2 border rounded">
              <Image
                src={"/uploads/" + review.old_img_name}
                alt="User Photo"
                fill
                className="object-cover rounded"
              />
            </div>
          )}
          <h1>{review.new_img_name}</h1>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
