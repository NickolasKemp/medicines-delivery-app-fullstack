import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from "../components/Item";
import ShoppingCartItem from "../components/ShoppingCartItem";
import {Form, useActionData} from "react-router-dom";
import {CreateOrder} from "../http/medicineAPI";

export async function action( {request} ) {
    const formData = await request.formData()
    const email = formData.get('email')
    const name = formData.get('name')
    const phone = formData.get('phone')
    const address = formData.get('address')
    const order = {name, email, phone, address}
    //add to order full price, item * quantity
     if(name && email && phone && address) {
         CreateOrder(order).then(data => {
             console.log(data)
             clearForm()
         })
     }

    return order
}

const clearForm = () => {
    document.querySelectorAll('input').forEach(input => input.value = '');
};

const ShoppingCart = () => {
    const {cartItems, setCartItems, cartItemCounts , getTotalPrice} = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(getTotalPrice())

    useEffect(() => {
        setTotalPrice(getTotalPrice())
    }, [cartItemCounts, cartItems]);

    let formData = useActionData()

    return (
        <div className='shopping-cart'>
            <div className='shopping-cart__form'>
                <Form method='post'>
                    <input
                        type="text"
                        placeholder='name'
                        name='name'
                    />
                    <input
                        type="email"
                        placeholder='email'
                        name='email'
                    />
                    <input
                        type="tel"
                        placeholder='phone'
                        name='phone'
                    />
                    <input
                        type="text"
                        placeholder='address'
                        name='address'
                    />
                    <button className='button'>Submit</button>
                </Form>
            </div>
            <div className='shopping-cart__cart '>
                {
                    cartItems.map(item => (
                        <ShoppingCartItem
                            item={item}
                        />

                    ))
                }
                <div className='shopping-cart__total-price'>
                    <div>Total price: {totalPrice}$</div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;