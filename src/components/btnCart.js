import React,{useState} from 'react';



function BtnCart ({id,cant}){
   
  

    function addToCart(){
       alert(`Añadiste ${cant} elementos del producto ${id}`)
    }
    

  
    return  <button  onClick={addToCart} class="text-center btn btn-outline-pink float-right col-12">
                    <p>Añadir {cant}</p>
                </button>
       
       
 

    
}

export default BtnCart;