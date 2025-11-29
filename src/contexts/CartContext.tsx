'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import app from '@/firebase/config';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const auth = getAuth(app);

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, change: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  cartCount: number;
  totalPrice: number;
  currentUser: User | null;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const router = useRouter();

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        // Ensure we have valid cart items
        if (Array.isArray(parsedCart) && parsedCart.every(item => 
          item && 
          typeof item.id === 'string' && 
          typeof item.name === 'string' &&
          typeof item.price === 'number' &&
          typeof item.image === 'string' &&
          typeof item.quantity === 'number'
        )) {
          setCart(parsedCart);
        } else {
          console.warn('Invalid cart data in localStorage, resetting cart');
          localStorage.removeItem('cart');
        }
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      localStorage.removeItem('cart');
    }

    // Set up auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        localStorage.removeItem('cart');
      }
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        toggleCart,
        cartCount,
        totalPrice,
        currentUser,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
