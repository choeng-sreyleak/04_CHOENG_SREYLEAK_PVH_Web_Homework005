"use client";

export default function ButtonComponent({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-[#2d2f5e] text-white rounded-lg hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
