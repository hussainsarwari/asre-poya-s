"use client";

import { useState, useEffect } from "react";
import { Trash2, Save, Pen,  } from "lucide-react";
import async from './../../../../products/doctor-assistant/[id]/page';

/* ===== LANGUAGES ===== */

export default function MultiProfileSettings({ entity }) {
const emptyFAQ = () => ({
  id: Date.now(),
  questionEN: "",
  questionfa: "",
  questionps: "",
 answerEN:"",
 answerfa:"",
 answerps:"",
});
const emptyTestimonial = () => ({
  id: Date.now(),
  nameEn: "",
  namefa: "",
  nameps: "",
  jobTitleEn: "",
  jobTitlefa: "",
  jobTitleps: "",
  feedbackEn: "",
  feedbackfa: "",
  feedbackps: "",
  rating: 0,
  date: "",

  // فقط برای frontend
  customerProfilePicFile: null,
  backgroundImgFile: null,

  // مسیرهایی که backend پر می‌کند
  customerProfilePicPath: "",
  backgroundImgPath: ""
});



const emptyPlanForm = () => ({
  id: Date.now(),
  titleEn: "",
  titleFa: "",
  titlePs: "",
  amountEn: "",
  amountFa: "",
  amountPs: "",
  p1En: "",
  p1Fa: "",
  p1Ps: "",
  p2En: "",
  p2Fa: "",
  p2Ps: "",
  featuresEn: "",
  featuresFa: "",
  featuresPs: "",
});






  const [plansList, setPlansList] = useState([]);
  const [testimonialsList, setTestimonialsList] = useState([]);
  const [faqsList, setFaqsList] = useState([]);
  const [plans, setPlans] = useState([emptyPlanForm()]);
const [testimonials, setTestimonials] = useState([emptyTestimonial()]);

  const [faqs, setFaqs] = useState([emptyFAQ()]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  

  /* ===== FETCH DATA ===== */
const fetchData = async () => {
  if (!entity) return;

  setLoading(true);
  try {
    const res = await fetch(`/api/controller/${entity}/mutli-profile`);
    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();
    console.log("Fetched data:", data);

    // Map کردن و ذخیره در state
setPlansList(prev => [
  ...prev,
  ...data.plans.map(p => ({
    id: p.id,
    titleFa: p.title_fa || "",
    titlePs: p.title_ps || "",
    titleEn: p.title_en || "",
    description1Fa: p.description1_fa || "",
    description1Ps: p.description1_ps || "",
    description1En: p.description1_en || "",
    description2Fa: p.description2_fa || "",
    description2Ps: p.description2_ps || "",
    description2En: p.description2_en || "",
    amount: p.amount || "0.00"
  }))
]);




  // Map کردن و ذخیره testimonials
    setTestimonialsList(prev => [
      ...prev,
      ...(data.testimonials || []).map(t => ({
        id: t.id,
        nameFa: t.name_fa || "",
        namePs: t.name_ps || "",
        nameEn: t.name_en || "",
        jobFa: t.job_fa || "",
        jobPs: t.job_ps || "",
        jobEn: t.job_en || "",
        feedbackFa: t.description_fa || "",
        feedbackPs: t.description_ps || "",
        feedbackEn: t.description_en || "",
        rating: t.rating || 0,
        reviewDate: t.review_date || null,
        customerProfilePicPath: t.customer_profile_pic || null,
        backgroundImgPath: t.backgournd_img || null,
        createdAt: t.created_at || ""
      }))
    ]);

    // Map کردن و ذخیره faqs
    setFaqsList(prev => [
      ...prev,
      ...(data.faqs || []).map(f => ({
        id: f.id,
        questionFa: f.question_fa || "",
        questionPs: f.question_ps || "",
        questionEn: f.question_en || "",
        answerFa: f.answer_fa || "",
        answerPs: f.answer_ps || "",
        answerEn: f.answer_en || "",
        createdAt: f.created_at || ""
      }))
    ]);



  

  } catch (err) {
    console.error("❌ FETCH ERROR:", err);
    setPlansList([]);
    setTestimonialsList([]);
    setFaqsList([]);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchData();
    console.log(plansList)
  }, [entity]);


  useEffect(() => {
  console.log("Updated plansList:", faqsList);
}, [faqsList]);

/* ===== SAVE ALL ===== */
const handleSave = async () => {
  setSaving(true);
  try {
    const formData = new FormData();

    // ===== آماده سازی JSON بدون فایل =====
    const cleanTestimonials = testimonials.map(t => {
      const { customerProfilePicFile, backgroundImgFile, ...rest } = t;
      return rest;
    });

    const data = {
      plans,
      faqs,
      testimonials: cleanTestimonials
    };

  

    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );

    // ===== اضافه کردن فایل‌ها =====
    testimonials.forEach((t, index) => {
      if (t.customerProfilePicFile) {
        console.log(`Appending customerProfilePic_${index}:`, t.customerProfilePicFile);
        formData.append(
          `customerProfilePic_${index}`,
          t.customerProfilePicFile
        );
      }
      if (t.backgroundImgFile) {
        console.log(`Appending backgroundImg_${index}:`, t.backgroundImgFile);
        formData.append(
          `backgroundImg_${index}`,
          t.backgroundImgFile
        );
      }
    });

    // ===== ارسال به سرور =====
    const res = await fetch(`/api/controller/${entity}/mutli-profile`, {
      method: "POST",
      body: formData
    });

    const text = await res.text(); // پاسخ سرور
    console.log("=== SERVER RESPONSE ===");
    console.log(text);

    if (!res.ok) throw new Error(text || "Server error");
    alert("Saved successfully");
  } catch (e) {
    console.error("Save error:", e);
    alert("Save failed: " + (e.message || ""));
  } finally {
    setSaving(false);
  }
};


 

// add new plan section
const addnewPlanSection = () => {
  setPlans(prev => [...prev, emptyPlanForm()]);
 
};

// remote the plan section
const deletePlanSection = (id) => {
  setPlans(prev => prev.filter(plan => plan.id !== id));
};

const handlePlanChange = (id, field, value) => {
  setPlans(prev =>
    prev.map(plan => (plan.id === id ? { ...plan, [field]: value } : plan))
  );
};



// tesunibua functions
const handleTestimonialChange = (id, field, value) => {
  setTestimonials(prev =>
    prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
  );
};

const handleTestimonialFile = (id, field, file) => {
  setTestimonials(prev =>
    prev.map(item => (item.id === id ? { ...item, [field]: file } : item))
  );
};

const addTestimonial = () => {
  setTestimonials(prev => [...prev, emptyTestimonial()]);
};

const deleteTestimonial = (id) => {
  setTestimonials(prev => prev.filter(item => item.id !== id));
};


// faq
const addFAQ = () => {
  setFaqs(prev => [...prev, emptyFAQ()]);
};

const deleteFAQ = (id) => {
  setFaqs(prev => prev.filter(item => item.id !== id));

};

const handleFAQChange = (id, field, value) => {
  setFaqs(prev =>
    prev.map(faq => (faq.id === id ? { ...faq, [field]: value } : faq))
  );
};



 // فرم ویرایش موقت برای هر پلن
  const [editingPlans, setEditingPlans] = useState(
    plansList.reduce((acc, plan) => {
      acc[plan.id] = { ...plan };
      return acc;
    }, {})
  );


  // ===== حذف پلان =====
const  deletePlanSectionList =async (id) => {
   try {
    const res = await fetch(`/api/controller/${entity}/mutli-profile`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, type: "plan" }) // مشخص کردن نوع entity
    });

    if (!res.ok) throw new Error("Failed to delete plan");

    // فقط وقتی حذف موفق بود، state را آپدیت کن
    setPlansList(prev => prev.filter(p => p.id !== id));

  } catch (err) {
    console.error(err);
    alert("Error deleting plan: " + err.message);
  }
};

// ===== حذف تستیمونیال =====
const deleteTestimonialSectionList = async (id) => {

  try {
    const res = await fetch(`/api/controller/${entity}/mutli-profile`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, type: "plan" }) // مشخص کردن نوع entity
    });

    if (!res.ok) throw new Error("Failed to delete plan");

    // فقط وقتی حذف موفق بود، state را آپدیت کن
    
  
  setTestimonialsList(prev => prev.filter(t => t.id !== id));

  } catch (err) {
    console.error(err);
    alert("Error deleting plan: " + err.message);
  }


};

// ===== حذف FAQ =====
const deleteFAQSectionList = async (id) => {
    try {
    const res = await fetch(`/api/controller/${entity}/mutli-profile`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, type: "plan" }) // مشخص کردن نوع entity
    });

    if (!res.ok) throw new Error("Failed to delete plan");

    // فقط وقتی حذف موفق بود، state را آپدیت کن
    
  setFaqsList(prev => prev.filter(f => f.id !== id));
  console.log(id);
  

  } catch (err) {
    console.error(err);
    alert("Error deleting plan: " + err.message);
  }

};


  

  return (


    
    <div className="min-h-screen p-6 space-y-6 bg-gray-50">

      
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          {entity.toUpperCase()} Multi-Profile Settings
        </h1>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50" onClick={handleSave}>
          <Save size={16} />
        </button>
      </div>

      {/* ===== PLANS ===== */}

   {plans.map((plan) => (
  <div key={plan.id} className="p-3 space-y-2 bg-white border border-gray-200 rounded-lg">
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Title (en)"
        value={plan.titleEn}
        onChange={e => handlePlanChange(plan.id, "titleEn", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
      <input
        type="text"
        placeholder="Title (fa)"
        value={plan.titleFa}
        onChange={e => handlePlanChange(plan.id, "titleFa", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
      <input
        type="text"
        placeholder="Title (ps)"
        value={plan.titlePs}
        onChange={e => handlePlanChange(plan.id, "titlePs", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
      <input
        type="number"
        placeholder="Amount (en)"
        value={plan.amountEn}
        onChange={e => handlePlanChange(plan.id, "amountEn", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
      <input
        type="number"
        placeholder="Amount (fa)"
        value={plan.amountFa}
        onChange={e => handlePlanChange(plan.id, "amountFa", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
      <input
        type="number"
        placeholder="Amount (ps)"
        value={plan.amountPs}
        onChange={e => handlePlanChange(plan.id, "amountPs", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
    </div>

    <div className="flex gap-3">
      <textarea
        placeholder="Paragraph 1 (en)"
        value={plan.p1En}
        onChange={e => handlePlanChange(plan.id, "p1En", e.target.value)}
        className="w-full px-2 py-1 border rounded"
        rows={1}
      />
      <textarea
        placeholder="Paragraph 1 (fa)"
        value={plan.p1Fa}
        onChange={e => handlePlanChange(plan.id, "p1Fa", e.target.value)}
        className="w-full px-2 py-1 border rounded"
        rows={1}
      />
      <textarea
        placeholder="Paragraph 1 (ps)"
        value={plan.p1Ps}
        onChange={e => handlePlanChange(plan.id, "p1Ps", e.target.value)}
        className="w-full px-2 py-1 border rounded"
        rows={1}
      />
    </div>

    <div className="flex gap-3">
      <textarea
        placeholder="Paragraph 2 (en)"
        value={plan.p2En}
        onChange={e => handlePlanChange(plan.id, "p2En", e.target.value)}
        className="w-full px-2 py-1 border rounded"
        rows={1}
      />
      <textarea
        placeholder="Paragraph 2 (fa)"
        value={plan.p2Fa}
        onChange={e => handlePlanChange(plan.id, "p2Fa", e.target.value)}
        className="w-full px-2 py-1 border rounded"
        rows={1}
      />
      <textarea
        placeholder="Paragraph 2 (ps)"
        value={plan.p2Ps}
        onChange={e => handlePlanChange(plan.id, "p2Ps", e.target.value)}
        className="w-full px-2 py-1 border rounded"
        rows={1}
      />
    </div>

    <div className="flex gap-3">
      <textarea
        placeholder="Features (en)"
        value={plan.featuresEn}
        onChange={e => handlePlanChange(plan.id, "featuresEn", e.target.value)}
        className="w-full px-2 py-1 border rounded"
        rows={1}
      />
      <textarea
        placeholder="Features (fa)"
        value={plan.featuresFa}
        onChange={e => handlePlanChange(plan.id, "featuresFa", e.target.value)}
        className="w-full px-2 py-1 border rounded"
        rows={1}
      />
      <textarea
        placeholder="Features (ps)"
        value={plan.featuresPs}
        onChange={e => handlePlanChange(plan.id, "featuresPs", e.target.value)}
        className="w-full px-2 py-1 border rounded"
        rows={1}
      />
    </div>

    <div className="flex justify-end gap-5 mt-4">
      <button
        onClick={() => deletePlanSection(plan.id)}
        className="text-red-500"
      >
        Delete
      </button>

      <button
        onClick={addnewPlanSection}
        className="px-4 py-1 text-white bg-blue-500 rounded"
      >
        Add
      </button>
    </div>
  </div>
))}
<h1 className="p-2 text-gray-400 border-b border-gray-300">plan list:</h1>
   {plansList.length === 0 && <div>No plans available</div>}
  <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Title (EN)</th>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Description 1 (EN)</th>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Description 2 (EN)</th>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Amount</th>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plansList.map((plan, index) => (
              <tr
                key={plan.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 text-sm text-center text-gray-800">{plan.titleEn || "-"}</td>
                <td className="px-4 py-2 text-sm text-center text-gray-800">{plan.description1En || "-"}</td>
                <td className="px-4 py-2 text-sm text-center text-gray-800">{plan.description2En || "-"}</td>
                <td className="px-4 py-2 text-sm text-center text-gray-800">{plan.amount}</td>
                <td className="flex items-center justify-center gap-2 px-4 py-2">
                  <button
                    className="flex items-center gap-1 px-3 py-1 text-sm text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
                  >
                    <Pen size={16} /> Edit
                  </button>
                  <button
                  onClick={(e)=>deletePlanSectionList(plan.id)}
                    className="flex items-center gap-1 px-3 py-1 text-sm text-white transition-colors bg-red-500 rounded hover:bg-red-600"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  

      {/* ===== TESTIMONIALS ===== */}
{testimonials.map((testimonial) => (
  <div
    key={testimonial.id}
    className="p-3 space-y-2 bg-white border border-gray-200 rounded-lg"
  >
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Name (en)"
        value={testimonial.nameEn}
        onChange={(e) =>
          handleTestimonialChange(testimonial.id, "nameEn", e.target.value)
        }
        className="w-full px-2 py-1 border rounded"
      />

      <input
        type="text"
        placeholder="Name (fa)"
        value={testimonial.namefa}
        onChange={(e) =>
          handleTestimonialChange(testimonial.id, "namefa", e.target.value)
        }
        className="w-full px-2 py-1 border rounded"
      />

      <input
        type="text"
        placeholder="Name (ps)"
        value={testimonial.nameps}
        onChange={(e) =>
          handleTestimonialChange(testimonial.id, "nameps", e.target.value)
        }
        className="w-full px-2 py-1 border rounded"
      />
    </div>

    <div className="flex gap-4">
      <input
        type="number"
        min={0}
        max={5}
        placeholder="Rating"
        value={testimonial.rating}
        onChange={(e) =>
          handleTestimonialChange(testimonial.id, "rating", e.target.value)
        }
        className="w-full px-2 py-1 border rounded"
      />

      <input
        type="date"
        value={testimonial.date}
        onChange={(e) =>
          handleTestimonialChange(testimonial.id, "date", e.target.value)
        }
        className="w-full px-2 py-1 border rounded"
      />
    </div>

    <textarea
      rows={1}
      placeholder="Feedback (en)"
      value={testimonial.feedbackEn}
      onChange={(e) =>
        handleTestimonialChange(testimonial.id, "feedbackEn", e.target.value)
      }
      className="w-full px-2 py-1 border rounded"
    />

    <textarea
      rows={1}
      placeholder="Feedback (fa)"
      value={testimonial.feedbackfa}
      onChange={(e) =>
        handleTestimonialChange(testimonial.id, "feedbackfa", e.target.value)
      }
      className="w-full px-2 py-1 border rounded"
    />

    <textarea
      rows={1}
      placeholder="Feedback (ps)"
      value={testimonial.feedbackps}
      onChange={(e) =>
        handleTestimonialChange(testimonial.id, "feedbackps", e.target.value)
      }
      className="w-full px-2 py-1 border rounded"
    />

    {/* ===== FILE INPUTS ===== */}
    <div className="flex items-center gap-6">
      <div className="flex flex-col gap-2">
        <label>Customer Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setTestimonials((prev) =>
              prev.map((t) =>
                t.id === testimonial.id
                  ? { ...t, customerProfilePicFile: e.target.files[0] }
                  : t
              )
            )
          }
          className="p-2 bg-gray-200 rounded"
        />
        {testimonial.customerProfilePicFile && (
          <span className="text-sm text-gray-600">
            {testimonial.customerProfilePicFile.name}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label>Background Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setTestimonials((prev) =>
              prev.map((t) =>
                t.id === testimonial.id
                  ? { ...t, backgroundImgFile: e.target.files[0] }
                  : t
              )
            )
          }
          className="p-2 bg-gray-200 rounded"
        />
        {testimonial.backgroundImgFile && (
          <span className="text-sm text-gray-600">
            {testimonial.backgroundImgFile.name}
          </span>
        )}
      </div>
    </div>

    <div className="flex justify-end gap-4 mt-3">
      <button
        onClick={() => deleteTestimonial(testimonial.id)}
        className="text-red-500"
      >
        Delete
      </button>

      <button
        onClick={addTestimonial}
        className="px-4 py-1 text-white bg-blue-500 rounded"
      >
        Add
      </button>
    </div>
  </div>
))}
<h1 className="p-2 text-gray-400 border-b border-gray-300">customer feedback list:</h1>
   {testimonialsList.length === 0 && <div>No feedback available</div>}
  <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">name (EN)</th>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">job (EN)</th>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Description  (EN)</th>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">rating</th>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonialsList.map((feedback, index) => (
              <tr
                key={feedback.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 text-sm text-center text-gray-800">{feedback.nameEn || "-"}</td>
                <td className="px-4 py-2 text-sm text-center text-gray-800">{feedback.jobEn || "-"}</td>
                <td className="px-4 py-2 text-sm text-center text-gray-800">{feedback.description1En || "-"}</td>
                <td className="px-4 py-2 text-sm text-center text-gray-800">{feedback.rating}</td>
                <td className="flex items-center justify-center gap-2 px-4 py-2">
                  <button
                    className="flex items-center gap-1 px-3 py-1 text-sm text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
                  >
                    <Pen size={16} /> Edit
                  </button>
                  <button
                  onClick={()=>deleteTestimonialSectionList(feedback.id)}
                    className="flex items-center gap-1 px-3 py-1 text-sm text-white transition-colors bg-red-500 rounded hover:bg-red-600"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      <div className="text-gray-400">No testimonials found</div>

      {/* ===== FAQ ===== */}

    {faqs.map(faq => (
  <div key={faq.id} className="p-3 space-y-2 bg-white border border-gray-200 rounded-lg">
    
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Question (en)"
        value={faq.questionEN}
        onChange={e => handleFAQChange(faq.id, "questionEN", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
      <input
        type="text"
        placeholder="Answer (en)"
        value={faq.answerEN}
        onChange={e => handleFAQChange(faq.id, "answerEN", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
    </div>

    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Question (fa)"
        value={faq.questionfa}
        onChange={e => handleFAQChange(faq.id, "questionfa", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
      <input
        type="text"
        placeholder="Answer (fa)"
        value={faq.answerfa}
        onChange={e => handleFAQChange(faq.id, "answerfa", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
    </div>

    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Question (ps)"
        value={faq.questionps}
        onChange={e => handleFAQChange(faq.id, "questionps", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
      <input
        type="text"
        placeholder="Answer (ps)"
        value={faq.answerps}
        onChange={e => handleFAQChange(faq.id, "answerps", e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
    </div>

    <div className="flex justify-end gap-4 mt-2">
      <button
        onClick={() => deleteFAQ(faq.id)}
        className="flex items-center gap-1 text-red-500"
      >
        <Trash2 size={16} /> Delete
      </button>

      <button
        onClick={addFAQ}
        className="px-4 py-1 text-white bg-blue-500 rounded"
      >
        Add
      </button>
    </div>
  </div>
))}

<h1 className="p-2 text-gray-400 border-b border-gray-300">FAQ  list:</h1>
   {faqsList.length === 0 && <div>No FAQ available</div>}
  <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="w-full bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Question (EN)</th>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Answer (EN)</th>
              <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {faqsList.map((faq, index) => (
              <tr
                key={faq.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 text-sm text-center text-gray-800">{faq.questionEn || "-"}</td>
                <td className="px-4 py-2 text-sm text-center text-gray-800">{faq.answerEn || "-"}</td>
                <td className="flex items-center justify-center gap-2 px-4 py-2">
                  <button
                    className="flex items-center gap-1 px-3 py-1 text-sm text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
                  >
                    <Pen size={16} /> Edit
                  </button>
                  <button
                  onClick={()=>deleteFAQSectionList(faq.id)}
                    className="flex items-center gap-1 px-3 py-1 text-sm text-white transition-colors bg-red-500 rounded hover:bg-red-600"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="text-gray-400">No FAQs found</div>
    </div>
  );
}
