import React from 'react';
import { Bookmark } from "lucide-react";
export default function DetailButtonComponent({ saved = false }) {
  return (
    <button className="opacity-70">
  <Bookmark />
    </button>
  );
}
// book mark simple btn but confust naming