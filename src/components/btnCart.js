import React,{useContext, useState} from 'react';
import { CartContext } from '../context/cartContext';
import {Link} from 'react-router-dom';



function BtnCart ({item,cant}){
    const [text,setText]=useState("Añadir");

    const cart = useContext(CartContext);
   

    function addToCart(){
       cart.add(item,cant);
       setText(<Link to={'/cart'} >Ir al carrito</Link>)
       
    }
    

  
    return  <button  onClick={addToCart} class="text-center btn btn-outline-pink btn-sm">
                    <p class="m-1">{text}</p>
                </button>
    
}

export default BtnCart;