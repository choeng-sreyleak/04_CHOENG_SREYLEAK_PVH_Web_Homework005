"use client";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const DetailsViewBtn = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ButtonComponent onClick={() => setOpen(!open)}>
        View
      </ButtonComponent>

      {open && (
        <dialog
          open
          className="w-full h-full flex justify-center items-center absolute inset-0 bg-black/50 p-5"
        >
          <div className="w-[500px] h-[400px] bg-white rounded-3xl p-5 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 py-2 px-4 bg-red-300 rounded-lg"
            >
              Close
            </button>
            <div className="mt-10 space-y-2 text-black bg-gray-200 p-4 rounded-lg">
              <div><strong>ID:</strong> {item.id}</div>
              <div><strong>Name:</strong> {item.item_name}</div>
              <div><strong>Description:</strong> {item.item_description}</div>
              <div><strong>Price:</strong> ${item.item_price}</div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default DetailsViewBtn;
