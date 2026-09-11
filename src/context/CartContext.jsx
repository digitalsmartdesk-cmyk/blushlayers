import { createContext, useContext, useEffect, useState } from 'react';
import { getProduct } from '../data/products';
import { brand } from '../brand';

const CartContext = createContext(null);
const STORAGE_KEY = 'saya-cart';

export function CartProvider({ children }) {
  const [cartIds, setCartIds] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [lastOrder, setLastOrder] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartIds));
  }, [cartIds]);

  const addToCart = (id) => setCartIds((ids) => [...ids, id]);
  const removeFromCart = (index) => setCartIds((ids) => ids.filter((_, i) => i !== index));

  const cartItems = cartIds.map((id, index) => ({ ...getProduct(id), cartIndex: index }));
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    const orderNumber = brand.orderPrefix + (20000 + Math.floor(Math.random() * 8999) + cartItems.length);
    setLastOrder({ orderNumber, total: cartSubtotal, count: cartItems.length });
    setCartIds([]);
    return orderNumber;
  };

  return (
    <CartContext.Provider value={{ cartItems, cartSubtotal, addToCart, removeFromCart, placeOrder, lastOrder }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
