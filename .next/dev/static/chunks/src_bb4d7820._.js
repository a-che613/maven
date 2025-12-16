(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/firebase/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Firebase App (the core Firebase SDK) is always required and must be listed first
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
;
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVTMNQ49EW2Oh6-Uk0UMwfPMsmNF1wDPM",
    authDomain: "maven-bc7e6.firebaseapp.com",
    projectId: "maven-bc7e6",
    storageBucket: "maven-bc7e6.firebasestorage.app",
    messagingSenderId: "354012994070",
    appId: "1:354012994070:web:fa38ef1650f0c7d4aaf337"
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const __TURBOPACK__default__export__ = app;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Load cart from localStorage on initial render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            try {
                const savedCart = localStorage.getItem('cart');
                if (savedCart) {
                    const parsedCart = JSON.parse(savedCart);
                    // Ensure we have valid cart items
                    if (Array.isArray(parsedCart) && parsedCart.every({
                        "CartProvider.useEffect": (item)=>item && typeof item.id === 'string' && typeof item.name === 'string' && typeof item.price === 'number' && typeof item.image === 'string' && typeof item.quantity === 'number'
                    }["CartProvider.useEffect"])) {
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
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(auth, {
                "CartProvider.useEffect.unsubscribe": (user)=>{
                    setCurrentUser(user);
                }
            }["CartProvider.useEffect.unsubscribe"]);
            return ({
                "CartProvider.useEffect": ()=>unsubscribe()
            })["CartProvider.useEffect"];
        }
    }["CartProvider.useEffect"], []);
    // Function to clear the cart
    const clearCart = ()=>{
        setCart([]);
        localStorage.removeItem('cart');
    };
    // Save cart to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            try {
                if (cart.length > 0) {
                    localStorage.setItem('cart', JSON.stringify(cart));
                } else {
                    localStorage.removeItem('cart');
                }
            } catch (error) {
                console.error('Error saving cart to localStorage:', error);
            }
        }
    }["CartProvider.useEffect"], [
        cart
    ]);
    const addToCart = (item)=>{
        setCart((prevCart)=>{
            const existingItem = prevCart.find((cartItem)=>cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem)=>cartItem.id === item.id ? {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    } : cartItem);
            }
            return [
                ...prevCart,
                {
                    ...item,
                    quantity: 1
                }
            ];
        });
    };
    const updateQuantity = (id, change)=>{
        setCart((prevCart)=>prevCart.map((item)=>item.id === id ? {
                    ...item,
                    quantity: Math.max(1, item.quantity + change)
                } : item).filter((item)=>item.quantity > 0));
    };
    const removeFromCart = (id)=>{
        setCart((prevCart)=>prevCart.filter((item)=>item.id !== id));
    };
    const toggleCart = ()=>{
        setIsCartOpen(!isCartOpen);
    };
    const cartCount = cart.reduce((total, item)=>total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item)=>total + item.price * item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart,
            isCartOpen,
            toggleCart,
            cartCount,
            totalPrice,
            currentUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/CartContext.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "8MzShVRzgDKLjOlOgZxADO40LhU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CartProvider;
const useCart = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cart/FloatingCartButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FloatingCartButton() {
    _s();
    const { cartCount, toggleCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-8 right-8 z-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: toggleCart,
            className: "bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors relative",
            "aria-label": "Open cart",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/FloatingCartButton.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center",
                    children: cartCount > 9 ? '9+' : cartCount
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/FloatingCartButton.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cart/FloatingCartButton.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/cart/FloatingCartButton.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(FloatingCartButton, "HtTP8rIJ7Al0KP43RAIyQMr+5b8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = FloatingCartButton;
var _c;
__turbopack_context__.k.register(_c, "FloatingCartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-h-[90vh] overflow-y-auto", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cross2Icon"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cart/Cart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function Cart() {
    _s();
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCheckout, setShowCheckout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        address: '',
        paymentMethod: 'bank-transfer'
    });
    const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart, clearCart, cartCount, totalPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleCheckout = async ()=>{
        if (cart.length === 0) return;
        // Basic form validation
        if (!formData.name || !formData.email || !formData.phone || !formData.address) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Please fill in all required fields');
            return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Please enter a valid email address');
            return;
        }
        setIsProcessing(true);
        try {
            // Send checkout email
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customer: formData,
                    items: cart,
                    total: totalPrice
                })
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
                    paymentMethod: 'bank-transfer'
                });
                // Close modals
                setShowCheckout(false);
                toggleCart();
                // Show success message
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Order placed successfully!', {
                    description: 'Check your email for order confirmation.'
                });
            } else {
                throw new Error(data.error || 'Failed to process checkout');
            }
        } catch (error) {
            console.error('Checkout error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('There was an error processing your order. Please try again.');
        } finally{
            setIsProcessing(false);
        }
    };
    if (!isCartOpen) return null;
    // Debug log to check cart contents
    console.log('Cart items:', cart);
    console.log('Cart count:', cartCount);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black bg-opacity-50 transition-opacity",
                        onClick: toggleCart,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/Cart.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-y-0 right-0 flex max-w-full pl-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-screen max-w-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full flex-col bg-white shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto py-6 px-4 sm:px-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-medium text-gray-900",
                                                        children: "Shopping cart"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ml-3 flex h-7 items-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "-m-2 p-2 text-gray-400 hover:text-gray-500",
                                                            onClick: toggleCart,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sr-only",
                                                                    children: "Close panel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "h-6 w-6",
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flow-root",
                                                    children: cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                className: "mx-auto h-12 w-12 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "mt-2 text-sm font-medium text-gray-900",
                                                                children: "Your cart is empty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-sm text-gray-500",
                                                                children: "Start adding some items to your cart."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "-my-6 divide-y divide-gray-200",
                                                        children: cart.filter((item)=>item.quantity > 0).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex py-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            src: item.image,
                                                                            alt: item.name,
                                                                            width: 96,
                                                                            height: 96,
                                                                            className: "h-full w-full object-cover object-center"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                                            lineNumber: 178,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                                        lineNumber: 177,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "ml-4 flex flex-1 flex-col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex justify-between text-base font-medium text-gray-900",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                            children: item.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                            lineNumber: 190,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "ml-4",
                                                                                            children: [
                                                                                                "$",
                                                                                                item.price.toFixed(2)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                            lineNumber: 191,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                    lineNumber: 189,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                lineNumber: 188,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-1 items-end justify-between text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center border rounded-md",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>updateQuantity(item.id, -1),
                                                                                                className: "px-3 py-1 text-gray-600 hover:bg-gray-100",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                                    className: "h-4 w-4"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                                    lineNumber: 200,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                                lineNumber: 196,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "px-3",
                                                                                                children: item.quantity
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                                lineNumber: 202,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>updateQuantity(item.id, 1),
                                                                                                className: "px-3 py-1 text-gray-600 hover:bg-gray-100",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                                    className: "h-4 w-4"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                                    lineNumber: 207,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                                lineNumber: 203,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                        lineNumber: 195,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        className: "font-medium text-red-600 hover:text-red-500",
                                                                                        onClick: ()=>removeFromCart(item.id),
                                                                                        children: "Remove"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                        lineNumber: 211,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                                lineNumber: 194,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                                        lineNumber: 187,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, item.id, true, {
                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    cart.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-200 py-6 px-4 sm:px-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-base font-medium text-gray-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Subtotal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "$",
                                                            totalPrice.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 text-sm text-gray-500",
                                                children: "Shipping and taxes calculated at checkout."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowCheckout(true),
                                                    className: "w-full bg-black text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-70 disabled:cursor-not-allowed",
                                                    disabled: cartCount === 0,
                                                    children: [
                                                        "Proceed to Checkout - $",
                                                        totalPrice.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 flex justify-center text-center text-sm text-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "or",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "font-medium text-black hover:text-gray-500",
                                                            onClick: toggleCart,
                                                            children: [
                                                                "Continue Shopping",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "aria-hidden": "true",
                                                                    children: " →"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 42
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/Cart.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/Cart.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/Cart.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/Cart.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showCheckout,
                onOpenChange: setShowCheckout,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Please provide your details to complete the order"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/Cart.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium",
                                            children: "Full Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            name: "name",
                                            placeholder: "John Doe",
                                            value: formData.name,
                                            onChange: handleInputChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium",
                                            children: "Email *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            name: "email",
                                            type: "email",
                                            placeholder: "john@example.com",
                                            value: formData.email,
                                            onChange: handleInputChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium",
                                            children: "Phone Number *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            name: "phone",
                                            type: "tel",
                                            placeholder: "+1 123 456 7890",
                                            value: formData.phone,
                                            onChange: handleInputChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium",
                                            children: "Shipping Address *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            name: "address",
                                            placeholder: "123 Main St, City, State, ZIP",
                                            value: formData.address,
                                            onChange: handleInputChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium block",
                                            children: "Payment Method"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${formData.paymentMethod === 'bank-transfer' ? 'border-emerald-500 bg-emerald-50' : 'border-input'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            className: "h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300",
                                                            checked: formData.paymentMethod === 'bank-transfer',
                                                            onChange: ()=>setFormData({
                                                                    ...formData,
                                                                    paymentMethod: 'bank-transfer'
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Bank Transfer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "Complete payment via bank transfer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${formData.paymentMethod === 'btc-wallet' ? 'border-emerald-500 bg-emerald-50' : 'border-input'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            className: "h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300",
                                                            checked: formData.paymentMethod === 'btc-wallet',
                                                            onChange: ()=>setFormData({
                                                                    ...formData,
                                                                    paymentMethod: 'btc-wallet'
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium",
                                                                    children: "BTC Wallet"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "Pay with Bitcoin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                    lineNumber: 349,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${formData.paymentMethod === 'gift-card' ? 'border-emerald-500 bg-emerald-50' : 'border-input'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            className: "h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300",
                                                            checked: formData.paymentMethod === 'gift-card',
                                                            onChange: ()=>setFormData({
                                                                    ...formData,
                                                                    paymentMethod: 'gift-card'
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium",
                                                                children: "Gift Card"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${formData.paymentMethod === 'cash-app' ? 'border-emerald-500 bg-emerald-50' : 'border-input'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            className: "h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300",
                                                            checked: formData.paymentMethod === 'cash-app',
                                                            onChange: ()=>setFormData({
                                                                    ...formData,
                                                                    paymentMethod: 'cash-app'
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium",
                                                                children: "Cash App"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${formData.paymentMethod === 'zelle' ? 'border-emerald-500 bg-emerald-50' : 'border-input'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            className: "h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300",
                                                            checked: formData.paymentMethod === 'zelle',
                                                            onChange: ()=>setFormData({
                                                                    ...formData,
                                                                    paymentMethod: 'zelle'
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium",
                                                                children: "Zelle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${formData.paymentMethod === 'venmo' ? 'border-emerald-500 bg-emerald-50' : 'border-input'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            className: "h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300",
                                                            checked: formData.paymentMethod === 'venmo',
                                                            onChange: ()=>setFormData({
                                                                    ...formData,
                                                                    paymentMethod: 'venmo'
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium",
                                                                children: "Venmo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-muted p-4 rounded-lg space-y-2 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Subtotal:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "$",
                                                        totalPrice.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Shipping:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-emerald-600",
                                                    children: "FREE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between font-bold pt-2 border-t border-gray-200 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Total:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-emerald-600",
                                                    children: [
                                                        "$",
                                                        totalPrice.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 416,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full mt-4 bg-emerald-600 hover:bg-emerald-700",
                                    onClick: handleCheckout,
                                    disabled: isProcessing,
                                    children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "mr-2 h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                lineNumber: 429,
                                                columnNumber: 19
                                            }, this),
                                            "Processing..."
                                        ]
                                    }, void 0, true) : 'Place Order'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground text-center mt-2",
                                    children: "By placing your order, you agree to our Terms of Service and Privacy Policy."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/Cart.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cart/Cart.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cart/Cart.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/Cart.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_s(Cart, "i3hdCK6aVwtDbGewNr6Bnkva8/8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Cart;
var _c;
__turbopack_context__.k.register(_c, "Cart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Auto-generated product data
// Generated on: 2025-12-04T10:20:47.787Z
// Total products: 218
__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 55,
        "name": "Berry White Cannabis Oil",
        "id": "berry-white-cannabis-oil",
        "image": "/products/CBD Oil/BerryWhiteCannabisOil-55.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 55,
        "name": "Blackberry Kush Cannabis Oil",
        "id": "blackberry-kush-cannabis-oil",
        "image": "/products/CBD Oil/BlackberryKushCannabisOil-55.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 255,
        "name": "Blue Label CBD Hemp Oil",
        "id": "blue-label-c-b-d-hemp-oil",
        "image": "/products/CBD Oil/BlueLabelCBDHempOil-255.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 390,
        "name": "CBD Oil (Medi- Wiet) 10ml",
        "id": "c-b-d-oil-medi-wiet-10ml",
        "image": "/products/CBD Oil/CBDOil(Medi-Wiet)10ml-390.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 270,
        "name": "CBD Oil Azoth 10ml-5%",
        "id": "c-b-d-oil-azoth10-m-l-5",
        "image": "/products/CBD Oil/cbdoilazoth-270.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 270,
        "name": "CBD Oil Cannabigold 11ml-5%",
        "id": "c-b-d-oil-cannabigold11ml-5",
        "image": "/products/CBD Oil/cbdoilcannabigold-270.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 175,
        "name": "CBD Paste (Endoca) 20%",
        "id": "c-b-d-paste-endoca-20",
        "image": "/products/CBD Oil/CBDPaste(Endoca)-175.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 200,
        "name": "Hemp Seed Oil Plus CBD",
        "id": "hemp-seed-oil-plus-c-b-d",
        "image": "/products/CBD Oil/HempSeedOilPlusCBD-200.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 290,
        "name": "Jacob Hooy CBD Oil 10ml",
        "id": "jacob-hooy-c-b-d-oil10ml",
        "image": "/products/CBD Oil/JacobHooyCBDOil10ml-290.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 385,
        "name": "Meladol CBD (Cibdol) 30ml",
        "id": "meladol-c-b-d-cibdol-30ml",
        "image": "/products/CBD Oil/MeladolCBD(Cibdol)30ml-385.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Oil",
        "price": 410,
        "name": "Pure Hemp CBD Gold Oil",
        "id": "pure-hemp-c-b-d-gold-oil",
        "image": "/products/CBD Oil/PureHempCBDGoldOil-410.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cannabis Seeds",
        "price": 890,
        "name": "Afghan Kush Seeds- Cannabis Seeds",
        "priceRange": "$150.00-$890.00",
        "id": "afghan-kush-seeds-cannabis-seeds-150",
        "image": "/products/Cannabis Seeds/AfghanKushSeeds-CannabisSeeds-150-890.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cannabis Seeds",
        "price": 890,
        "name": "God's Gift Strain Seeds",
        "priceRange": "$150.00-$890.00",
        "id": "god-s-gift-strain-seeds-150",
        "image": "/products/Cannabis Seeds/God'sGiftStrainSeeds-150-890.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 125,
        "name": "710 King Pen",
        "id": "710-king-pen",
        "image": "/products/Cartridges/710KingPen-125.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 150,
        "name": "710 King Pen Cartridge",
        "id": "710-king-pen-cartridge",
        "image": "/products/Cartridges/710KingPenCartridge-150.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 12,
        "name": "Authentic Choices 1g Cart",
        "id": "authentic-choices1g-cart",
        "image": "/products/Cartridges/AuthenticChoices1gCart-12.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 365,
        "name": "Bhang Naturals Cartridges",
        "id": "bhang-naturals-cartridges",
        "image": "/products/Cartridges/BhangNaturalsCartridges-365.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "originalPrice": 30,
        "price": 25,
        "name": "Brass Knuckles",
        "id": "brass-knuckles-from",
        "image": "/products/Cartridges/BrassKnuckles-from-30-25.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 150,
        "name": "Brass Knuckles Online",
        "id": "brass-knuckles-online",
        "image": "/products/Cartridges/BrassKnucklesOnline-150.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Gummies",
        "price": 60,
        "name": "CBD Gummy Worms",
        "id": "c-b-d-gummy-worms",
        "image": "/products/Cartridges/CBDGummyWorms-60.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Gummies",
        "price": 50,
        "name": "CBD Relax Bears",
        "id": "c-b-d-relax-bears",
        "image": "/products/Cartridges/CBDRelaxBears-50.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "originalPrice": 1100,
        "price": 1000,
        "name": "Cake Designer Live Resin",
        "id": "cake-designer-live-resin-from",
        "image": "/products/Cartridges/CakeDesignerLiveResin-from-1100-1000.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 70,
        "name": "Cure Pen",
        "id": "cure-pen",
        "image": "/products/Cartridges/CurePen-70.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 350,
        "name": "Dank Vape Full Gram",
        "id": "dank-vape-full-gram",
        "image": "/products/Cartridges/DankVapeFullGram-350.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "originalPrice": 20,
        "price": 15,
        "name": "Dank Vapes 2g",
        "id": "dank-vapes2g-from",
        "image": "/products/Cartridges/DankVapes2g-from-20-15.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Gummies",
        "price": 60,
        "name": "Diamond CBD - Broad",
        "id": "diamond-c-b-d-broad",
        "image": "/products/Cartridges/DiamondCBD-Broad-60.webp"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 130,
        "name": "Heavy Hitters",
        "id": "heavy-hitters",
        "image": "/products/Cartridges/HeavyHitters-130.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "originalPrice": 30,
        "price": 25,
        "name": "King Pen",
        "id": "king-pen-from",
        "image": "/products/Cartridges/KingPen-from-30-25.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "originalPrice": 30,
        "price": 25,
        "name": "Korova Carts",
        "id": "korova-carts-from",
        "image": "/products/Cartridges/KorovaCarts-from-30-25.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 80,
        "name": "Live Rosin",
        "id": "live-rosin",
        "image": "/products/Cartridges/LiveRosin-80.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 110,
        "name": "Moon Rock Clear",
        "id": "moon-rock-clear",
        "image": "/products/Cartridges/MoonRockClear-110.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Gummies",
        "price": 50,
        "name": "Relax Gummies - CBD Full",
        "id": "relax-gummies-c-b-d-full",
        "image": "/products/Cartridges/RelaxGummies-CBDFull-50.webp"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "price": 70,
        "name": "Rove Cartridges",
        "id": "rove-cartridges",
        "image": "/products/Cartridges/RoveCartridges-70.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cartridges",
        "originalPrice": 30,
        "price": 25,
        "name": "STIIIZY Carts",
        "id": "s-t-i-i-i-z-y-carts-from",
        "image": "/products/Cartridges/STIIIZYCarts-from-30-25.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "CBD Gummies",
        "price": 74,
        "name": "Yum Yum Gummies-CBD Full",
        "id": "yum-yum-gummies-c-b-d-full",
        "image": "/products/Cartridges/YumYumGummies-CBDFull-74.webp"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 265,
        "name": "ACDC BHO Wax From",
        "id": "a-c-d-c-b-h-o-wax-from",
        "image": "/products/Concentrates/ACDCBHOWaxFrom-265.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 265,
        "name": "Bear OG BHO Shatter",
        "id": "bear-o-g-b-h-o-shatter",
        "image": "/products/Concentrates/BearOGBHOShatter-265.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 265,
        "name": "Cannalope Kush BHO Wax",
        "id": "cannalope-kush-b-h-o-wax",
        "image": "/products/Concentrates/CannalopeKushBHOWax-265.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 240,
        "name": "Cindy99 BHO Wax",
        "id": "cindy99-b-h-o-wax",
        "image": "/products/Concentrates/Cindy99BHOWax-240.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 265,
        "name": "Colombian Gold BHO Wax",
        "id": "colombian-gold-b-h-o-wax",
        "image": "/products/Concentrates/ColombianGoldBHOWax-265.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 200,
        "name": "Ghost Train Haze BHO Wax",
        "id": "ghost-train-haze-b-h-o-wax",
        "image": "/products/Concentrates/GhostTrainHazeBHOWax-200.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 310,
        "name": "Green Crack BHO Wax",
        "id": "green-crack-b-h-o-wax",
        "image": "/products/Concentrates/GreenCrackBHOWax-310.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 300,
        "name": "Monopoly Cart",
        "id": "monopoly-cart",
        "image": "/products/Concentrates/MonopolyCart-300.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 370,
        "name": "Shatter",
        "id": "shatter",
        "image": "/products/Concentrates/Shatter-370.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 70,
        "name": "THCA Isolate - Absolute Xtracts",
        "id": "t-h-c-a-isolate-absolute-xtracts",
        "image": "/products/Concentrates/THCAIsolate-AbsoluteXtracts-70.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 190,
        "name": "Trainwreck BHO Wax",
        "id": "trainwreck-b-h-o-wax",
        "image": "/products/Concentrates/TrainwreckBHOWax-190.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Concentrates",
        "price": 285,
        "name": "Ultimate Medley PHO Sugar",
        "id": "ultimate-medley-p-h-o-sugar",
        "image": "/products/Concentrates/UltimateMedleyPHOSugar-285.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 50,
        "name": "Apple Fritter",
        "id": "apple-fritter",
        "image": "/products/Cookies Melrose/AppleFritter-50.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 50,
        "name": "Banana Lato",
        "id": "banana-lato",
        "image": "/products/Cookies Melrose/BananaLato-50.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 50,
        "name": "Banana Pound Cake",
        "id": "banana-pound-cake",
        "image": "/products/Cookies Melrose/BananaPoundCake-50.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 50,
        "name": "Banana Runtz",
        "id": "banana-runtz",
        "image": "/products/Cookies Melrose/BananaRuntz-50.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 80,
        "name": "Bell Family Farms",
        "id": "bell-family-farms",
        "image": "/products/Cookies Melrose/BellFamilyFarms-80.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 50,
        "name": "Berry Pie",
        "id": "berry-pie",
        "image": "/products/Cookies Melrose/BerryPie-50.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 150,
        "name": "Cake Mix Minntz",
        "id": "cake-mix-minntz",
        "image": "/products/Cookies Melrose/CakeMixMinntz-150.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 320,
        "name": "Chapo Cookies",
        "id": "chapo-cookies",
        "image": "/products/Cookies Melrose/ChapoCookies-320.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 60,
        "name": "Cherry Pie",
        "id": "cherry-pie",
        "image": "/products/Cookies Melrose/CherryPie-60.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 60,
        "name": "Cookies (Mixed Flavors)",
        "id": "cookies-mixed-flavors",
        "image": "/products/Cookies Melrose/Cookies(MixedFlavors)-60.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 60,
        "name": "Cookies Mix Pack",
        "id": "cookies-mix-pack",
        "image": "/products/Cookies Melrose/CookiesMixPack-60.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 70,
        "name": "Cookies Pre Rolls",
        "id": "cookies-pre-rolls",
        "image": "/products/Cookies Melrose/CookiesPreRolls-70.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 50,
        "name": "Frosties Cookies",
        "id": "frosties-cookies",
        "image": "/products/Cookies Melrose/FrostiesCookies-50.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 60,
        "name": "Fruity Pebbles",
        "id": "fruity-pebbles",
        "image": "/products/Cookies Melrose/FruityPebbles-60.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 60,
        "name": "Garrison-Lane",
        "id": "garrison-lane",
        "image": "/products/Cookies Melrose/Garrison-Lane-60.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 200,
        "name": "Georgia Pie Cookies",
        "id": "georgia-pie-cookies",
        "image": "/products/Cookies Melrose/GeorgiaPieCookies-200.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 250,
        "name": "Honey Bun",
        "id": "honey-bun",
        "image": "/products/Cookies Melrose/HoneyBun-250.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 200,
        "name": "Lemonade: Burnt Cake",
        "id": "lemonade-burnt-cake",
        "image": "/products/Cookies Melrose/Lemonade:BurntCake-200.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 200,
        "name": "London Pound Cake Cookies",
        "id": "london-pound-cake-cookies",
        "image": "/products/Cookies Melrose/LondonPoundCakeCookies-200.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 300,
        "name": "Lpsc X Km 24",
        "id": "lpsc-x-km24",
        "image": "/products/Cookies Melrose/LpscXKm24-300.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 80,
        "name": "Mintz",
        "id": "mintz",
        "image": "/products/Cookies Melrose/Mintz-80.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 80,
        "name": "Pluto Cookies",
        "id": "pluto-cookies",
        "image": "/products/Cookies Melrose/PlutoCookies-80.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Cookies Melrose",
        "price": 50,
        "name": "Sweet Tea Cookies",
        "id": "sweet-tea-cookies",
        "image": "/products/Cookies Melrose/SweetTeaCookies-50.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Crumble",
        "price": 3200,
        "name": "Light Brown Crumble",
        "priceRange": "$420.00-$3,200.00",
        "id": "light-brown-crumble-420",
        "image": "/products/Crumble/LightBrownCrumble-420-3200.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Crumble",
        "price": 3200,
        "name": "White Crumble-450",
        "priceRange": "$450.00-$3,200.00",
        "id": "white-crumble-450",
        "image": "/products/Crumble/WhiteCrumble-450-3200.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Delta 8 Cartridges",
        "price": 40,
        "name": "Green Crack",
        "id": "green-crack",
        "image": "/products/Delta 8 Cartridges/GreenCrack-40.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Delta 8 Cartridges",
        "price": 42,
        "name": "Pineapple Express",
        "id": "pineapple-express-1",
        "image": "/products/Delta 8 Cartridges/PineappleExpress-42.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Delta 8 Cartridges",
        "price": 42,
        "name": "Super Lemon Haze",
        "id": "super-lemon-haze",
        "image": "/products/Delta 8 Cartridges/SuperLemonHaze-42.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Delta 8 Cartridges",
        "price": 40,
        "name": "Watermelon Zkittlez",
        "id": "watermelon-zkittlez",
        "image": "/products/Delta 8 Cartridges/WatermelonZkittlez-40.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Delta 8 Disposable Carts",
        "price": 70,
        "name": "Chill Plus Delta",
        "id": "chill-plus-delta",
        "image": "/products/Delta 8 Disposable Carts/ChillPlusDelta-8THC.webp"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Delta 8 Disposable Carts",
        "price": 37,
        "name": "Green Crack Vape Pen - Delta 8",
        "id": "green-crack-vape-pen-delta8",
        "image": "/products/Delta 8 Disposable Carts/GreenCrackVapePen-Delta8-37.webp"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Delta 8 Disposable Carts",
        "price": 80,
        "name": "Green Daddy Purp",
        "id": "green-daddy-purp",
        "image": "/products/Delta 8 Disposable Carts/GreenDaddyPurp-80.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Delta 8 Disposable Carts",
        "price": 40,
        "name": "Guava Vape Pen",
        "id": "guava-vape-pen",
        "image": "/products/Delta 8 Disposable Carts/GuavaVapePen-40.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Delta 8 Disposable Carts",
        "price": 56,
        "name": "Mango Kush Vape Delta8 THC – Disposable – 10 X – 920mg",
        "id": "mango-kush-vape-delta8-t-h-c-disposable-10-x-920mg",
        "image": "/products/Delta 8 Disposable Carts/MangoKushVapeDelta8THC–Disposable–10X–920mg-56.webp"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Delta 8 Disposable Carts",
        "price": 60,
        "name": "Pineapple Express",
        "id": "pineapple-express-2",
        "image": "/products/Delta 8 Disposable Carts/PineappleExpress-60.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Dried Psilocybin Mushrooms",
        "price": 1000,
        "name": "Alvery Albino-180",
        "id": "alvery-albino-180",
        "image": "/products/Dried Psilocybin Mushrooms/AlveryAlbino-180-1000.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Dried Psilocybin Mushrooms",
        "price": 750,
        "name": "Ap V2",
        "priceRange": "$2000.00-$750.00",
        "id": "ap-v2-200",
        "image": "/products/Dried Psilocybin Mushrooms/ApV2-200-750.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Dried Psilocybin Mushrooms",
        "price": 850,
        "name": "Bt",
        "priceRange": "$180.00-$850.00",
        "id": "bt-180",
        "image": "/products/Dried Psilocybin Mushrooms/Bt-180-850.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Dried Psilocybin Mushrooms",
        "price": 750,
        "name": "Bulk Mushroom I",
        "priceRange": "$350.00-$750.00",
        "id": "bulk-mushroom-i-350",
        "image": "/products/Dried Psilocybin Mushrooms/BulkMushroomI-350-750.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Dried Psilocybin Mushrooms",
        "price": 850,
        "name": "Golden Teacher",
        "priceRange": "$180.00-$850.00",
        "id": "golden-teacher-180",
        "image": "/products/Dried Psilocybin Mushrooms/GoldenTeacher-180-850.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Dried Psilocybin Mushrooms",
        "price": 850,
        "name": "King Lizard",
        "priceRange": "$150.00-$850.00",
        "id": "king-lizard-180",
        "image": "/products/Dried Psilocybin Mushrooms/KingLizard-180-850.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Dried Psilocybin Mushrooms",
        "price": 45,
        "name": "One-up Psilocybin",
        "id": "one-up-psilocybin",
        "image": "/products/Dried Psilocybin Mushrooms/One-upPsilocybin-45.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Dried Psilocybin Mushrooms",
        "price": 250,
        "name": "Original Ape",
        "priceRange": "$200.00-$250.00",
        "id": "original-ape-200",
        "image": "/products/Dried Psilocybin Mushrooms/OriginalApe-200-250.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Dried Psilocybin Mushrooms",
        "price": 820,
        "name": "Pleasure Coast",
        "priceRange": "$190.00-$820.00",
        "id": "pleasure-coast-190",
        "image": "/products/Dried Psilocybin Mushrooms/PleasureCoast-190-820.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Dried Psilocybin Mushrooms",
        "price": 1100,
        "name": "Purple Mystic",
        "priceRange": "$200.00-$1,100.00",
        "id": "purple-mystic-200",
        "image": "/products/Dried Psilocybin Mushrooms/PurpleMystic-200-1100.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 115.95,
        "name": "450mg CBD Gummy Worms",
        "id": "450mg-c-b-d-gummy-worms",
        "image": "/products/Edibles/450mgCBDGummyWorms-115.95.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 330,
        "name": "Alice Brownie",
        "id": "alice-brownie",
        "image": "/products/Edibles/AliceBrownie-330.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 430,
        "name": "Alice Brownies",
        "id": "alice-brownies",
        "image": "/products/Edibles/AliceBrownies-430.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 70,
        "name": "Assorted Flavor CDB Gummy",
        "id": "assorted-flavor-c-d-b-gummy",
        "image": "/products/Edibles/AssortedFlavorCDBGummy-70.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 360,
        "name": "Blissfully Baked Brownie",
        "id": "blissfully-baked-brownie",
        "image": "/products/Edibles/BlissfullyBakedBrownie-360.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 120,
        "name": "Blue Raspberry Thc Gummies",
        "id": "blue-raspberry-thc-gummies",
        "image": "/products/Edibles/BlueRaspberryThcGummies-120.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 460,
        "name": "Cannabis Infused Brownie",
        "id": "cannabis-infused-brownie",
        "image": "/products/Edibles/CannabisInfusedBrownie-460.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 130,
        "name": "Chocolate Fudge Brownie",
        "id": "chocolate-fudge-brownie",
        "image": "/products/Edibles/ChocolateFudgeBrownie-130.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 100,
        "name": "Delta-8-THC Gummies - Asteroids",
        "id": "delta-8-t-h-c-gummies-5-mango",
        "image": "/products/Edibles/Delta-8-THCGummies-100.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 100,
        "name": "Delta-8 THC Gummies - Blue",
        "id": "delta-8-t-h-c-gummies-4-blue",
        "image": "/products/Edibles/Delta-8THCGummies-Blue-100.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 100,
        "name": "Delta-8 THC Gummies - Mango",
        "id": "delta-8-t-h-c-gummies-1",
        "image": "/products/Edibles/Delta-8THCGummies-Mango.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 110,
        "name": "Delta-8 THC Gummies - Pineapple Express",
        "id": "delta-8-t-h-c-gummies-2-pineapple-express",
        "image": "/products/Edibles/Delta-8THCGummies-PineappleExpress-110.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 100,
        "name": "Delta-8 THC Gummies - Sour",
        "id": "delta-8-t-h-c-gummies-3-sour",
        "image": "/products/Edibles/Delta-8THCGummies-Sour-100.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "originalPrice": 10,
        "price": 6,
        "name": "Edible Airheads from",
        "id": "edible-airheads-from",
        "image": "/products/Edibles/EdibleAirheads-from-10-6.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 100,
        "name": "Gummy Sharks",
        "id": "gummy-sharks",
        "image": "/products/Edibles/GummySharks-100.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "originalPrice": 8,
        "price": 6,
        "name": "Nerd Rope Edibles",
        "id": "nerd-rope-edibles-from",
        "image": "/products/Edibles/NerdRopeEdibles-from-8-6.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "originalPrice": 35.99,
        "price": 30.99,
        "name": "One Up  Psilocybin Mushroom",
        "id": "one-up-psilocybin-mushroom-from",
        "image": "/products/Edibles/OneUp-PsilocybinMushroom-from-35.99-30.99.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 150,
        "name": "Raspberry Cheesecake",
        "id": "raspberry-cheesecake",
        "image": "/products/Edibles/RaspberryCheesecake-150.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 120,
        "name": "Raspberry Gummies",
        "id": "raspberry-gummies",
        "image": "/products/Edibles/RaspberryGummies-120.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 70,
        "name": "Stoney Patch Gummies",
        "id": "stoney-patch-gummies",
        "image": "/products/Edibles/StoneyPatchGummies-70.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "originalPrice": 20,
        "price": 18,
        "name": "Stoney Patch THC Gummies",
        "id": "stoney-patch-t-h-c-gummies-from",
        "image": "/products/Edibles/StoneyPatchTHCGummies-from-20-18.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Edibles",
        "price": 200,
        "name": "THC Gummies",
        "id": "t-h-c-gummies",
        "image": "/products/Edibles/THCGummies-200.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hash",
        "price": 50,
        "name": "Banana Hammock Hash",
        "id": "banana-hammock-hash",
        "image": "/products/Hash/BananaHammockHash-50.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hash",
        "price": 40,
        "name": "Bentley Hash",
        "id": "bentley-hash",
        "image": "/products/Hash/BentleyHash-40.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hash",
        "price": 20,
        "name": "Medi Hash",
        "id": "medi-hash",
        "image": "/products/Hash/MediHash-20.webp"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hash",
        "price": 50,
        "name": "Mercedez Lebanon Hash Online",
        "id": "mercedez-lebanon-hash-online",
        "image": "/products/Hash/MercedezLebanonHashOnline-50.webp"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hash",
        "price": 50,
        "name": "Red Lebanese Hash",
        "id": "red-lebanese-hash",
        "image": "/products/Hash/RedLebaneseHash-50.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hash",
        "price": 25,
        "name": "Yemeni Diamond Hash",
        "id": "yemeni-diamon-hash",
        "image": "/products/Hash/YemeniDiamonHash-25.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 400,
        "name": "Ak-47",
        "id": "ak-w7",
        "image": "/products/Hybrid/Ak-w7-400.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 400,
        "name": "Alaskan Thunder Fuck",
        "id": "alaskan-thunder-fuck",
        "image": "/products/Hybrid/AlaskanThunderFuck-400.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 390,
        "name": "Alien OG",
        "id": "alien-o-g",
        "image": "/products/Hybrid/AlienOG-390.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 340,
        "name": "Amnesia Haze",
        "id": "amnesia-haze",
        "image": "/products/Hybrid/AmnesiaHaze-340.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 370,
        "name": "Blue Dream",
        "id": "blue-dream",
        "image": "/products/Hybrid/BlueDream-370.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 400,
        "name": "Cereal Milk",
        "id": "cereal-milk",
        "image": "/products/Hybrid/CerealMilk-400.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 380,
        "name": "Chemdawg",
        "id": "chemdawg",
        "image": "/products/Hybrid/Chemdawg-380.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 330,
        "name": "Chunky Diesel",
        "id": "chunky-diesel",
        "image": "/products/Hybrid/ChunkyDiesel-330.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 360,
        "name": "Critical Kush",
        "id": "critical-kush",
        "image": "/products/Hybrid/CriticalKush-360.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 400,
        "name": "Godfather OG",
        "id": "godfather-o-g",
        "image": "/products/Hybrid/GodfatherOG-400.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 370,
        "name": "Gorilla Glue4",
        "id": "gorilla-glue4",
        "image": "/products/Hybrid/GorillaGlue4-370.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 300,
        "name": "Jack Herer Weed",
        "id": "jack-here-weed",
        "image": "/products/Hybrid/JackHereWeed-300.webp"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 370,
        "name": "Jamaican Pearl",
        "id": "jamaican-pearl",
        "image": "/products/Hybrid/JamaicanPearl-370.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 340,
        "name": "Lavender Haze",
        "id": "lavender-haze",
        "image": "/products/Hybrid/LavenderHaze-340.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 400,
        "name": "Mango Cannabis Strain",
        "id": "mango-cannabis-strain",
        "image": "/products/Hybrid/MangoCannabisStrain-400.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 350,
        "name": "Moonwalker Kush",
        "id": "moonwalker-kush",
        "image": "/products/Hybrid/MoonwalkerKush-350.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 400,
        "name": "Pineapple Express",
        "id": "pineapple-express-3",
        "image": "/products/Hybrid/PineappleExpress-400.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 370,
        "name": "Purple Diesel",
        "id": "purple-diesel",
        "image": "/products/Hybrid/PurpleDiesel-370.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 350,
        "name": "Purple Haze",
        "id": "purple-haze",
        "image": "/products/Hybrid/PurpleHaze-350.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 350,
        "name": "Purple Lemon Haze",
        "id": "purple-lemon-haze",
        "image": "/products/Hybrid/PurpleLemonHaze-350.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 380,
        "name": "Sensi Star",
        "id": "sensi-star",
        "image": "/products/Hybrid/SensiStar-380.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 300,
        "name": "Sexxpot",
        "id": "sexxpot",
        "image": "/products/Hybrid/Sexxpot-300.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 300,
        "name": "Skywalker",
        "id": "skywalker",
        "image": "/products/Hybrid/Skywalker-300.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 60,
        "name": "Snow Man",
        "id": "snow-man",
        "image": "/products/Hybrid/SnowMan-60.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 400,
        "name": "Sour Diesel",
        "id": "sour-diesel",
        "image": "/products/Hybrid/SourDiesel-400.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 400,
        "name": "Sundae Driver",
        "id": "sundae-driver",
        "image": "/products/Hybrid/SundaeDriver-400.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 380,
        "name": "Super Silver Haze",
        "id": "super-silver-haze",
        "image": "/products/Hybrid/SuperSilverHaze-380.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Hybrid",
        "price": 330,
        "name": "White Russian",
        "id": "white-russian",
        "image": "/products/Hybrid/WhiteRussian-330.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Indica Strain",
        "price": 330,
        "name": "Ace Of Spades",
        "id": "ace-of-spades",
        "image": "/products/Indica Strain/AceOfSpades-330.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Indica Strain",
        "price": 380,
        "name": "Aurora Indica",
        "id": "aurora-indica",
        "image": "/products/Indica Strain/AuroraIndica-380.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Indica Strain",
        "price": 420,
        "name": "Bubba Kush",
        "id": "bubba-kush",
        "image": "/products/Indica Strain/BubbaKush-420.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Indica Strain",
        "price": 485,
        "name": "Florida Cake #2",
        "id": "florida-cake-2",
        "image": "/products/Indica Strain/FloridaCake2-485.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Indica Strain",
        "price": 370,
        "name": "Paris OG",
        "id": "paris-o-g",
        "image": "/products/Indica Strain/ParisOG-370.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Indica Strain",
        "price": 390,
        "name": "XXX OG Kush",
        "id": "x-x-x-o-g-kush",
        "image": "/products/Indica Strain/XXXOGKush-390.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Magic Mushrooms",
        "price": 29,
        "name": "Blue Meanie Mushroom",
        "id": "blue-meanie-mushroom",
        "image": "/products/Magic Mushrooms/BlueMeanieMushroom-29.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Magic Mushrooms",
        "price": 25,
        "name": "Golden Teacher",
        "id": "golden-teacher",
        "image": "/products/Magic Mushrooms/GoldenTeacher-25.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Magic Mushrooms",
        "price": 25,
        "name": "Hawaii",
        "id": "hawaii",
        "image": "/products/Magic Mushrooms/Hawaii-25.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Magic Mushrooms",
        "price": 27,
        "name": "Malabar Coast Mushrooms",
        "id": "malabar-coast-mushrooms",
        "image": "/products/Magic Mushrooms/MalabarCoastMushrooms-27.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Magic Mushrooms",
        "price": 20,
        "name": "Penis Envy",
        "id": "penis-envy",
        "image": "/products/Magic Mushrooms/PenisEnvy-20.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Magic Mushrooms",
        "price": 24,
        "name": "Pink Buffalo Mushroom",
        "id": "pink-buffalo-mushroom",
        "image": "/products/Magic Mushrooms/PinkBuffaloMushroom-24.png"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 250,
        "name": "250 UG Acid Tabs",
        "id": "250-u-g-acid-tabs",
        "image": "/products/Pills/250UGAcidTabs-250.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 250,
        "name": "Antenex5mg",
        "id": "antenex5mg",
        "image": "/products/Pills/Antenex5mg-250.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 200,
        "name": "Charlie-Coke",
        "id": "charlie-coke",
        "image": "/products/Pills/Charlie-Coke-200.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 350,
        "name": "Dexies",
        "id": "dexies",
        "image": "/products/Pills/Dexies-350.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 200,
        "name": "Duromine 37.5mg",
        "id": "duromine37-5mg",
        "image": "/products/Pills/Duromine37.5mg-200.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 15,
        "name": "Ecstasy Pills",
        "id": "ecstasy-pills",
        "image": "/products/Pills/EcstasyPills-15.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 250,
        "name": "Kalma Xanax",
        "id": "kalma-xanax",
        "image": "/products/Pills/KalmaXanax-250.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 150,
        "name": "MDMA",
        "id": "m-d-m-a",
        "image": "/products/Pills/MDMA-150.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 600,
        "name": "Oxycodone 30mg",
        "id": "oxycodone30mg",
        "image": "/products/Pills/Oxycodone30mg-600.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 350,
        "name": "Shard-Gear",
        "id": "shard-gear",
        "image": "/products/Pills/Shard-Gear-350.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 250,
        "name": "Tramadol",
        "id": "tramadol",
        "image": "/products/Pills/Tramadol-250.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 250,
        "name": "Xanax - Alprazolam",
        "id": "xanax-alprazolam",
        "image": "/products/Pills/Xanax-Alprazolam-250.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Pills",
        "price": 300,
        "name": "Caps",
        "id": "caps",
        "image": "/products/Pills/caps-300.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Prerolls",
        "originalPrice": 20,
        "price": 15,
        "name": "Authentic Packarillos",
        "id": "authentic-packarillos-from",
        "image": "/products/Prerolls/AuthenticPackarillos-from-20-15.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Prerolls",
        "originalPrice": 15,
        "price": 12,
        "name": "Dankwoods",
        "id": "dankwoods-from",
        "image": "/products/Prerolls/Dankwoods-from-15-12.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Prerolls",
        "originalPrice": 14,
        "price": 13,
        "name": "Snowcap Prerolls",
        "id": "snowcap-prerolls-from",
        "image": "/products/Prerolls/SnowcapPrerolls-from-14-13.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 3000,
        "name": "Banana Runtz",
        "priceRange": "$250.00-$3,000.00",
        "id": "banana-runtz-250",
        "image": "/products/Runtz/BananaRuntz-250-3000.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 300,
        "name": "Black Cherry Gelato",
        "priceRange": "$250.00-$300.00",
        "id": "black-cherry-gelato-250",
        "image": "/products/Runtz/BlackCherryGelato-250-300.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "originalPrice": 160,
        "price": 150,
        "name": "Blue Cherry Guava",
        "id": "blue-cherry-guava-from",
        "image": "/products/Runtz/BlueCherryGuava-from-160-150.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 2300,
        "name": "Gruntz",
        "priceRange": "$250.00-$2,300.00",
        "id": "gruntz-250",
        "image": "/products/Runtz/Gruntz-250-2300.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 430,
        "name": "Peach Kobbler Runtz",
        "id": "peach-kobbler-runtz",
        "image": "/products/Runtz/PeachKobblerRuntz-430.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 2500,
        "name": "Pink Runtz",
        "priceRange": "$250.00-$2,500.00",
        "id": "pink-runtz-250",
        "image": "/products/Runtz/PinkRuntz-250-2500.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 2500,
        "name": "Runtz",
        "priceRange": "$250.00-$2,500.00",
        "id": "runtz-250",
        "image": "/products/Runtz/Runtz-250-2500.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 1000,
        "name": "Runtz Smalls",
        "id": "runtz-smalls",
        "image": "/products/Runtz/RuntzSmalls-1000.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 400,
        "name": "Sharklato Runtz",
        "id": "sharklato-runtz",
        "image": "/products/Runtz/SharklatoRuntz-400.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 400,
        "name": "Vlone Runtz",
        "id": "vlone-runtz",
        "image": "/products/Runtz/VloneRuntz-400.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 2300,
        "name": "White Runtz Online",
        "priceRange": "$250.00-$2,300.00",
        "id": "white-runtz-online-250",
        "image": "/products/Runtz/WhiteRuntzOnline-250-2300.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Runtz",
        "price": 2300,
        "name": "Zourz Runtz",
        "priceRange": "$250.00-$2,300.00",
        "id": "zourz-runtz-250",
        "image": "/products/Runtz/ZourzRuntz-250-2300.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Sativa Strain",
        "price": 400,
        "name": "Bruce Banner",
        "id": "bruce-banner",
        "image": "/products/Sativa Strain/BruceBanner-400.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Sativa Strain",
        "price": 400,
        "name": "Durban Poison",
        "id": "durban-poison",
        "image": "/products/Sativa Strain/DurbanPoison-400.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Sativa Strain",
        "price": 380,
        "name": "Girl Scout Cookies",
        "id": "girl-scount-cookies",
        "image": "/products/Sativa Strain/GirlScountCookies-380.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Sativa Strain",
        "price": 130,
        "name": "Harlequin",
        "id": "harlequin",
        "image": "/products/Sativa Strain/Harlequin-130.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Sativa Strain",
        "price": 380,
        "name": "Super Sour Diesel",
        "id": "super-sour-diesel",
        "image": "/products/Sativa Strain/SuperSourDiesel-380.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Vape Pens",
        "price": 300,
        "name": "Arizer Air II Vaporizer",
        "id": "arizer-air-i-i-vaporizer",
        "image": "/products/Vape Pens/ArizerAirIIVaporizer-300.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Vape Pens",
        "price": 300,
        "name": "Arizer Air Vaporizer",
        "id": "arizer-air-vaporizer",
        "image": "/products/Vape Pens/ArizerAirVaporizer-300.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Vape Pens",
        "price": 300,
        "name": "Arizer Solo II Vaporizer",
        "id": "arizer-solo-i-i-vaporizer",
        "image": "/products/Vape Pens/ArizerSoloIIVaporizer-300.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Vape Pens",
        "price": 450,
        "name": "Davinci I Q2 Vaporizer",
        "id": "davinci-i-q2-vaporizer",
        "image": "/products/Vape Pens/DavinciIQ2Vaporizer-450.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Vape Pens",
        "price": 450,
        "name": "Firefly 2 + Dry Herb Vaporizer",
        "id": "firefly2-dry-herb-vaporizer",
        "image": "/products/Vape Pens/Firefly2+DryHerbVaporizer-450.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Vape Pens",
        "price": 270,
        "name": "Ghost Vapes M V1",
        "id": "ghost-vapes-m-v1",
        "image": "/products/Vape Pens/GhostVapesMV1-270.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Vape Pens",
        "price": 200,
        "name": "Snowwolf Mini100 WTC Starter",
        "id": "snowwolf-mini100-w-t-c-starter",
        "image": "/products/Vape Pens/SnowwolfMini100WTCStarter-200.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Vape Pens",
        "price": 980,
        "name": "Volcano Hybrid Vaporizer",
        "id": "volcano-hybrid-vaporizer",
        "image": "/products/Vape Pens/VolcanoHybridVaporizer-980.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 1000,
        "name": "Afghan Black Hash",
        "priceRange": "$280.00-$1,000.00",
        "id": "afghan-black-hash-280",
        "image": "/products/Wax/AfghanBlackHash-280-1000.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 50,
        "name": "Berry White Wax",
        "id": "berry-white-wax",
        "image": "/products/Wax/BerryWhiteWax-50.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 70,
        "name": "Chill Plus Delta-8 THC",
        "id": "chill-plus-delta-8-t-h-c",
        "image": "/products/Wax/ChillPlusDelta-8THC-70.webp"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 720,
        "name": "Dabs Wax",
        "id": "dabs-wax-250",
        "image": "/products/Wax/DabsWax-250-720.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 1000,
        "name": "Iso Hash | Qwiso",
        "priceRange": "$250.00-$1,000.00",
        "id": "iso-hash-qwiso-250",
        "image": "/products/Wax/IsoHash|Qwiso-250-1000.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 850,
        "name": "Kandy Kush Wax",
        "priceRange": "$250.00-$850.00",
        "id": "kandy-kush-wax-medicinal-250",
        "image": "/products/Wax/KandyKushWax-Medicinal-250-850.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 850,
        "name": "Kosher Tangie C O2 Wax",
        "priceRange": "$250.00-$850.00",
        "id": "kosher-tangie-c-o2-wax-250",
        "image": "/products/Wax/KosherTangieCO2Wax-250-850.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 50,
        "name": "Lemon Cheesecake Wax",
        "id": "lemon-cheesecake-wax",
        "image": "/products/Wax/LemonCheesecakeWax-50.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 750,
        "name": "Lemon Walker O G Wax",
        "priceRange": "$250.00-$750.00",
        "id": "lemon-walker-o-g-wax-250",
        "image": "/products/Wax/LemonWalkerOGWax-250-750.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 900,
        "name": "Moroccan Caramello",
        "priceRange": "$210.00-$900.00",
        "id": "moroccan-caramello-210",
        "image": "/products/Wax/MoroccanCaramello-210-900.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 900,
        "name": "Moroccan Hash",
        "priceRange": "$240.00-$900.00",
        "id": "moroccan-hash-240",
        "image": "/products/Wax/MoroccanHash-240-900.jpeg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 850,
        "name": "Strawberry Lemonade Wax",
        "priceRange": "$200.00-$850.00",
        "id": "strawberry-lemonade-wax-200",
        "image": "/products/Wax/StrawberryLemonadeWax-200-850.jpg"
    },
    {
        "inStock": true,
        "description": "",
        "category": "Wax",
        "price": 720,
        "name": "Wax",
        "priceRange": "$210.00-$720.00",
        "id": "wax-210",
        "image": "/products/Wax/Wax-210-720.jpg"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsListing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$FloatingCartButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/FloatingCartButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$Cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/Cart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ProductsPage({ isVerified, onVerify }) {
    _s();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const categories = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "Edibles",
            value: "edibles"
        },
        {
            label: "Cookies Melrose",
            value: "cookies-melrose"
        },
        {
            label: "Cartridges",
            value: "cartridges"
        },
        {
            label: "Vape Pens",
            value: "vape-pens"
        },
        {
            label: "CBD Gummies",
            value: "cbd-gummies"
        },
        {
            label: "CBD Oil",
            value: "cbd-oil"
        },
        {
            label: "Concentrates",
            value: "concentrates"
        },
        {
            label: "Magic Mushrooms",
            value: "magic-mushrooms"
        },
        {
            label: "Pills",
            value: "pills"
        },
        {
            label: "Prerolls",
            value: "prerolls"
        },
        {
            label: "Hash",
            value: "hash"
        },
        {
            label: "Delta 8 Cartridges",
            value: "delta-8-cartridges"
        },
        {
            label: "Delta 8 Disposable Carts",
            value: "delta-8-disposable-carts"
        },
        {
            label: "Crumble",
            value: "crumble"
        },
        {
            label: "Cannabis Seeds",
            value: "cannabis-seeds"
        },
        {
            label: "Dried Psilocybin Mushrooms",
            value: "dried-psilocybin-mushrooms"
        },
        {
            label: "Hybrid",
            value: "hybrid"
        },
        {
            label: "Indica Strain",
            value: "indica-strain"
        },
        {
            label: "Runtz",
            value: "runtz"
        },
        {
            label: "Sativa Strain",
            value: "sativa-strain"
        },
        {
            label: "Wax",
            value: "wax"
        }
    ];
    const filteredProducts = filter === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen pt-24 bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-bold text-center mb-12 tracking-widest",
                            children: "STORE"
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-4 mb-14 flex-wrap",
                            children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `px-5 py-2 uppercase tracking-wide border transition-all ${filter === cat.label ? "bg-white text-black border-white" : "border-gray-500 text-gray-300 hover:bg-white hover:text-black"}`,
                                    onClick: ()=>setFilter(cat.label),
                                    children: cat.label
                                }, cat.value, false, {
                                    fileName: "[project]/src/app/products/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14",
                            children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-square overflow-hidden rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: product.image,
                                                alt: product.name,
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mt-4 font-semibold uppercase tracking-wide text-center text-[15px]",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-gray-400 mt-1",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-col gap-[16px] items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center mt-3 text-white  font-bold",
                                                    children: [
                                                        "$",
                                                        product.price.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>addToCart({
                                                            id: product.id,
                                                            name: product.name,
                                                            price: product.price,
                                                            image: product.image
                                                        }),
                                                    className: "bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
                                                    children: "Add to Bag"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/products/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/src/app/products/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/products/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$FloatingCartButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$Cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ProductsPage, "jBwV/EoutzpggTi9pE//+08j0xM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductsPage;
function ProductsListing() {
    _s1();
    const [isVerified, setIsVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductsPage, {
            isVerified: isVerified,
            onVerify: ()=>setIsVerified(true)
        }, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s1(ProductsListing, "2C7pNd1FuWz8xViaqz/CMtUnXAE=");
_c1 = ProductsListing;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductsPage");
__turbopack_context__.k.register(_c1, "ProductsListing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bb4d7820._.js.map