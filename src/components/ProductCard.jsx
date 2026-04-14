import Stars from "./Stars";

const ProductCard = ({ product, onClick }) => {
  const { name, catLabel, price, dhprice, image, isNew, reviews } = product;

  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer group active:scale-[0.97] transition-transform duration-150 shadow-sm hover:shadow-md"
    >
      {/* Image */}
      <div className="relative w-full h-44 bg-gray-50 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x500/f5f5f5/999?text=Product`;
          }}
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
        <span className="absolute top-2.5 left-2.5 text-[9px] bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-lg font-semibold tracking-wide uppercase shadow-sm">
          {catLabel}
        </span>
        {isNew && (
          <span className="absolute top-2.5 right-2.5 text-[9px] bg-[#c9a96e] text-white px-2 py-1 rounded-lg font-bold tracking-wide shadow-sm">
            NEW
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-3 pb-3.5">
        <p className="text-[12px] font-semibold text-gray-900 leading-snug mb-2 line-clamp-2 min-h-[34px]">
          {name}
        </p>
        <div className="flex items-center gap-1 mb-2.5">
          <Stars count={5} />
          <span className="text-[10px] text-gray-400 font-medium">({reviews.length})</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[17px] font-bold text-[#0f0f1a] leading-none">
              €{price.toFixed(2)}
            </p>
            
          </div>
          <div className="w-8 h-8 bg-[#0f0f1a] rounded-xl flex items-center justify-center group-hover:bg-[#c9a96e] transition-colors">
            <span className="text-white text-sm leading-none">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;