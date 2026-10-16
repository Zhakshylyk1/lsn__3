import React from 'react';
import { ShoppingBag, Image as ImageIcon } from 'lucide-react';

export default function ProductCard(props) {

  const { id, name, category, price, img, description, onAddToCart } = props;

  const handleButtonClick = () => {
    console.log(`[КЛИК] Товар добавлен в корзину: "${name}" (ID: ${id}, Цена: ${price} ₽, Категория: ${category})`);
    
    if (onAddToCart) {
      onAddToCart({
        id: id,
        name: name,
        category: category,
        price: price,
        img: img
      });
    }
  };

  return (
    <div 
      id={`product-card-${id}`} 
      className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="w-full h-48 bg-neutral-100 relative flex items-center justify-center overflow-hidden border-b border-neutral-200">
          {img && img.trim() !== "" ? (
            <img 
              src={img} 
              alt={name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                console.warn(`[ПРЕДУПРЕЖДЕНИЕ] Не удалось загрузить картинку для товара "${name}":`, img);
              }}
            />
          ) : (

            <div className="flex flex-col items-center justify-center p-4 text-center text-neutral-400">
              <span className="text-xs font-medium text-neutral-500"></span>
              <span className="text-[11px] text-neutral-400 mt-0.5">Вставьте ссылку в img</span>
            </div>
          )}

          <span className="absolute top-2.5 right-2.5 bg-neutral-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-full font-medium">
            {category}
          </span>
        </div>

        <div className="p-4">
          <h3 className="text-base font-semibold text-neutral-900 line-clamp-1 mb-1">
            {name}
          </h3>
          {description && (
            <p className="text-xs text-neutral-500 line-clamp-2 mb-3">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="p-4 pt-0 mt-auto flex items-center justify-between border-t border-neutral-100 pt-3">
        <div>
          <span className="text-xs text-neutral-400 block">Цена</span>
          <span className="text-lg font-bold text-neutral-900">
            {price.toLocaleString('kg-Kg')} Сом
          </span>
        </div>

        <button
          id={`add-to-cart-btn-${id}`}
          onClick={handleButtonClick}
          className="cursor-pointer inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white text-xs font-medium px-3.5 py-2 rounded-lg transition-all"
        >
          В корзину
        </button>
      </div>
    </div>
  );
}
