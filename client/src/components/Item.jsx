import React, {createContext, useContext} from 'react';

export const CartContext = createContext(null)

const Item = ( {item}) => {

    const { addToCart, cartItems, increaseCount, removeFromCart } = useContext(CartContext)

    let shoppingCartContainsItem = cartItems.some(shopItem => JSON.stringify(shopItem) === JSON.stringify(item))
    
    return (
        <div className='item' >
            <div className='item__image'>
            </div>
            <div className='item__body'>
                <div className='item__name'>{item.name}</div>
                <div className='item__price' >{item.price}$</div>
            </div>
            <div className='item__button' >
                <button className='button' onClick={ () => !shoppingCartContainsItem ?
                    addToCart(item) :
                    increaseCount(item.id)
                } >add to Cart</button>
            </div>
        </div>
    );
};

export default Item;