import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('unique_culture_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('unique_culture_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity, size) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(
                item => item.id === product.id && item.size === size
            );

            if (existingItemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += quantity;
                return updatedItems;
            }

            return [...prevItems, { ...product, quantity, size }];
        });
    };

    const removeFromCart = (id, size) => {
        setCartItems(prevItems => prevItems.filter(item => !(item.id === id && item.size === size)));
    };

    const updateQuantity = (id, size, quantity) => {
        if (quantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.size === size ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    const cartSubtotal = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + price * item.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart, 
            updateQuantity, 
            clearCart, 
            cartCount,
            cartSubtotal
        }}>
            {children}
        </CartContext.Provider>
    );
};
