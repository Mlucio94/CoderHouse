import React, {useContext}from 'react';
import Cart from './cart';
import { CartContext } from '../context/cartContext';



function CartItem({item}){
    const cart = useContext(CartContext);

    function removeElement(){
        cart.remove(item.id);
    }
    return <>
         <tr>
            <th scope="row">1</th>
            <td>{item.name}</td>
            <td>{item.cant}</td>
            <td>${item.monto}</td>
            <td> 
                <button className="btn btn-outline-pink my-2 my-sm-0 m-1" type="submit" onClick={removeElement}> Remove </button>
            </td>
        </tr>
    </>
}

export default CartItem;