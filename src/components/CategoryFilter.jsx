import { categories } from "../data/products";

const CategoryFilter = ({ active, onChange }) => {
  return (
    <div className="flex gap-2 px-4 py-3.5 overflow-x-auto border-b border-gray-100 scrollbar-hide bg-white">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`whitespace-nowrap text-[12px] px-4 py-2 rounded-xl font-semibold transition-all ${
            active === cat.id
              ? "bg-[#0f0f1a] text-white shadow-sm"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;