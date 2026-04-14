import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onProductClick }) => {
  if (!products.length) {
    return (
      <div className="py-20 text-center text-gray-400 text-sm px-4">
        No products in this category yet.
      </div>
    );
  }

  return (
    <div className="px-3 pb-28 pt-1">
      <div className="flex items-center justify-between py-3 px-1 mb-1">
        <span className="text-sm font-bold text-gray-900">All Products</span>
        <span className="text-xs text-gray-400 font-medium">{products.length} items</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;