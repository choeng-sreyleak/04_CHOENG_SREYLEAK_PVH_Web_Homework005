
import React from "react";
export default function NavbarComponent({ children }) {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-[#111827] sticky top-0 z-10">
      <div className="flex items-center gap-6 justify-between w-full ">
        {/* Logo + Dashboard */}
     
        <div className="flex gap-3 justify-baseline items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold shadow">
            <img
              src="https://i.ytimg.com/vi/rXMB5WSCVks/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHsoicljD8xQWcqliPE0wVJx82zA"
              alt="Logo"
              className="rounded-full"
            />
          </div>
          <span className="text-sm font-semibold tracking-wide text-white">
            Dashboard
          </span>
          </div>

        {/* Search Bar */}
        {/* <searchInNavbarComponent /> */}
        <input
          type="text"
          placeholder="Search by item name..."
          readOnly
          className="bg-[#1a2235] border border-white/10 text-sm text-white placeholder-white/30 rounded-lg pl-9 pr-4 py-2 w-64 focus:outline-none cursor-default"
        />
      </div>
    </header>
  );
}
