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
    firstName_fa: "",
    lastName_fa: "",
    jobTitle_fa: "",
    description_fa: "",
    firstName_ps: "",
    lastName_ps: "",
    jobTitle_ps: "",
    description_ps: "",
  });

  // Fetch review data
  useEffect(() => {
    const fetchReview = async () => {
      if (!reviewId) return;
      try {
        const res = await fetch(`/api/controller/main/products/updateReview?id=${reviewId}`);
        if (!res.ok) throw new Error("Failed to fetch review");
        const { data } = await res.json();

        const fileName = data?.photo ? data.photo.split("/").pop() : "";

        setReview({
          firstName: data?.firstName || "",
          lastName: data?.lastName || "",
          jobTitle: data?.jobTitle || "",
          description: data?.description || "",
          rating: data?.rating || "",
          old_img_name: data?.photo || null,
          new_img: null,
          new_img_name: fileName,
          imgPreview: data?.photo || "",
          firstName_fa: data?.firstName_fa || "",
          lastName_fa: data?.lastName_fa || "",
          jobTitle_fa: data?.jobTitle_fa || "",
          description_fa: data?.description_fa || "",
          firstName_ps: data?.firstName_ps || "",
          lastName_ps: data?.lastName_ps || "",
          jobTitle_ps: data?.jobTitle_ps || "",
          description_ps: data?.description_ps || "",
        });
      } catch (err) {
        console.error("Error fetching review:", err);
      }
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
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setReview((prev) => {
      if (prev.imgPreview?.startsWith("blob:")) URL.revokeObjectURL(prev.imgPreview);

      return {
        ...prev,
        new_img: file,
        new_img_name: file.name,
        imgPreview: URL.createObjectURL(file),
      };
    });
  };

  // Save handler
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("id", reviewId);
      // English
      formData.append("firstName", review.firstName);
      formData.append("lastName", review.lastName);
      formData.append("jobTitle", review.jobTitle);
      formData.append("description", review.description);
      formData.append("rating", review.rating);
      // Existing image
      formData.append("old_img_name", review.old_img_name);
      formData.append("new_img_name", review.new_img_name);
      if (review.new_img) formData.append("new_img_file", review.new_img);
      // Farsi
      formData.append("firstName_fa", review.firstName_fa);
      formData.append("lastName_fa", review.lastName_fa);
      formData.append("jobTitle_fa", review.jobTitle_fa);
      formData.append("description_fa", review.description_fa);
      // Pashto
      formData.append("firstName_ps", review.firstName_ps);
      formData.append("lastName_ps", review.lastName_ps);
      formData.append("jobTitle_ps", review.jobTitle_ps);
      formData.append("description_ps", review.description_ps);

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

  return (
    <div className="max-w-lg p-8 mx-auto space-y-8 shadow-md bg-gray-50 rounded-xl">
      <h1 className="text-2xl font-semibold text-center text-gray-800">Edit User Review</h1>

      <div className="flex flex-col space-y-6">
        {/* Names */}
        <div className="grid grid-cols-2 gap-4">
          <input name="firstName" value={review.firstName} onChange={handleChange} placeholder="First Name" className="px-4 py-3 border rounded-lg" />
          <input name="lastName" value={review.lastName} onChange={handleChange} placeholder="Last Name" className="px-4 py-3 border rounded-lg" />
          <input name="firstName_fa" value={review.firstName_fa} onChange={handleChange} placeholder="اسم به فارسی" className="px-4 py-3 border rounded-lg" />
          <input name="lastName_fa" value={review.lastName_fa} onChange={handleChange} placeholder="تخلص به فارسی" className="px-4 py-3 border rounded-lg" />
          <input name="firstName_ps" value={review.firstName_ps} onChange={handleChange} placeholder="اسم به پشتو" className="px-4 py-3 border rounded-lg" />
          <input name="lastName_ps" value={review.lastName_ps} onChange={handleChange} placeholder="تخلص به پشتو" className="px-4 py-3 border rounded-lg" />
        </div>

        {/* Job Titles */}
        <input name="jobTitle" value={review.jobTitle} onChange={handleChange} placeholder="Job Title" className="px-4 py-3 border rounded-lg" />
        <input name="jobTitle_fa" value={review.jobTitle_fa} onChange={handleChange} placeholder="شغل به فارسی" className="px-4 py-3 border rounded-lg" />
        <input name="jobTitle_ps" value={review.jobTitle_ps} onChange={handleChange} placeholder="شغل به پشتو" className="px-4 py-3 border rounded-lg" />

        {/* Descriptions */}
        <textarea name="description" value={review.description} onChange={handleChange} placeholder="Review" rows={4} className="px-4 py-3 border rounded-lg resize-none" />
        <textarea name="description_fa" value={review.description_fa} onChange={handleChange} placeholder="توضیحات به فارسی" rows={4} className="px-4 py-3 border rounded-lg resize-none" />
        <textarea name="description_ps" value={review.description_ps} onChange={handleChange} placeholder="توضیحات به پشتو" rows={4} className="px-4 py-3 border rounded-lg resize-none" />

        {/* Rating */}
        <input type="number" name="rating" min={1} max={5} value={review.rating} onChange={handleChange} placeholder="Rating (1–5)" className="w-24 px-4 py-3 border rounded-lg" />

        {/* Image */}
        <div>
          <input type="file" onChange={handleImageChange} className="mb-2 text-sm" />
          {review.imgPreview && (
            <div className="relative w-32 h-32 border rounded">
              <Image src={review.imgPreview} alt="User Photo" fill className="object-cover rounded" />
            </div>
          )}
        </div>

        {/* Save Button */}
        <button onClick={handleSave} className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
}
