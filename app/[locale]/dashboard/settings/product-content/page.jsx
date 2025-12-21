"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

// Import your sub-components
import Clinic from "./doctor-assistant/clinic";
import Hospital from "./doctor-assistant/hospital";
import Laborant from "./doctor-assistant/laborant";
import Oberation from "./doctor-assistant/oberation";
import Pharmacy from "./doctor-assistant/pharmacy";
import BusinessAssistantProfessional from "./business-assistant/profesional";
import Standard from "./business-assistant/standard";
import MultiProfile from "./business-assistant/multi-profile";

/* ================= CATEGORY CONFIG ================= */

const PRODUCT_CATEGORIES = {
  doctor_assistant: {
    label: "Doctor Assistant",
    items: [
      { key: "hospital", label: "Hospital" },
      { key: "clinic", label: "Clinic" },
      { key: "exam", label: "Examination Center" },
      { key: "pharmacy", label: "Pharmacy" },
      { key: "lab", label: "Laboratory" },
    ],
  },
  business_assistant: {
    label: "Business Assistant",
    items: [
      { key: "standard", label: "Standard Version" },
      { key: "professional", label: "Professional Version" },
      { key: "multi_profile", label: "Multi-Profile Version" },
    ],
  },
};

/* ===== SUB-CATEGORY COMPONENTS (as React components) ===== */

const ClinicComponent = () => <Clinic />;
const HospitalComponent = () => <Hospital />;
const PharmacyComponent = () => <Pharmacy />;
const LabComponent = () => <Laborant />;
const ExamComponent = () => <Oberation />;
const StandardComponent = () => <Standard />;
const ProfessionalComponent = () => <BusinessAssistantProfessional />;
const MultiProfileComponent = () => <MultiProfile />;

/* ================= COMPONENT ================= */

export default function ProductManagement() {
  const router = useRouter();

  const [activeMainCategory, setActiveMainCategory] = useState("doctor_assistant");
  const [activeSubCategory, setActiveSubCategory] = useState("hospital");

  /* ================= SUB CATEGORY COMPONENT MAPPING ================= */

  const SUB_CATEGORY_COMPONENTS = {
    clinic: ClinicComponent,
    hospital: HospitalComponent,
    pharmacy: PharmacyComponent,
    lab: LabComponent,
    exam: ExamComponent,
    standard: StandardComponent,
    professional: ProfessionalComponent,
    multi_profile: MultiProfileComponent,
  };

  const ActiveSubComponent = SUB_CATEGORY_COMPONENTS[activeSubCategory];

  const subCategoryLabel =
    PRODUCT_CATEGORIES[activeMainCategory].items.find(
      (i) => i.key === activeSubCategory
    )?.label;

  /* ================= ACTIONS ================= */

  const addItem = () => {
    // You can customize this as needed
    console.log(`Add item to ${subCategoryLabel}`);
  };

  /* ================= UI ================= */

  return (
    <div className="p-6 space-y-6 bg-white rounded-xl">
      {/* ===== MAIN CATEGORY HEADER ===== */}
      <div className="flex gap-4 pb-4 border-b">
        {Object.entries(PRODUCT_CATEGORIES).map(([key, cat]) => (
          <button
            key={key}
            onClick={() => {
              setActiveMainCategory(key);
              setActiveSubCategory(cat.items[0].key);
            }}
            className={`px-4 py-2 rounded font-medium ${
              activeMainCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ===== SUB CATEGORY HEADER ===== */}
      <div className="flex gap-3">
        {PRODUCT_CATEGORIES[activeMainCategory].items.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveSubCategory(item.key)}
            className={`px-3 py-1 text-sm rounded ${
              activeSubCategory === item.key
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ===== MANAGEMENT PANEL ===== */}
      <section className="p-5 mt-4 ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {subCategoryLabel} Management
          </h2>
         
        </div>

        {/* Render the selected sub-category component */}
        {ActiveSubComponent ? (
          <ActiveSubComponent />
        ) : (
          <div className="py-6 text-center text-gray-500">
            No component defined for this section
          </div>
        )}
      </section>
    </div>
  );
}
