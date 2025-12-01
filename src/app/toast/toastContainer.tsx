"use client";

import { ToastType, useToast } from "@/app/hooks/toastContext";

const ToastContainer = () => {
  const { toasts } = useToast();

  const colors: Record<ToastType, string> = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-400 text-black",
    info: "bg-blue-500 text-white",
  };

  return (
    <div className="fixed top-14 right-5 z-40">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`${
            colors[t.type]
          } animate-slideIn px-6 py-2 w-full h-16 rounded-md shadow-md text-center flex items-center`}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
};
export default ToastContainer;
