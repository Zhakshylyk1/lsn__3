import React from "react";

export default function Cart({ cartItems, onRemoveItem, onClearCart }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <section

    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
            Корзина покупок
          </h2>

          <p className="text-xs text-neutral-500">
            {cartItems.length === 0
              ? "Корзина пока пуста"
              : `Товаров в корзине: ${cartItems.length} шт.`}
          </p>
        </div>

        {cartItems.length > 0 && (
          <button
            onClick={onClearCart}
            className="cursor-pointer text-xs text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 font-medium px-3 py-1.5 rounded-lg transition-colors"
          >
            Очистить всё
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="bg-white border border-dashed border-neutral-300 rounded-xl p-8 text-center text-neutral-500">
          <p className="text-base font-semibold text-neutral-800">
            Ваша корзина пуста
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {cartItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="bg-white border border-neutral-200 rounded-xl p-3.5 flex items-center justify-between gap-3 shadow-2xs"
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-lg overflow-hidden shrink-0 flex items-center justify-center border border-neutral-200">
                  {item.img && item.img.trim() !== "" ? (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-[10px] text-neutral-400 font-medium">
                      Фото
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-neutral-900 truncate">
                    {item.name}
                  </h4>

                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[11px] text-neutral-500">
                      {item.category}
                    </span>

                    <span className="text-neutral-300">•</span>

                    <span className="text-xs font-bold text-neutral-900">
                      {item.price.toLocaleString()} Сом
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(index)}
                  title="Удалить из корзины"
                  className="cursor-pointer text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg px-2 py-1 transition-colors"
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>

          <div className="bg-neutral-900 text-white rounded-xl p-5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block">
                Итого к оплате:
              </span>

              <span className="text-2xl font-bold tracking-tight">
                {totalPrice.toLocaleString()} Сом
              </span>
            </div>

            <button
              onClick={() => {
                alert(
                  `Спасибо за заказ в магазине Borntobe!\nТоваров: ${cartItems.length} шт.\nСумма: ${totalPrice.toLocaleString()} Сом`
                );
              }}
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center bg-white text-neutral-900 hover:bg-neutral-100 font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      )}
    </section>
  );
}