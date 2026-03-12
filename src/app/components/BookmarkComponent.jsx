"use client";
import { BookMarked, ArrowUpAZ, ArrowDownAZ } from "lucide-react";

export default function BookmarkComponent({ onSortChange }) {
  return (
    <div className="flex gap-2 mr-4">
      <button className="flex gap-1.5 text-sm px-3 py-2 rounded-lg font-bold">
        <BookMarked />
        <span>Your Bookmark</span>
      </button>
      {/* Sort A–Z */}
      <button
        onClick={() => onSortChange("asc")}
        className="px-2 py-1 rounded-lg bg-gray-700 hover:bg-gray-600"
      >
     <ArrowDownAZ />
      </button>

      {/* Sort Z–A */}
      <button
        onClick={() => onSortChange("desc")}
        className="px-2 py-1 rounded-lg bg-gray-700 hover:bg-gray-600"
      >
             <ArrowUpAZ />
      
      </button>
    </div>
  );
}
