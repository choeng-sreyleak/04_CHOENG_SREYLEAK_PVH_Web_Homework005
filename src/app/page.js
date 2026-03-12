import { items } from "./components/item";
import SidebarComponent from "./components/SidebarComponent";
import NavbarComponent from "./components/NavbarComponent";
import MainComponent from "./components/MainComponent";

async function getItems() {
  return items;
}

export default async function Page() {
  const data = await getItems();
  return (
    <div className="min-h-screen bg-[#111827] text-white font-sans flex flex-col">
      <NavbarComponent />
      <div className="flex flex-1">
        <SidebarComponent />
        <div className="flex-1 p-6">
          <MainComponent items={data} />
        </div>
      </div>
    </div>
  );
}
