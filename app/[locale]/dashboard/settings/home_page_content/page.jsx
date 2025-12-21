"use client";

import { useState, useEffect } from "react";
import {
  Trash2,
  ImagePlus,
  Delete,
  Edit,
  DeleteIcon,
  Edit3,
  LucideDelete,
  Trash,
} from "lucide-react";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
export default function Product() {
  const router = useRouter();
  const [statistics, setStatistics] = useState({
    activeUsers: "",
    workExperience: "",
  });

  const [products, setProducts] = useState([
    {
      name: "",
      description: "",
      image: null,
      name_fa: "",
      description_fa: "",
      name_ps: "",
      description_ps: "",
    },
  ]);
  const [productsList, setProductsList] = useState([
    {
      id: "",
      name: "",
      description: "",
      image: null,
      name_fa: "",
      description_fa: "",
      name_ps: "",
      description_ps: "",
    },
  ]);

  const [partners, setPartners] = useState([null]);
  const [partnerUrls, setPartnerUrls] = useState([]);
  const [partnerIds, setPartnerIds] = useState([]);

  const [reviews, setReviews] = useState([
    {
      id: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      description: "",
      photo: null,
      date: "",
      rating: "",
      old_img: "",
      new_img: null,

      firstName_fa: "",
      lastName_fa: "",
      jobTitle_fa: "",
      description_fa: "",

      firstName_ps: "",
      lastName_ps: "",
      jobTitle_ps: "",
      description_ps: "",
    },
  ]);
  const [reviewsList, setReviewsList] = useState([]);

  // useeffect section

  async function fetchData() {
    const res = await fetch("/api/controller/main", { method: "GET" });
    const d = await res.json();
    const data = d.data;
  
    

    // get reviews data
    setReviewsList(
      data.reviews.map((r) => ({
        id: r.id,
        firstName: r.firstName,
        lastName: r.lastName,
        jobTitle: r.jobTitle,
        description: r.description,
        photo: null,
        date: r.date,
        rating: r.rating,
        old_img: r.photo,
        new_img: null,
        firstName_fa: r.firstName_fa,
        lastName_fa: r.lastName_fa,
        jobTitle_fa: r.jobTitle_fa,
        description_fa: r.description_fa,
        firstName_ps: r.firstName_ps,
        lastName_ps: r.lastName_ps,
        jobTitle_ps: r.jobTitle_ps,
        description_ps: r.description_ps,
      }))
    );
    // get statistic
    setStatistics({
      activeUsers: data.statistics.active_client,
      workExperience: data.statistics.work_experience,
    });

    // get partners data
    if (Array.isArray(data.partners)) {
      setPartnerUrls(data.partners.map((p) => p.image)); // فقط URL
      setPartners(data.partners.map(() => null)); // placeholder فایل
      setPartnerIds(data.partners.map((p) => p.id)); // id واقعی
    }
    // get products data
      setProductsList(
        data.products.map((p) => ({
          id: p.id,
          name: p.name,
          description: p.description,
          image: p.image,
          name_fa: p.name_fa,
          description_fa: p.description_fa,
          name_ps: p.name_ps,
          description_ps: p.description_ps,
        }))
      ); // فقط URL
      
    
  }
  
  useEffect(() => {
    fetchData();
  
  }, []);

  const replacePartnerLogo = async (index, file) => {
    // مطمئن شو id واقعی partner را داری
    const partnerId = partnerIds[index]; // partnerIds باید از سرور دریافت شده باشد

    const formData = new FormData();
    formData.append("file", file); // نام فیلد باید مطابق Back-end باشد
    formData.append("id", partnerId); // id واقعی ردیف partner

    const res = await fetch("/api/controller/main/replace", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    Swal.fire({
      icon: "success",
      title: "homepage partner logo replaced successfully",

      showConfirmButton: false,
      timerProgressBar: true,

      timer: 1500,
    });

    // آپدیت State
    const copyPartners = [...partners];
    copyPartners[index] = file;
    setPartners(copyPartners);
  };

  /* ---------- ADDERS ---------- */

  const addProduct = () => {
    setProducts([
      ...products,
      {
        name: "",
        description: "",
        image: null,
        name_fa: "",
        description_fa: "",
        name_ps: "",
        description_ps: "",
      },
    ]);
  };

  const addReview = () =>
    setReviews([
      ...reviews,
      {
        firstName: "",
        lastName: "",
        jobTitle: "",
        description: "",
        photo: null,
        date: "",
        rating: "",
        firstName_fa: "",
        lastName_fa: "",
        jobTitle_fa: "",
        description_fa: "",
        firstName_ps: "",
        lastName_ps: "",
        jobTitle_ps: "",
        description_ps: "",
      },
    ]);

  /* ---------- HANDLERS ---------- */

  // handle delete partner logo

  const deletePartnerLogo = async (index) => {
    // مطمئن شو id واقعی partner را داری
    const partnerId = partnerIds[index]; // partnerIds باید از سرور دریافت شده باشد

    const formData = new FormData(); // نام فیلد باید مطابق Back-end باشد
    formData.append("id", partnerId); // id واقعی ردیف partner

    const res = await fetch("/api/controller/main/replace", {
      method: "delete",
      body: formData,
    });

    const data = await res.json();
    Swal.fire({
      icon: "success",
      title: "homepage partner logo deleted successfully",

      showConfirmButton: false,
      timerProgressBar: true,

      timer: 1500,
    });

    // آپدیت State
    const copyPartners = [...partners];

    setPartners(copyPartners);
  };

  const handleSave = async () => {
    try {
      const updatedProductsList = products.map((p) => ({
        name: p.name,
        description: p.description,
        name_fa: p.name_fa,
        description_fa: p.description_fa,
        name_ps: p.name_ps,
        description_ps: p.description_ps,
        // اگر p.image یک فایل است، URL بسازید؛ در غیر این صورت همان مقدار را نگه دارید
        image: p.image
          ? typeof p.image === "string"
            ? p.image
            : URL.createObjectURL(p.image)
          : null,
      }));
      setProductsList(updatedProductsList);

      const formData = new FormData();

      // statistics
      formData.append("statistics", JSON.stringify(statistics));

      // products
      products.forEach((p, i) => {
        formData.append(`products[${i}][name]`, p.name);
        formData.append(`products[${i}][description]`, p.description);
        formData.append(`products[${i}][name_fa]`, p.name_fa);
        formData.append(`products[${i}][description_fa]`, p.description_fa);
        formData.append(`products[${i}][name_ps]`, p.name_ps);
        formData.append(`products[${i}][description_ps]`, p.description_ps);
        if (p.image) {
          formData.append(`products[${i}][image]`, p.image);
        }
      });

      // partners
      partners.forEach((logo, i) => {
        console.log(logo)
        if (logo) {
          formData.append(`partners[${i}]`, logo);
        }
      });

      
  

      // reviews
      reviews.forEach((r, i) => {
        formData.append(`reviews[${i}][firstName]`, r.firstName);
        formData.append(`reviews[${i}][lastName]`, r.lastName);
        formData.append(`reviews[${i}][jobTitle]`, r.jobTitle);
        formData.append(`reviews[${i}][description]`, r.description);
        formData.append(`reviews[${i}][firstName_fa]`, r.firstName_fa);
        formData.append(`reviews[${i}][lastName_fa]`, r.lastName_fa);
        formData.append(`reviews[${i}][jobTitle_fa]`, r.jobTitle_fa);
        formData.append(`reviews[${i}][description_fa]`, r.description_fa);
        formData.append(`reviews[${i}][firstName_ps]`, r.firstName_ps);
        formData.append(`reviews[${i}][lastName_ps]`, r.lastName_ps);
        formData.append(`reviews[${i}][jobTitle_ps]`, r.jobTitle_ps);
        formData.append(`reviews[${i}][description_ps]`, r.description_ps);
        formData.append(`reviews[${i}][date]`, r.date);
        formData.append(`reviews[${i}][rating]`, r.rating);
        if (r.photo) {
          formData.append(`reviews[${i}][photo]`, r.photo);
        }
      });




      const res = await fetch("/api/controller/main", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const result = await res.json();

      Swal.fire({
        icon: "success",
        title: "Homepage data saved successfully",

        showConfirmButton: false,
        timerProgressBar: true,

        timer: 1500,
      });

      console.log("Server response:", result);
    } catch (err) {
      console.error(err);
      alert("خطا در ارسال اطلاعات");
    }
  };

  // delete ProductImg ====================

  const deleteProductImg = async (index) => {
    // گرفتن id واقعی محصول
    const id = productsList[index].id; // productsList باید از سرور دریافت شده باشد
    const formData = new FormData(); // نام فیلد باید مطابق Back-end باشد
    formData.append("id", id); // id واقعی ردیف product
    const res = await fetch("/api/controller/main/products/delete", {
      method: "delete",
      body: formData,
    });
    const data = await res.json();
    console.log("Server response:", data);
    // آپدیت State
    const copyProductsList = [...productsList];
    copyProductsList.splice(index, 1);
    setProductsList(copyProductsList);
  };

  // edit product item ====================

  const editproductItem = async (index) => {
    // گرفتن id واقعی محصول
    const id = productsList[index].id; // productsList باید از سرور دریافت شده باشد

    router.push(`/dashboard/settings/home_page_content/edit_product/${id}`);
  };

  // edit review ====================
  const reviewReview = async (index) => {
    console.log("review review review:", reviewsList);
    // گرفتن id واقعی نظر
    const id = reviewsList[index].id; // reviewsList باید از سرور دریافت شده باشد
    router.push(`/dashboard/settings/home_page_content/edit_review/${id}`);
  };

  // delete review ====================
  const deleteReview = async (index) => {
    // گرفتن id واقعی نظر
    const id = reviewsList[index].id; // reviewsList باید از سرور دریافت شده باشد
    const formData = new FormData(); // نام فیلد باید مطابق Back-end باشد
    formData.append("id", id); // id واقعی ردیف review
    const res = await fetch("/api/controller/main/", {
      method: "delete",
      body: formData,
    });
    const data = await res.json();
    console.log("Server response:", data);
    // آپدیت State
    const copyReviewsList = [...reviewsList];
    copyReviewsList.splice(index, 1);
    setReviewsList(copyReviewsList);
  };

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen p-6 space-y-8 text-gray-800 bg-white">
      <h1 className="text-2xl font-semibold">Homepage Content Management</h1>

      {/* Statistics */}
      <section className="p-6 space-y-4 bg-gray-50 rounded-2xl">
        <h2 className="text-lg font-medium">Statistics</h2>
        <div className="grid grid-cols-2 gap-3">
          <span>
            active client
            <input
              type="number"
              placeholder="Active Users"
              value={statistics.activeUsers}
              onChange={(e) =>
                setStatistics({ ...statistics, activeUsers: e.target.value })
              }
              className="w-full px-3 py-2 bg-gray-100 rounded outline-none"
            />
          </span>
          <span>
            work exprience
            <input
              type="number"
              placeholder="Work Experience (Years)"
              value={statistics.workExperience}
              onChange={(e) =>
                setStatistics({ ...statistics, workExperience: e.target.value })
              }
              className="w-full px-3 py-2 bg-gray-100 rounded outline-none"
            />
          </span>
        </div>
      </section>

      {/* Partners */}
      <section className="p-6 space-y-4 bg-gray-50 rounded-2xl">
        <h2 className="text-lg font-medium">Our Partners</h2>

        {/* ---------- Input برای افزودن Partner جدید ---------- */}
        <div className="flex items-center gap-3">
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;

              // افزودن فایل به partners
              const updatedPartners = [...partners, file];
              setPartners(updatedPartners);

              // ساخت preview URL و افزودن به partnerUrls
              const updatedUrls = [...partnerUrls, URL.createObjectURL(file)];
              setPartnerUrls(updatedUrls);
            }}
            className="w-full p-2 bg-gray-200 rounded-md"
          />
        </div>

        {/* ---------- لیست لوگوها ---------- */}
        <h3 className="w-full py-5 text-center border-b border-gray-300">
          Partner Logo List
        </h3>

        <div className="flex gap-4">
          {partnerUrls.length === 0 ? (
            <p className="py-4 text-sm text-center text-gray-500 col-span-full">
              No partner logos
            </p>
          ) : (
            partnerUrls.map((url, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-end py-3 "
              >
                <img
                  src={url}
                  alt={`partner-${index}`}
                  className="object-contain w-24 h-24 mb-2"
                />

                <div className="flex gap-2">
                  {/* Replace / تغییر عکس */}
                  <label className="text-blue-400 cursor-pointer hover:text-gray-600">
                    <ImagePlus size={16} />
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (!file) return;

                        const copyPartners = [...partners];
                        copyPartners[index] = file;
                        setPartners(copyPartners);

                        const copyUrls = [...partnerUrls];
                        copyUrls[index] = URL.createObjectURL(file);
                        setPartnerUrls(copyUrls);

                        replacePartnerLogo(index, file);
                      }}
                    />
                  </label>

                  {/* Delete / حذف */}
                  <button
                    onClick={() => {
                      const copyPartners = [...partners];
                      copyPartners.splice(index, 1);
                      setPartners(copyPartners);

                      const copyUrls = [...partnerUrls];
                      copyUrls.splice(index, 1);
                      setPartnerUrls(copyUrls);
                      deletePartnerLogo(index);
                    }}
                    className="text-red-400 cursor-pointer hover:text-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Products */}
      {/* Products */}
      <section className="p-6 space-y-4 bg-gray-50 rounded-2xl">
        <h2 className="text-lg font-medium">Products</h2>

        {products.map((p, i) => (
          <div key={i} className="grid gap-3 md:grid-cols-2">
            {/* Name */}
            <input
              placeholder="Name"
              value={p.name}
              onChange={(e) =>
                setProducts((prev) =>
                  prev.map((item, idx) =>
                    idx === i ? { ...item, name: e.target.value } : item
                  )
                )
              }
              className="px-3 py-2 bg-gray-100 rounded"
            />

            {/* Description */}
            <input
              placeholder="Description"
              value={p.description}
              onChange={(e) =>
                setProducts((prev) =>
                  prev.map((item, idx) =>
                    idx === i ? { ...item, description: e.target.value } : item
                  )
                )
              }
              className="px-3 py-2 bg-gray-100 rounded"
            />

            {/* Name FA */}
            <input
              placeholder="اسم به فارسی"
              value={p.name_fa}
              onChange={(e) =>
                setProducts((prev) =>
                  prev.map((item, idx) =>
                    idx === i ? { ...item, name_fa: e.target.value } : item
                  )
                )
              }
              className="px-3 py-2 bg-gray-100 rounded"
            />

            {/* Description FA */}
            <input
              placeholder="توضیحات به فارسی"
              value={p.description_fa}
              onChange={(e) =>
                setProducts((prev) =>
                  prev.map((item, idx) =>
                    idx === i
                      ? { ...item, description_fa: e.target.value }
                      : item
                  )
                )
              }
              className="px-3 py-2 bg-gray-100 rounded"
            />

            {/* Name PS */}
            <input
              placeholder="اسم به پشتو"
              value={p.name_ps}
              onChange={(e) =>
                setProducts((prev) =>
                  prev.map((item, idx) =>
                    idx === i ? { ...item, name_ps: e.target.value } : item
                  )
                )
              }
              className="px-3 py-2 bg-gray-100 rounded"
            />

            {/* Description PS */}
            <input
              placeholder="توضیحات به پشتو"
              value={p.description_ps}
              onChange={(e) =>
                setProducts((prev) =>
                  prev.map((item, idx) =>
                    idx === i
                      ? { ...item, description_ps: e.target.value }
                      : item
                  )
                )
              }
              className="px-3 py-2 bg-gray-100 rounded"
            />

            {/* Image */}
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setProducts((prev) =>
                  prev.map((item, idx) =>
                    idx === i ? { ...item, image: file } : item
                  )
                );
              }}
            />
          </div>
        ))}

        {/* Add Product Button */}
        <button
          onClick={addProduct}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Product
        </button>
{/* product list */}


<h1 className="mb-4 text-lg font-medium text-gray-800">Product list</h1>

<section className="grid grid-cols-7 gap-3">
  {Array.isArray(productsList) && productsList.length > 0 ? (
    productsList.map((p,i) => (
      <div
        key={p.id}
        className="flex flex-col items-center justify-between gap-3 p-3 bg-white border border-gray-200 rounded-md"
      >
        {/* Info */}
        <div className="flex-1 space-y-1">
          {/* EN */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">EN: {p.name}</h3>
            <p className="text-xs text-gray-500">{p.description}</p>
          </div>

          {/* FA */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">FA: {p.name_fa || "—"}</h3>
            <p className="text-xs text-gray-500">{p.description_fa || "—"}</p>
          </div>

          {/* PS */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">PS: {p.name_ps || "—"}</h3>
            <p className="text-xs text-gray-500">{p.description_ps || "—"}</p>
          </div>
        </div>

        {/* Image */}
        {p.image && (
          <img
            src={p.image}
            alt={p.name}
            className="object-cover w-16 h-16 mt-2 rounded md:mt-0 md:ml-4"
          />
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-2 md:mt-0 md:ml-4">
          <button
            onClick={() => editproductItem(i)}
            className="px-3 py-1 text-xs text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
          >
            Edit
          </button>
          <button
            onClick={() => deleteProductImg(i)}
            className="px-3 py-1 text-xs text-red-600 border border-red-300 rounded hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-sm text-gray-500">No products found</p>
  )}
</section>




















        
      </section>























      

      {/* Reviews */}
      <section className="p-6 space-y-4 bg-gray-50 rounded-2xl">
        <h2 className="text-lg font-medium">Customer Reviews</h2>

        {reviews.map((r, i) => (
          <div key={i} className="pb-4 space-y-3 ">
            <div className="grid grid-cols-6 gap-2">
              <input
                placeholder="First Name"
                value={r.firstName}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].firstName = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              />

              <input
                placeholder="Last Name"
                value={r.lastName}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].lastName = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              />

              <input
                placeholder="Job Title"
                value={r.jobTitle}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].jobTitle = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              />
              <input
                placeholder="اسم به فارسی"
                value={r.firstName_fa}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].firstName_fa = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              />

              <input
                placeholder="تخلص به فارسی"
                value={r.lastName_fa}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].lastName_fa = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              />

              <input
                placeholder="شغل به فارسی"
                value={r.jobTitle_fa}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].jobTitle_fa = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              />
              <input
                placeholder="اسم به پشتو"
                value={r.firstName_ps}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].firstName_ps = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              />

              <input
                placeholder="تخلص به پشتو"
                value={r.lastName_ps}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].lastName_ps = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              />

              <input
                placeholder="شغل به پشتو"
                value={r.jobTitle_ps}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].jobTitle_ps = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              />
              <input
                type="date"
                value={r.date}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].date = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              />

              <select
                value={r.rating}
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].rating = e.target.value;
                  setReviews(copy);
                }}
                className="w-full px-3 py-2 bg-gray-100 rounded"
              >
                <option value="">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input
                className="flex items-center justify-center p-2 text-center bg-gray-200"
                placeholder="select Image"
                type="file"
                onChange={(e) => {
                  const copy = [...reviews];
                  copy[i].photo = e.target.files[0];
                  setReviews(copy);
                }}
              />
            </div>

            <textarea
              placeholder="Review Description"
              value={r.description}
              onChange={(e) => {
                const copy = [...reviews];
                copy[i].description = e.target.value;
                setReviews(copy);
              }}
              className="w-full px-3 py-2 bg-gray-100 rounded"
              rows={1}
            />
            <textarea
              placeholder="توضیحات فارسی"
              value={r.description_fa}
              onChange={(e) => {
                const copy = [...reviews];
                copy[i].description_fa = e.target.value;
                setReviews(copy);
              }}
              className="w-full px-3 py-2 bg-gray-100 rounded"
              rows={1}
            />
            <textarea
              placeholder="توضیحات به پشتو"
              value={r.description_ps}
              onChange={(e) => {
                const copy = [...reviews];
                copy[i].description_ps = e.target.value;
                setReviews(copy);
              }}
              className="w-full px-3 py-2 bg-gray-100 rounded"
              rows={1}
            />
          </div>
        ))}

        <button
          onClick={addReview}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Review
        </button>

        <h1 className="pb-5 text-center border-b border-gray-400">
          reviews list
        </h1>
        {reviewsList.length > 0 ? (
          <div className="space-y-4">
            {reviewsList.map((r, i) => (
              <div
                key={i}
                className="flex items-start justify-between p-4 bg-white border rounded-lg shadow-sm"
              >
                {/* اطلاعات نظر */}
                <div className="flex items-start gap-4">
                  {/* عکس */}
                  {r.old_img ? (
                    <img
                      src={r.old_img}
                      alt="review"
                      className="object-cover border rounded-full w-14 h-14"
                    />
                  ) : (
                    <div className="flex items-center justify-center text-sm text-gray-500 bg-gray-200 rounded-full w-14 h-14">
                      N/A
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      First name: {r.firstName} Lastname: {r.lastName}
                    </h3>

                    {r.jobTitle && (
                      <p className="text-sm text-gray-500">job:{r.jobTitle}</p>
                    )}

                    {r.description && (
                      <p className="mt-2 text-sm text-gray-700">
                        Description: {r.description}
                      </p>
                    )}

                    {r.date && (
                      <p className="flex gap-2 mt-1 text-xs text-gray flex-500">
                        <span>Date: {r.date}</span>
                        <span>Rating: {r.rating}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* اکشن‌ها */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditReview(i)}
                    className="p-2 text-blue-600 rounded hover:bg-blue-50"
                    title="ویرایش"
                  >
                    <Edit3
                      onClick={() => reviewReview(i)}
                      className="cursor-pointer"
                      size={16}
                      color="blue"
                    />
                  </button>

                  <button
                    onClick={() => deleteReview(i)}
                    className="p-2 text-red-600 rounded hover:bg-red-50"
                    title="حذف"
                  >
                    <Trash
                      onClick={() => deleteReview(i)}
                      className="cursor-pointer"
                      size={16}
                      color="red"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-10 text-center text-gray-500">
            <h2 className="text-lg font-medium">No reviews found</h2>
          </div>
        )}
      </section>
      <button
        onClick={handleSave}
        className="px-6 py-3 text-blue-500 border border-blue-500 rounded"
      >
        Save All
      </button>
    </div>
  );
}
