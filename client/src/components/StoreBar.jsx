import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {CartContext} from "./Item";
const StoreBar = () => {

    const {stores, setStores,  storeId, setStoreId } = useContext(CartContext)

    function switchToStore(storeId) {
        //fake switch
        setStoreId(storeId+1)
        console.log('switched type')
    }

    return (

        <div className='stores-container'  >
            {stores.map((store, id) =>
            <button onClick={ () => switchToStore(id)} >{store.name}</button>
            )}
        </div>
    );
};

export default StoreBar;