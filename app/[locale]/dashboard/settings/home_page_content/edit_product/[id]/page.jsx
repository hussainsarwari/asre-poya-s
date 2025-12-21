"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import Swal from "sweetalert2";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({
    name: "",
    description: "",
    name_fa: "",
    description_fa: "",
    name_ps: "",
    description_ps: "",
    product_img_name: "", // نام فایل تصویر قبلی
    product_img: null, // فایل جدید
    imgPreview: "", // پیش‌نمایش تصویر
  });

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;

      const res = await fetch(`/api/controller/main/products/update?id=${productId}`);
      const d = await res.json();
      const data = d.data;

      const fileName = data?.image ? data.image.split("/").pop() : "";

      setProduct({
        name: data?.name || "",
        description: data?.description || "",
        name_fa: data?.name_fa || "",
        description_fa: data?.description_fa || "",
        name_ps: data?.name_ps || "",
        description_ps: data?.description_ps || "",
        product_img_name: fileName,
        product_img: null,
        imgPreview: data?.image || "",
      });
    };

    fetchProduct();
  }, [productId]);

  // Cleanup blob URL on unmount/change
  useEffect(() => {
    return () => {
      if (product.imgPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(product.imgPreview);
      }
    };
  }, [product.imgPreview]);

  // Input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Image handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setProduct((prev) => {
      if (prev.imgPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(prev.imgPreview);
      }

      return {
        ...prev,
        product_img: file,
        product_img_name: file.name,
        imgPreview: URL.createObjectURL(file),
      };
    });
  };

  // Save handler
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("id", productId);
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("name_fa", product.name_fa);
      formData.append("description_fa", product.description_fa);
      formData.append("name_ps", product.name_ps);
      formData.append("description_ps", product.description_ps);
      formData.append("product_img_name", product.product_img_name);

      if (product.product_img) {
        formData.append("product_img_new_img", product.product_img);
      }

      const res = await fetch("/api/controller/main/products/update", {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "خطا در ویرایش محصول");
      }

      Swal.fire({
        icon: "success",
        title: "محصول با موفقیت ویرایش شد",
        showConfirmButton: false,
        timer: 1500,
      });

      router.back();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "خطا در ویرایش محصول",
        text: err.message,
      });
    }
  };

  // UI
  return (
    <div className="max-w-lg p-8 mx-auto space-y-6 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-semibold text-center text-gray-800">ویرایش محصول</h1>

      {/* Name */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Name (EN)</label>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Description (EN)</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          rows={4}
          className="px-4 py-2 border rounded-lg"
        />
      </div>

      {/* Persian */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Name (FA)</label>
        <input
          name="name_fa"
          value={product.name_fa}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Description (FA)</label>
        <textarea
          name="description_fa"
          value={product.description_fa}
          onChange={handleChange}
          rows={4}
          className="px-4 py-2 border rounded-lg"
        />
      </div>

      {/* Pashto */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Name (PS)</label>
        <input
          name="name_ps"
          value={product.name_ps}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Description (PS)</label>
        <textarea
          name="description_ps"
          value={product.description_ps}
          onChange={handleChange}
          rows={4}
          className="px-4 py-2 border rounded-lg"
        />
      </div>

      {/* Image */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Product Image</label>
        <input type="file" onChange={handleImageChange} />

        {product.imgPreview && (
          <div className="relative w-32 h-32 mt-2 border rounded">
            <Image src={product.imgPreview} alt="Product Image" fill className="object-contain" />
          </div>
        )}

        {!product.product_img && product.product_img_name && (
          <span className="mt-1 text-xs text-gray-500">
            تصویر فعلی: {product.product_img_name}
          </span>
        )}
      </div>

      {/* Save */}
      <button
        onClick={handleSave}
        className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        ذخیره تغییرات
      </button>
    </div>
  );
}
