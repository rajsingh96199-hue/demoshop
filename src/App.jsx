import { useState } from "react";
import { products } from "./products";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide">VELORA</h1>
        <div className="space-x-6 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-black">Home</span>
          <span className="cursor-pointer hover:text-black">Shop</span>
          <span className="cursor-pointer hover:text-black">Contact</span>
        </div>
      </div>

      {/* HERO */}
      <div className="bg-black text-white text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Elevate Your Style
        </h1>
        <p className="mt-3 text-gray-300">
          Premium fashion curated for modern living
        </p>
        <button className="mt-6 bg-white text-black px-6 py-2 rounded-lg font-semibold">
          Explore Collection
        </button>
      </div>

      {/* SECTION */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-bold mb-6">Trending Products</h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelected(p)}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer overflow-hidden"
            >
              <img
                src={p.image}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />

              <div className="p-3">
                <h3 className="font-semibold">{p.title}</h3>

                {/* fake pricing */}
                <p className="text-gray-400 line-through">
                  €{(p.price * 2).toFixed(2)}
                </p>
                <p className="text-red-500 font-bold text-lg">
                  €{p.price.toFixed(2)}
                </p>

                <p className="text-yellow-500 text-sm">⭐⭐⭐⭐☆</p>
                <p className="text-xs text-red-500">Only 5 left</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-white rounded-xl p-5 w-[90%] max-w-md">
            <img src={selected.image} className="w-full h-60 object-cover rounded" />
            <h2 className="text-xl font-bold mt-3">{selected.title}</h2>

            <p className="text-red-500 text-xl font-bold">
              €{selected.price.toFixed(2)}
            </p>

            <p className="text-sm mt-2 text-gray-600">
              Premium quality product with modern design.
            </p>

            <div className="mt-3">
              <p>⭐⭐⭐⭐☆ (128 reviews)</p>
            </div>

            <button className="mt-4 bg-black text-white w-full py-2 rounded-lg">
              Buy Now
            </button>

            <button
              onClick={() => setSelected(null)}
              className="mt-2 text-gray-500 w-full text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="bg-black text-white text-center py-6 mt-12">
        <p>© 2026 VELORA. All rights reserved.</p>
      </div>

    </div>
  );
}