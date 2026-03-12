import Image from "next/image";
import DetailButtonComponent from "../actions/DetailButtonComponent";
import DetailsViewBtn from "../actions/DetailsViewBtn";

export default function ItemComponent({ item }) {
  const { item_name, item_description, item_price, image, saved } = item;

  return (
    <div className="flex items-center gap-4 px-6 py-4 border-b border-white/5">
      {/* Item image */}
      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white/5 relative">
        <Image
          src={`${image}?w=128&h=128&fit=crop&auto=format`}
          alt={item_name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      {/* Item details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-semibold text-sm text-white">{item_name}</span>
          <span className="text-white/50 text-sm">${item_price.toFixed(2)}</span>
         {/*it just a book mark icon but confust naming filename */}
          <DetailButtonComponent 
          // saved={saved}
           />
        </div>
        <p className="text-white/40 text-xs leading-relaxed truncate">
          {item_description}
        </p>
      </div>

      {/* view details */}
      <DetailsViewBtn item={item} />
    </div>
  );
}
