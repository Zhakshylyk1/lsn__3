import React, { useState } from "react";
import { PRODUCTS, CATEGORIES } from "./data/products.js";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import { ShoppingBag } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart(
      cart.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-neutral-100/50 text-neutral-900 flex flex-col font-sans">
      
      <header
        id="main-header"
        className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="">
            </div>

            <div>
              <h1 className="text-xl sm:text-7xl font-black tracking-tight text-neutral-950 uppercase">
                Borntobe
              </h1>

              <p className="text-xs text-neutral-500 font-medium -mt-0.5">
                Магазин стильной одежды
              </p>
            </div>
          </div>

          <a
            href="#cart-section"
            className="flex items-center gap-2"
          >
            <span>Корзина</span>

            <span className="bg-neutral-900 text-white px-2 py-0.5 rounded-full text-xs font-bold">
              {cart.length}
            </span>
          </a>

        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">

        <ProductList
          products={PRODUCTS}
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
        />

        <Cart
          cartItems={cart}
          onRemoveItem={handleRemoveFromCart}
          onClearCart={handleClearCart}
        />

      </main>

      <footer className="mt-16 bg-white border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-medium text-neutral-700">
            © 2026 Borntobe
          </p>
        </div>
      </footer>

    </div>
  );
}