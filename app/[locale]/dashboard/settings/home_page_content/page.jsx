"use client";

import { useState, useEffect } from "react";
import { Trash2, ImagePlus, Delete, Edit, DeleteIcon, Edit3, LucideDelete, Trash } from "lucide-react";
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
    { name: "", description: "", image: null },
  ]);
  const [productsList, setProductsList] = useState([
    { id: "", name: "", description: "", image: null },
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
    },
  ]);
  const [reviewsList, setReviewsList] = useState([
 
  ]);

  // useeffect section

  async function fetchData() {
    const res = await fetch("/api/controller/main", { method: "GET" });
    const d = await res.json();
    const data = d.data;



    console.log("data =======================", data);
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
        }))
      );



    
    // get partners data
    if (Array.isArray(data.partners)) {
      setPartnerUrls(data.partners.map((p) => p.image)); // فقط URL
      setPartners(data.partners.map(() => null)); // placeholder فایل
      setPartnerIds(data.partners.map((p) => p.id)); // id واقعی
    }
    // get products data
    if (Array.isArray(data.products)) {
      setProductsList(
        data.products.map((p) => ({
          id: p.id,
          name: p.name,
          description: p.description,
          image: p.image,
        }))
      ); // فقط URL

    }

    
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
      })

    // آپدیت State
    const copyPartners = [...partners];
    copyPartners[index] = file;
    setPartners(copyPartners);
  };

  /* ---------- ADDERS ---------- */

  const addProduct = () => {
    setProducts([...products, { name: "", description: "", image: null }]);
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
      })

    // آپدیت State
    const copyPartners = [...partners];

    setPartners(copyPartners);
  };

  const handleSave = async () => {
    try {
      const updatedProductsList = products.map((p) => ({
        name: p.name,
        description: p.description,
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
        if (p.image) {
          formData.append(`products[${i}][image]`, p.image);
        }
      });

      // partners
      partners.forEach((logo, i) => {
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
      })

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
}


// edit product item ====================

const editproductItem = async (index) => {
  // گرفتن id واقعی محصول
  const id = productsList[index].id; // productsList باید از سرور دریافت شده باشد

  router.push(`/dashboard/settings/home_page_content/edit_product/${id}`);
}

// edit review ====================
const reviewReview = async (index) => {
  console.log("review review review:", reviewsList);
  // گرفتن id واقعی نظر
  const id = reviewsList[index].id; // reviewsList باید از سرور دریافت شده باشد
  router.push(`/dashboard/settings/home_page_content/edit_review/${id}`);
}

// delete review ====================
const deleteReview = async (index) => {
  // گرفتن id واقعی نظر
  const id = reviewsList[index].id; // reviewsList باید از سرور دریافت شده باشد   
  const formData = new FormData(); // نام فیلد باید مطابق Back-end باشد
  formData.append("id", id); // id واقعی ردیف review
  const res = await fetch("/api/controller/main/reviews/delete", {
    method: "delete",
    body: formData,});
  const data = await res.json();
  console.log("Server response:", data);
  // آپدیت State
  const copyReviewsList = [...reviewsList];
  copyReviewsList.splice(index, 1);
  setReviewsList(copyReviewsList);
}




  

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen p-6 space-y-8 text-gray-800 bg-white">
      <h1 className="text-2xl font-semibold">Homepage Content Management</h1>

      {/* Statistics */}
      <section className="p-6 space-y-4 bg-gray-50 rounded-2xl">
        <h2 className="text-lg font-medium">Statistics</h2>
        <div className="flex gap-3">
          
        <input
          type="number"
          placeholder="Active Users"
          value={statistics.activeUsers}
          onChange={(e) =>
            setStatistics({ ...statistics, activeUsers: e.target.value })
          }
          className="w-full px-3 py-2 bg-gray-100 rounded outline-none"
          />
        <input
          type="number"
          placeholder="Work Experience (Years)"
          value={statistics.workExperience}
          onChange={(e) =>
            setStatistics({ ...statistics, workExperience: e.target.value })
          }
          className="w-full px-3 py-2 bg-gray-100 rounded outline-none"
        />
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
      <section className="p-6 space-y-4 bg-gray-50 rounded-2xl">
        <h2 className="text-lg font-medium">Products</h2>

        {products.map((p, i) => (
          <div key={i} className="grid gap-3 md:grid-cols-3">
            <input
              placeholder="Name"
              value={p.name}
              onChange={(e) => {
                const copyProducts = [...products];
                copyProducts[i].name = e.target.value;
                setProducts(copyProducts);

              }}
              className="px-3 py-2 bg-gray-100 rounded"
            />

            <input
              placeholder="Description"
              value={p.description}
              onChange={(e) => {
                const copyProducts = [...products];
                copyProducts[i].description = e.target.value;
                setProducts(copyProducts);

             
              }}
              className="px-3 py-2 bg-gray-100 rounded"
            />

            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                const copyProducts = [...products];
                copyProducts[i].image = file;
                setProducts(copyProducts);

             
              }}
            />
          </div>
        ))}
        <button
          onClick={addProduct}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Product
        </button>

        {productsList.length > 0 ? (
          productsList.map((p, i) => (
            <div
              key={i}
              className="grid items-center grid-flow-row grid-cols-10 gap-3 mb-4"
            >
              <h3 className="h-20 col-start-1 col-end-3 px-1 py-2 bg-gray-200 rounded">
                {p.name}
              </h3>
              <p className="h-20 col-start-3 col-end-9 px-1 py-2 bg-gray-200 rounded">
                {p.description}
              </p>

              <Image
                src={p.image}
                alt={p.name}
                width={66}
                height={66}
                className="object-contain "
              />
              <div className="flex gap-2">
                <span className="cursor-pointer">
                  <Trash2 size={16} color="red"  onClick={()=>{deleteProductImg(i)}}/>
                </span>
                <span className="cursor-pointer">
                  <ImagePlus size={16} color="blue" onClick={()=>{editproductItem(i)}}/>
                </span>
              </div>
            </div>
          ))
        ) : (
          <h1 className="pb-5 text-center border-b border-gray-400">No product</h1>
        )}
      </section>
      {/* Reviews */}
      <section className="p-6 space-y-4 bg-gray-50 rounded-2xl">
        <h2 className="text-lg font-medium">Customer Reviews</h2>

        {reviews.map((r, i) => (
          <div key={i} className="pb-4 space-y-3 ">
            <div className="flex justify-between gap-2">
              
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
          </div>
        ))}

        <button
          onClick={addReview}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Review
        </button>

        <h1 className="pb-5 text-center border-b border-gray-400">reviews list</h1>
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
               <span>
               Date: { r.date}
                
               </span>
               <span>
                Rating: { r.rating}
               </span>
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
            <Edit3 onClick={() => reviewReview(i)} className="cursor-pointer" size={16} color="blue" />
          </button>

          <button
            onClick={() => handleDeleteReview(i)}
            className="p-2 text-red-600 rounded hover:bg-red-50"
            title="حذف"
          >
            <Trash onClick={() => deleteReview(i)} className="cursor-pointer" size={16} color='red' />
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
