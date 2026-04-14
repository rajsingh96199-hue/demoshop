import { useState } from "react";
import BottomSheet from "./BottomSheet";
import EnquiryForm from "./EnquiryForm";
import Stars from "./Stars";

const avgStars = (reviews) =>
  reviews.length ? (reviews.reduce((a, r) => a + r.stars, 0) / reviews.length).toFixed(1) : "5.0";

const ProductSheet = ({ product, isOpen, onClose, onEnquiry }) => {
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  const handleClose = () => {
    setShowForm(false);
    setActiveTab("features");
    onClose();
  };

  if (!product) return null;

  const avg = avgStars(product.reviews);

  return (
    <BottomSheet isOpen={isOpen} onClose={handleClose}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-[10px] tracking-[2px] text-gray-400 uppercase font-semibold">
          Product Detail
        </span>
        <button
          onClick={handleClose}
          className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 text-xl hover:bg-gray-50 transition-colors leading-none"
        >
          ×
        </button>
      </div>

      {/* Product Image */}
      <div className="mx-4 rounded-2xl overflow-hidden bg-gray-50 h-60">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = `https://via.placeholder.com/600x600/f5f5f5/999?text=Product`; }}
        />
      </div>

      {/* Product Info */}
      <div className="px-4 pt-4 pb-2">
        {/* Category + New badge */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] tracking-[1.5px] text-[#c9a96e] uppercase font-bold">
            {product.catLabel}
          </span>
          {product.isNew && (
            <span className="text-[9px] bg-[#c9a96e] text-white px-2 py-0.5 rounded-full font-bold">
              NEW
            </span>
          )}
        </div>

        <h2 className="text-lg font-bold text-gray-900 leading-snug mb-3">
          {product.name}
        </h2>

        {/* Pricing row */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl font-black text-[#0f0f1a]">
            €{product.price.toFixed(2)}
          </span>
          <div>
            <p className="text-sm text-gray-400 line-through leading-none">
              €{product.dhprice.toFixed(2)}
            </p>
            <p className="text-[11px] text-green-600 font-bold mt-0.5">+50% value</p>
          </div>
        </div>

        {/* Rating + MOQ row */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5">
            <Stars count={Math.round(avg)} size="text-sm" />
            <span className="text-xs text-gray-500 font-medium">{avg}</span>
          </div>
          <div className="h-3.5 w-px bg-gray-200" />
          <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg font-semibold">
            {product.moq}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-gray-100 mx-4 mt-4">
        {["features", "specs", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wide transition-all border-b-2 ${
              activeTab === tab
                ? "border-[#0f0f1a] text-[#0f0f1a]"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="px-4 py-4 min-h-[120px]">
        {/* FEATURES TAB */}
        {activeTab === "features" && (
          <div>
            <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">
              Product Features
            </p>
            <ul className="space-y-3">
              {product.features.map((f, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#c9a96e]/15 text-[#c9a96e] flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{f}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* SPECS TAB */}
        {activeTab === "specs" && (
          <div>
            <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">
              Specifications
            </p>
            <div className="divide-y divide-gray-50">
              {product.specs.map((spec, i) => (
                <div
                  key={i}
                  className={`flex justify-between py-2.5 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <span className="text-[12px] text-gray-500 font-medium">{spec.key}</span>
                  <span className="text-[12px] text-gray-900 font-semibold text-right ml-4">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REVIEWS TAB */}
        {activeTab === "reviews" && (
          <div>
            <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">
              Customer Reviews
            </p>
            {product.reviews.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-6">No reviews yet</p>
            ) : (
              <div className="space-y-3">
                {product.reviews.map((r, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-2xl p-3.5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#0f0f1a] flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">
                            {r.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">{r.name}</span>
                      </div>
                      <Stars count={r.stars} />
                    </div>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{r.text}</p>
                    <p className="text-[10px] text-gray-400 mt-1.5">{r.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* CTA or Form */}
      <div className="px-4 pb-6">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-[#0f0f1a] text-white rounded-2xl py-4 text-sm font-bold hover:bg-[#1f1f3a] active:scale-95 transition-all tracking-wide"
          >
            🛒 Enquire / Order Now
          </button>
        ) : (
          <EnquiryForm product={product} onSubmit={onEnquiry} />
        )}
      </div>
    </BottomSheet>
  );
};

export default ProductSheet;