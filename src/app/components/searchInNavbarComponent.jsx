"use client";
import React from 'react';
import { useState } from 'react';
function searchInNavbarComponent() {
  // const [query, setQuery] = useState('');
  return (
         <input
            type="text"
            placeholder="Search by item name..."
            readOnly
            className="bg-[#1a2235] border border-white/10 text-sm text-white placeholder-white/30 rounded-lg pl-9 pr-4 py-2 w-64 focus:outline-none cursor-default"
          />

  );
}

export default searchInNavbarComponent;
