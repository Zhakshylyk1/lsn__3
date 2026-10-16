import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList(props) {
  const { products, selectedCategory, onSelectCategory, categories, onAddToCart } = props;

  const filteredProducts = selectedCategory === "Все"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products-section" className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-200">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
            Каталог товаров
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Показано товаров: {filteredProducts.length} из {products.length}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((categoryName) => {
            const isActive = selectedCategory === categoryName;
            return (
              <button
                key={categoryName}
                id={`category-btn-${categoryName}`}
                onClick={() => {
                  console.log(`[ФИЛЬТР] Выбрана категория: "${categoryName}"`);
                  onSelectCategory(categoryName);
                }}
                className={`cursor-pointer text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {categoryName}
              </button>
            );
          })}
        </div>
      </div>

      <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
            description={product.description}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
