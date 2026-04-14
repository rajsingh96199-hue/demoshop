import { useState } from "react";
import { products as initialProducts } from "./data/products";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import ProductSheet from "./components/ProductSheet";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [enquiries, setEnquiries] = useState([]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.cat === activeCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f0efe9] flex justify-center">
      <div className="w-full max-w-[480px] bg-white shadow-2xl min-h-screen relative">
        <Header onAdminClick={() => setIsAdminOpen(true)} />
        <Hero />
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        <ProductGrid products={filteredProducts} onProductClick={handleProductClick} />

        <ProductSheet
          product={selectedProduct}
          isOpen={isProductOpen}
          onClose={() => setIsProductOpen(false)}
          onEnquiry={(data) => setEnquiries((prev) => [...prev, data])}
        />

        <AdminPanel
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          enquiries={enquiries}
          onAddProduct={(p) => setProducts((prev) => [...prev, p])}
        />
      </div>
    </div>
  );
}

export default App;