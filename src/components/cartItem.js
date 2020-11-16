import React, {useContext}from 'react';
import Cart from './cart';
import { CartContext } from '../context/cartContext';



function CartItem({item}){
    const cart = useContext(CartContext);
    return <>
         <tr>
            <th scope="row">1</th>
            <td>{item.id}</td>
            <td>{item.cant}</td>
            <td>{item.price}</td>
            <td> 
                {/* <button className="btn btn-outline-pink my-2 my-sm-0 m-1" type="submit" onClick={cart.remove(item.id)}> Remove item</button> */}
            </td>
        </tr>
    </>
}

export default CartItem;