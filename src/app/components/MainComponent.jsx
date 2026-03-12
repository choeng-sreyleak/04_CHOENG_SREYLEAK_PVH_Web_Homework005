"use client";
import { useState } from "react";
import ItemComponent from "./ItemComponent";
import BookmarkComponent from "./BookmarkComponent";
import BackBtnComponent from "../actions/backBtnComponent";

export default function MainComponent({ items }) {
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  // sort items 
  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.item_name.localeCompare(b.item_name);
    } else {
      return b.item_name.localeCompare(a.item_name);
    }
  });

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex items-center justify-between w-full px-6 py-3">
        <BackBtnComponent />
        <BookmarkComponent onSortChange={setSortOrder} />
      </div>

      {/* List items */}
      <div className="px-6">
        {sortedItems.map((item) => (
          <ItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
