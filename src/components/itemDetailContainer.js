import React, { useEffect, useState } from 'react';
import ItemCount from './itemCount';


function ItemDetailContainer({id,image,prodName,prodDesc,price,stock}){
    
    return <>
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-nav">
                    <h5 class="modal-title">{prodName}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    
                    <div class="row justify-content-between">
                    <img src={image} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
                    <p>{prodDesc}</p>
                    
                    <div class="col-md">
                    <h3 class="float-left  text-center text-info col-md">{price}</h3>
                    
                    </div>
                </div>
                <div class="modal-footer">
                    <ItemCount
                        stock={stock}
                        initial={0}
                        onAdd={cant => alert(`Agregados al carrito: ${cant}`)}
                     /> 
                </div>
                </div>
               </div>
           </div>
    </>

}



export default ItemDetailContainer;