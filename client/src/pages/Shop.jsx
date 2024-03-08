import React, {useContext, useEffect, useState} from 'react';
import {data as dataItems} from "../Data";
import Item, {CartContext} from "../components/Item";
import {fetchAllMedicines, fetchStores} from "../http/medicineAPI";
import StoreBar from "../components/StoreBar";

const Shop = () => {
    const {stores, setStores,  storeId, setStoreId } = useContext(CartContext)

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchStores().then(data => setStores(data))
    }, []);

    useEffect(() => {
        fetchAllMedicines(storeId).then(data => setItems(data))
    }, [storeId]);

    console.log(items)
    console.log(storeId)
    return (
        <div>
            <StoreBar/>
            {

            items.map(item =>
                (
                    <Item item={item} />
                )
            )
        }

        </div>
    );
};

export default Shop;