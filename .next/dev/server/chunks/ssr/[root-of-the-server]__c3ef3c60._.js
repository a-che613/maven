module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/firebase/config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Firebase App (the core Firebase SDK) is always required and must be listed first
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
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
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const __TURBOPACK__default__export__ = app;
}),
"[project]/src/contexts/CartContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Load cart from localStorage on initial render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                // Ensure we have valid cart items
                if (Array.isArray(parsedCart) && parsedCart.every((item)=>item && typeof item.id === 'string' && typeof item.name === 'string' && typeof item.price === 'number' && typeof item.image === 'string' && typeof item.quantity === 'number')) {
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
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(auth, (user)=>{
            setCurrentUser(user);
        });
        return ()=>unsubscribe();
    }, []);
    // Save cart to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            if (cart.length > 0) {
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                localStorage.removeItem('cart');
            }
        } catch (error) {
            console.error('Error saving cart to localStorage:', error);
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart,
            addToCart,
            updateQuantity,
            removeFromCart,
            isCartOpen,
            toggleCart,
            cartCount,
            totalPrice,
            currentUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/CartContext.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
const useCart = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
}),
"[project]/src/components/cart/FloatingCartButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function FloatingCartButton() {
    const { cartCount, toggleCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-8 right-8 z-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: toggleCart,
            className: "bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors relative",
            "aria-label": "Open cart",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/FloatingCartButton.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/app/products/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$FloatingCartButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/FloatingCartButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ProductsPage() {
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const products = [
        // -----------------------------
        // 🌿 FLOWER (10 items)
        // -----------------------------
        {
            id: "f1",
            name: "French Lotus",
            category: "flower",
            price: 250,
            image: "https://images.unsplash.com/photo-1509223197845-458d87318791",
            description: "A classic indica strain with earthy pine aromas."
        },
        {
            id: "f2",
            name: "Silver Mist",
            category: "flower",
            price: 220,
            image: "https://images.unsplash.com/photo-1601352209330-6393a89b8c32",
            description: "Balanced hybrid with cool citrus undertones."
        },
        {
            id: "f3",
            name: "Emerald Dream",
            category: "flower",
            price: 280,
            image: "https://images.unsplash.com/photo-1601352209208-06dfd7a3a5c0",
            description: "Energetic sativa for daytime focus."
        },
        {
            id: "f4",
            name: "Berry Kush",
            category: "flower",
            price: 260,
            image: "https://images.unsplash.com/photo-1580428180132-ebd918f7b5c8",
            description: "Sweet berry aroma with deep relaxing effects."
        },
        {
            id: "f5",
            name: "Lemon Burst",
            category: "flower",
            price: 240,
            image: "https://images.unsplash.com/photo-1601352209323-dbbebfa36524",
            description: "Bright citrus-forward sativa strain."
        },
        {
            id: "f6",
            name: "Purple Nova",
            category: "flower",
            price: 300,
            image: "https://images.unsplash.com/photo-1617664106429-7351826d4587",
            description: "Heavy indica with grape and lavender notes."
        },
        {
            id: "f7",
            name: "Sunset Haze",
            category: "flower",
            price: 270,
            image: "https://images.unsplash.com/photo-1601352209332-3eac7b1f47b9",
            description: "Smooth hybrid with hazy tropical aroma."
        },
        {
            id: "f8",
            name: "Desert Flame",
            category: "flower",
            price: 255,
            image: "https://images.unsplash.com/photo-1580428180142-4f393ce0df54",
            description: "Fiery orange hairs with uplifting effects."
        },
        {
            id: "f9",
            name: "Ocean Breeze",
            category: "flower",
            price: 230,
            image: "https://images.unsplash.com/photo-1601352209331-7eb98ae035a6",
            description: "Relaxing hybrid with cool mint aroma."
        },
        {
            id: "f10",
            name: "Nightshade OG",
            category: "flower",
            price: 310,
            image: "https://images.unsplash.com/photo-1617664106259-cab361bb40f6",
            description: "Potent OG with earthy skunk profile."
        },
        // -----------------------------
        // 🚬 PRE-ROLLS (10 items)
        // -----------------------------
        {
            id: "11",
            name: "Goldie Mini",
            category: "pre-rolls",
            price: 150.0,
            image: "https://images.unsplash.com/photo-1557821552-17105176677c",
            description: "Smooth burn pre-roll packed with premium indoor flower."
        },
        {
            id: "12",
            name: "Night Cap Roll",
            category: "pre-rolls",
            price: 180.0,
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
            description: "Indica-leaning pre-roll perfect for relaxation."
        },
        {
            id: "13",
            name: "Citrus Spark Roll",
            category: "pre-rolls",
            price: 160.0,
            image: "https://images.unsplash.com/photo-1580041065738-e72023775cdc",
            description: "Light citrus aroma with a smooth smoke."
        },
        {
            id: "14",
            name: "Midnight Jet",
            category: "pre-rolls",
            price: 170.0,
            image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
            description: "Fast-hitting indica for nighttime wind-down."
        },
        {
            id: "15",
            name: "Island Breeze Roll",
            category: "pre-rolls",
            price: 190.0,
            image: "https://images.unsplash.com/photo-1581091870634-44c1f1d80b4c",
            description: "Tropical-scented roll ideal for chill sessions."
        },
        {
            id: "16",
            name: "Velvet Rush Pre-Roll",
            category: "pre-rolls",
            price: 165.0,
            image: "https://images.unsplash.com/photo-1551970634-747846a548cb",
            description: "Hybrid blend offering a balanced uplift."
        },
        {
            id: "17",
            name: "Sunset Twist",
            category: "pre-rolls",
            price: 175.0,
            image: "https://images.unsplash.com/photo-1581092334482-0a2962f714c6",
            description: "Relaxing evening pre-roll with sweet undertones."
        },
        {
            id: "18",
            name: "Green Thunder Roll",
            category: "pre-rolls",
            price: 150.0,
            image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab",
            description: "Powerful hybrid delivering consistent smooth hits."
        },
        {
            id: "19",
            name: "Berry Smooth Pre-Roll",
            category: "pre-rolls",
            price: 185.0,
            image: "https://images.unsplash.com/photo-1585338106594-15a7a9a6c5da",
            description: "Sweet berry aroma with calming effects."
        },
        {
            id: "20",
            name: "Classic Heritage Roll",
            category: "pre-rolls",
            price: 160.0,
            image: "https://images.unsplash.com/photo-1580041065738-e72023775cdc",
            description: "Rich earthy profile crafted with premium strains."
        },
        // -----------------------------
        // 🧪 CONCENTRATES (10 items)
        // -----------------------------
        {
            id: "21",
            name: "Amber Wax",
            category: "concentrates",
            price: 300.0,
            image: "https://images.unsplash.com/photo-1582457129062-2b06f2b0f5fc",
            description: "Golden crumble concentrate with high potency."
        },
        {
            id: "22",
            name: "Crystal Shatter",
            category: "concentrates",
            price: 320.0,
            image: "https://images.unsplash.com/photo-1591190045494-8da3a726dca8",
            description: "Stable glass-like shatter extracted with purity."
        },
        {
            id: "23",
            name: "Diamond Sauce",
            category: "concentrates",
            price: 350.0,
            image: "https://images.unsplash.com/photo-1611095973518-ae8e675985d8",
            description: "Terpene-rich sauce with high cannabinoid crystals."
        },
        {
            id: "24",
            name: "Golden Resin",
            category: "concentrates",
            price: 310.0,
            image: "https://images.unsplash.com/photo-1600054801371-78a53cc967ad",
            description: "Smooth resin with strong flavor and aroma."
        },
        {
            id: "25",
            name: "Velvet Crumble",
            category: "concentrates",
            price: 330.0,
            image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff",
            description: "Soft crumble concentrate with silky texture."
        },
        {
            id: "26",
            name: "Pure Extract Shatter",
            category: "concentrates",
            price: 340.0,
            image: "https://images.unsplash.com/photo-1581091012184-5c48fdc9ce8b",
            description: "Clean and potent shatter for experienced users."
        },
        {
            id: "27",
            name: "Terp Crystal Melt",
            category: "concentrates",
            price: 360.0,
            image: "https://images.unsplash.com/photo-1581092000180-cd6ac4199c8a",
            description: "High terpene extract offering bold flavor."
        },
        {
            id: "28",
            name: "Sunset Live Resin",
            category: "concentrates",
            price: 355.0,
            image: "https://images.unsplash.com/photo-1581091870628-148fe0dd8967",
            description: "Live resin crafted from fresh frozen flower."
        },
        {
            id: "29",
            name: "Gold Flake Extract",
            category: "concentrates",
            price: 345.0,
            image: "https://images.unsplash.com/photo-1611095567659-e3e2f47d38fb",
            description: "Golden extract with premium refinement."
        },
        {
            id: "30",
            name: "Fire Shatter",
            category: "concentrates",
            price: 370.0,
            image: "https://images.unsplash.com/photo-1600054800440-917d18c32dc6",
            description: "High-potency shatter with a fiery aroma."
        },
        // -----------------------------
        // 💨 VAPES (10 items)
        // -----------------------------
        {
            id: "31",
            name: "Alchemy Pineapple Vape",
            category: "vapes",
            price: 350.0,
            image: "https://images.unsplash.com/photo-1559440160-1a97f2c465c1",
            description: "Tropical fruit flavored vape with smooth airflow."
        },
        {
            id: "32",
            name: "Mint Breeze Disposable",
            category: "vapes",
            price: 300.0,
            image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c",
            description: "Refreshing mint disposable pen for daily use."
        },
        {
            id: "33",
            name: "Citrus Burst Vape",
            category: "vapes",
            price: 320.0,
            image: "https://images.unsplash.com/photo-1585238341832-962ec2e4b1e0",
            description: "Fresh citrus blend with uplifting effects."
        },
        {
            id: "34",
            name: "Berry Frost Cartridge",
            category: "vapes",
            price: 315.0,
            image: "https://images.unsplash.com/photo-1626285242781-e73e0e890dff",
            description: "Cool berry flavor with refreshing exhale."
        },
        {
            id: "35",
            name: "Vanilla Cloud Vape",
            category: "vapes",
            price: 340.0,
            image: "https://images.unsplash.com/photo-1585238341869-e5baf5120fc8",
            description: "Sweet vanilla profile with creamy finish."
        },
        {
            id: "36",
            name: "Arctic Storm Disposable",
            category: "vapes",
            price: 325.0,
            image: "https://images.unsplash.com/photo-1573140247393-b8d87734feaf",
            description: "Chilled mint vape with smooth draw."
        },
        {
            id: "37",
            name: "Cosmic Peach Vape",
            category: "vapes",
            price: 330.0,
            image: "https://images.unsplash.com/photo-1554063015-0edce4e9b35c",
            description: "Peach-forward blend with soft sweetness."
        },
        {
            id: "38",
            name: "Lemon Rush Pen",
            category: "vapes",
            price: 310.0,
            image: "https://images.unsplash.com/photo-1585238342079-299d002b4c29",
            description: "Bright lemon terpene blend for daytime vibes."
        },
        {
            id: "39",
            name: "Deep Night Indica Vape",
            category: "vapes",
            price: 360.0,
            image: "https://images.unsplash.com/photo-1554063018-ac13596f87c7",
            description: "Heavy indica vape designed for deep relaxation."
        },
        {
            id: "40",
            name: "Tropical Heat Cartridge",
            category: "vapes",
            price: 335.0,
            image: "https://images.unsplash.com/photo-1554063015-382d9fcee543",
            description: "Warm tropical blend with smooth pulls."
        }
    ];
    const categories = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "Flower",
            value: "flower"
        },
        {
            label: "Pre-Rolls",
            value: "pre-rolls"
        },
        {
            label: "Concentrates",
            value: "concentrates"
        },
        {
            label: "Vapes",
            value: "vapes"
        }
    ];
    const filteredProducts = filter === "all" ? products : products.filter((p)=>p.category === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen pt-24 bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-bold text-center mb-12 tracking-widest",
                            children: "STORE"
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-4 mb-14 flex-wrap",
                            children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `px-5 py-2 uppercase tracking-wide border transition-all ${filter === cat.value ? "bg-white text-black border-white" : "border-gray-500 text-gray-300 hover:bg-white hover:text-black"}`,
                                    onClick: ()=>setFilter(cat.value),
                                    children: cat.label
                                }, cat.value, false, {
                                    fileName: "[project]/src/app/products/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14",
                            children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mt-4 text-xl font-semibold uppercase tracking-wide text-center",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-gray-400 mt-1",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center mt-3 text-white text-lg font-bold",
                                                    children: [
                                                        "$",
                                                        product.price.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    lineNumber: 413,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/products/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/src/app/products/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/products/page.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$FloatingCartButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Cart, {}, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 433,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 364,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c3ef3c60._.js.map