// CartContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = sessionStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartCount, setCartCount] = useState(cartItems.length);

  useEffect(() => { 
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartCount(cartItems.length);
    notifyHeader(cartItems, cartCount);
  }, [cartItems, cartCount]);

  const notifyHeader = (updatedCartItems, updatedCartCount) => {
    // Logic to notify the Header component about the updated cart items and count
    // You can use any state or context mechanism to pass this information to the Header
  };

  const addToCart = (item) => {
    const existingProductIndex = cartItems.findIndex((existingItem) => existingItem._id === item._id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex] = { ...cartItems[existingProductIndex], qty: cartItems[existingProductIndex].qty + 1 };
      setCartItems(updatedCart);
    } else {
      setCartItems((prevCart) => [...prevCart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((cartItem) => {
        if (cartItem._id === item._id) {
          const updatedItem = { ...cartItem, qty: Math.max(cartItem.qty - 1, 0) };
          if (updatedItem.qty === 0) {
            // Remove the item if its quantity becomes zero
            console.log('Removing item:', updatedItem);
            return null;
          }
          return updatedItem;
        }
        return cartItem;
      }).filter(Boolean);

      console.log('Updated Cart:', updatedCart);

      sessionStorage.setItem('cartItems', JSON.stringify(updatedCart));
      // Notify the Header component about the updated cart items
      notifyHeader(updatedCart, updatedCart.length);
      return updatedCart;
    });
  };

  const deleteFromCart = (item) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => cartItem._id !== item._id);

      console.log('Deleted from Cart:', item);

      sessionStorage.setItem('cartItems', JSON.stringify(updatedCart));
      // Notify the Header component about the updated cart items
      notifyHeader(updatedCart, updatedCart.length);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
