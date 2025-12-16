'use client';

import { X, Plus, Minus, ShoppingBag, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: 'bank-transfer' | 'btc-wallet' | 'gift-card';
}

export default function Cart() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'bank-transfer',
  });
  
  const {
    cart,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    totalPrice,
  } = useCart();
  
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
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
          customer: formData,
          items: cart,
          total: totalPrice,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Send confirmation email
        // await fetch('/api/send-confirmation', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     customer: formData,
        //     items: cart,
        //     total: totalPrice,
        //     orderNumber: data.orderNumber,
        //   }),
        // });
        alert("Order placed successfully!");

        // Clear the cart and form
        clearCart();
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          paymentMethod: 'bank-transfer',
        });
        
        // Close modals
        setShowCheckout(false);
        toggleCart();
        
        // Show success message
        toast.success('Order placed successfully!', {
          description: 'Check your email for order confirmation.',
        });
      } else {
        throw new Error(data.error || 'Failed to process checkout');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('There was an error processing your order. Please try again.');
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
                      onClick={() => setShowCheckout(true)}
                      className="w-full bg-black text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={cartCount === 0}
                    >
                      Proceed to Checkout - ${totalPrice.toFixed(2)}
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
      
      {/* Checkout Modal */}
      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
            <DialogDescription>
              Please provide your details to complete the order
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name *</label>
              <Input
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email *</label>
              <Input
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number *</label>
              <Input
                name="phone"
                type="tel"
                placeholder="+1 123 456 7890"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Shipping Address *</label>
              <Input
                name="address"
                placeholder="123 Main St, City, State, ZIP"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-3 pt-2">
              <label className="text-sm font-medium block">Payment Method</label>
              <div className="space-y-2">
                {/* Bank Transfer */}
                <label className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${formData.paymentMethod === 'bank-transfer' ? 'border-emerald-500 bg-emerald-50' : 'border-input'}`}>
                  <input
                    type="radio"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                    checked={formData.paymentMethod === 'bank-transfer'}
                    onChange={() => setFormData({...formData, paymentMethod: 'bank-transfer'})}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium">Bank Transfer</p>
                    <p className="text-xs text-muted-foreground">Complete payment via bank transfer</p>
                  </div>
                </label>
                
                {/* BTC Wallet */}
                <label className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${formData.paymentMethod === 'btc-wallet' ? 'border-emerald-500 bg-emerald-50' : 'border-input'}`}>
                  <input
                    type="radio"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                    checked={formData.paymentMethod === 'btc-wallet'}
                    onChange={() => setFormData({...formData, paymentMethod: 'btc-wallet'})}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium">BTC Wallet</p>
                    <p className="text-xs text-muted-foreground">Pay with Bitcoin</p>
                  </div>
                </label>
                
                {/* Gift Card */}
                <label className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${formData.paymentMethod === 'gift-card' ? 'border-emerald-500 bg-emerald-50' : 'border-input'}`}>
                  <input
                    type="radio"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                    checked={formData.paymentMethod === 'gift-card'}
                    onChange={() => setFormData({...formData, paymentMethod: 'gift-card'})}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium">Gift Card</p>
                    <p className="text-xs text-muted-foreground">Redeem a gift card</p>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="bg-muted p-4 rounded-lg space-y-2 mt-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping:</span>
                <span className="text-emerald-600">FREE</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-gray-200 mt-2">
                <span>Total:</span>
                <span className="text-emerald-600">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <Button
              className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Place Order'
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center mt-2">
              By placing your order, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
