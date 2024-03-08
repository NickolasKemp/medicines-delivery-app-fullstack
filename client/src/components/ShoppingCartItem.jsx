import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from "./Item";

const ShoppingCartItem = ( {item} ) => {

    const id = item.id
    const {increaseCount, decreaseCount, cartItemCounts, getTotalPrice, removeFromCart} = useContext(CartContext)
    const quantity =  cartItemCounts[id]
    const [calculatedPrice, setCalculatedPrice] = useState(item.price)
    const [totalPrice, setTotalPrice] = useState(getTotalPrice())

    useEffect(() => {
        setCalculatedPrice( quantity * item.price)
    }, [quantity]);




    return (
        <div>
            <div className='shopping-cart__image'></div>
            <div className='shopping-cart__body'>
                <div className='shopping-cart__name'>{item.name}</div>
                <div className='shopping-cart__price'>{calculatedPrice}$</div>
                <div className='shopping-cart__counter'>
                    <button onClick={() => increaseCount(id)}>+</button>
                    <p>{quantity}</p>
                    <button onClick={() => decreaseCount(id)}>-</button>
                    <button onClick={() => removeFromCart(item.id)}>remove</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartItem;