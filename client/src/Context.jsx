import React from 'react';
import {CartContext} from "./components/Item";
import {useState} from "react";
import App from "./App";
import {data} from "./Data";
const Context = () => {

    const [cartItems, setCartItems] = useState([])
    const [stores, setStores] = useState([])
    const [storeId, setStoreId] = useState({})
    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < data.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    };
    const [cartItemCounts, setCartItemCounts] = useState(getDefaultCart())


    function addToCart(item) {
        setCartItems(prev => [...prev, item])
        setCartItemCounts(prev=> ( { ...prev, [item.id]: 1 } ))
    }

    function removeFromCart(id) {
        setCartItems(prev => prev.filter(prevItem => prevItem.id !== id))
        setCartItemCounts(prev=> ( { ...prev, [id]: 0 } ))
    }

    function increaseCount(id) {
        if(cartItemCounts[id] >= 1) {
            setCartItemCounts(prev => ({...prev, [id]: prev[id] + 1}))
        }
    }

    function decreaseCount(id) {
        if(cartItemCounts[id]  > 1) {
            setCartItemCounts(prev => ({...prev, [id]: prev[id] - 1}))
        }
    }

    function getTotalPrice() {
        let totalPrice = 0
        for (let i = 0; i < cartItems.length; i++) {
            const id = cartItems[i].id
            const price = cartItems[i].price
            totalPrice = totalPrice + price * +cartItemCounts[id]

        }
        return totalPrice
    }

    return (
        <CartContext.Provider value={{cartItems, setCartItems,
            addToCart, decreaseCount, increaseCount, cartItemCounts,
            getTotalPrice, removeFromCart, stores, setStores, storeId,
            setStoreId }}>
            <App/>
        </CartContext.Provider>
        );
};

export default Context;