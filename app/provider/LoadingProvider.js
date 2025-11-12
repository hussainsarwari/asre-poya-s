







// app/provider/LoadingProvider.jsx
"use client";
import { Riple } from "react-loading-indicators";

import { createContext, useContext, useState, useCallback } from "react";

// ساخت Context
const LoadingContext = createContext();

// Provider
export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  // فعال کردن لودینگ
  const showLoading = useCallback(() => {
    setLoading(true);
  }, []);

  // غیر فعال کردن لودینگ
  const hideLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
      {/* لودینگ فقط روی بخش main */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-[9999]">
       <Riple color="#0784f2" size="medium" text="" textColor="" />
        </div>
      )}
    </LoadingContext.Provider>
  );
}

// Hook برای استفاده راحت
export function useLoading() {
  return useContext(LoadingContext);
}
