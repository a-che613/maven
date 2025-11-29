'use client';

import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Cart() {
  const [isProcessing, setIsProcessing] = useState(false);
  const {
    cart,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    totalPrice,
    currentUser,
  } = useCart();
  
  const router = useRouter();

  const handleCheckout = async () => {
    if (!currentUser) {
      // Save current URL and modal state for redirect after login
      sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
      sessionStorage.setItem('shouldOpenCart', 'true');
      router.push('/auth');
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Send checkout email
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: currentUser.email,
          cart: cart,
          total: totalPrice,
        }),
        credentials: 'include', // Important for cookies to be sent/received
      });

      if (response.ok) {
        // Clear the cart using the context function
        clearCart();
        
        // Show success message
        alert('Your request has been received, our staff will contact you to complete the transaction.');
        
        // Close the cart
        toggleCart();
      } else {
        throw new Error('Failed to process checkout');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isCartOpen) return null;

  // Debug log to check cart contents
  console.log('Cart items:', cart);
  console.log('Cart count:', cartCount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={toggleCart}
          aria-hidden="true"
        />
        
        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="w-screen max-w-md">
            <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      onClick={toggleCart}
                    >
                      <span className="sr-only">Close panel</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    {cart.length === 0 ? (
                      <div className="text-center py-12">
                        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                        <p className="mt-1 text-sm text-gray-500">Start adding some items to your cart.</p>
                      </div>
                    ) : (
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cart.filter(item => item.quantity > 0).map((item) => (
                          <li key={item.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={96}
                                height={96}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{item.name}</h3>
                                  <p className="ml-4">${item.price.toFixed(2)}</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex items-center border rounded-md">
                                  <button
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </button>
                                  <span className="px-3">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                  >
                                    <Plus className="h-4 w-4" />
                                  </button>
                                </div>

                                <button
                                  type="button"
                                  className="font-medium text-red-600 hover:text-red-500"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {cart.length > 0 && (
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-black text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={cartCount === 0 || isProcessing}
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        `Checkout - $${totalPrice.toFixed(2)}`
                      )}
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        className="font-medium text-black hover:text-gray-500"
                        onClick={toggleCart}
                      >
                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
