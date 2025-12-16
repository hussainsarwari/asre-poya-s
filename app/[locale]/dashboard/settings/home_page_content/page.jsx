"use client";

import { useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([{ name: "", description: "", image: null }]);
  const [partners, setPartners] = useState([null]);
  const [reviews, setReviews] = useState([
    { firstName: "", lastName: "", jobTitle: "", description: "", photo: null, date: "", rating: "" }
  ]);

  const addProduct = () => setProducts([...products, { name: "", description: "", image: null }]);
  const addPartnerLogo = () => setPartners([...partners, null]);
  const addReview = () => setReviews([...reviews, { firstName: "", lastName: "", jobTitle: "", description: "", photo: null, date: "", rating: "" }]);

  return (
    <div className="min-h-screen p-4 space-y-8 text-gray-800 bg-white md:p-6">
      <h1 className="mb-6 text-2xl font-semibold">Homepage Content Management</h1>

      {/* Statistics */}
      <section className="p-4 shadow-sm md:p-6 bg-gray-50 rounded-2xl">
        <h2 className="mb-4 text-lg font-medium">General Statistics</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <input type="number" placeholder="Active Users" className="input" />
          <input type="text" placeholder="Work Experience (Years)" className="input" />
        </div>
      </section>

      {/* Products */}
      <section className="p-4 shadow-sm md:p-6 bg-gray-50 rounded-2xl">
        <h2 className="mb-4 text-lg font-medium">Products</h2>
        {products.map((_, index) => (
          <div key={index} className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
            <input type="text" placeholder="Product Name" className="input" />
            <input type="text" placeholder="Product Description" className="input" />
            <input type="file" className="input" />
          </div>
        ))}
        <button onClick={addProduct} className="w-full p-2 text-white bg-blue-400 rounded-md md:w-auto btn">Add Another Product</button>
      </section>

      {/* Partners Logos */}
      <section className="p-4 shadow-sm md:p-6 bg-gray-50 rounded-2xl">
        <h2 className="mb-4 text-lg font-medium">Our Partners (Logos Only)</h2>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
          {partners.map((_, index) => (
            <input key={index} type="file" className="w-full input md:w-auto" />
          ))}
        </div>
        <button onClick={addPartnerLogo} className="p-2 mt-3 text-white bg-blue-400 rounded-md btn">Add Logo</button>
      </section>

      {/* Reviews Section */}
      <section className="p-4 shadow-sm md:p-6 bg-gray-50 rounded-2xl">
        <h2 className="mb-4 text-lg font-medium">Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="pb-4 mb-6 space-y-4 border-b border-gray-200">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <input type="text" placeholder="First Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
              <input type="text" placeholder="Job Title" className="input" />
            </div>
            <textarea placeholder="Review Description" rows={4} className="w-full input" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <input type="file" className="input" />
              <input type="date" className="input" />
              <select className="input">
                <option>Rating (1–5)</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-2 md:flex-row md:gap-3">
          <button onClick={addReview} className="w-full p-2 text-white bg-blue-400 rounded-md btn md:w-auto">Add Another Review</button>
          <button className="w-full p-2 text-blue-400 border border-blue-400 rounded-md btn md:w-auto">Save Reviews</button>
        </div>
      </section>
    </div>
  );
}