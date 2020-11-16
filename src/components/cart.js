import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from '../context/cartContext';
import CartItem from './cartItem';

function Cart(){
    const [total,setTotal]= useState(0);
    const cart = useContext(CartContext);

    function clearCart(){
        cart.clear();
    }
  

    return <>
        <div class= "container-md mt-4 mb-4">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">               
                     <button className="btn btn-outline-pink my-2 my-sm-0 m-0 text-white" type="submit" onClick={clearCart}> Remove all</button>
                    </th>
                    </tr>
                </thead> 
                <tbody>
                       {cart.cart.map(item => <CartItem item={item}/>)}
                </tbody>
            </table>
            <div>
                <spam>Total = ${total}</spam>

            </div>

        </div>
    </>
}

export default Cart;