import React,{useContext, useEffect} from 'react';
import { CartContext } from '../context/cartContext';



function BtnCart ({item,cant}){

    const cart = useContext(CartContext);


    function addToCart(){
       cart.add(item,cant);
    }
    

  
    return  <button  onClick={addToCart} class="text-center btn btn-outline-pink btn-sm">
                    <p class="m-1">Añadir {cant}</p>
                </button>
    
}

export default BtnCart;