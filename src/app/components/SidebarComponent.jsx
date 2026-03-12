const NAV_LINKS = ["Overview", "Items", "Orders", "Customers", "Settings"];

export default function SidebarComponent() {
  return (
    <aside className="w-52 min-h-screen bg-[#1a2235] border-r border-white/5 flex flex-col px-3 py-6 gap-1 shrink-0">
      <p className="text-[10px] uppercase tracking-widest text-white/30 px-3 mb-1">
        Menu
      </p>

      {NAV_LINKS.map((label) => (
        <div
          key={label}
          className="text-sm px-3 py-2 rounded-lg text-white/70 rounded-md border border-white/10 hover:bg-white/5 hover:border-white/10 cursor-pointer  "
        >
          {label}
        </div>
      ))}
    </aside>
  );
}
