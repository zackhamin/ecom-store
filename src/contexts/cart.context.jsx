import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItems = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItems = cartItems.find(
    (item) => item.id === productToRemove.id
  );
  if (existingCartItems.quantity === 1) {
    return cartItems.filter((item) => item.id != productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: productToRemove.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  productsCount: 0,
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const newProductCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setProductCount(newProductCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    IsCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    setProductCount,
    productCount,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
