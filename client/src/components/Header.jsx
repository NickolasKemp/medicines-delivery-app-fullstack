import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='header' >
            <Link to='/' >Shop</Link>
            <Link to='/shopping-cart' >Shopping Cart</Link>
        </div>
    );
};

export default Header;