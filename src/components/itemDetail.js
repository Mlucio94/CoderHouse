import React from 'react';
import ItemCount from './itemCount';


function ItemDetail({item}){



    return <>
        <div className="container-md mt-4">
           <div class="card text-center">
                <div class="card-header">
                    <h5 class="card-title">{item.prodName}</h5>
                </div>
                <div class="card-body">
                    
                    <img src={item.image} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
                    <p class="card-text">{item.prodDescExt}</p>
                    <p class="card-text">{item.price}</p>
                </div>
                <div class="card-footer text-muted">
                    <ItemCount
                        stock={item.stock}
                        initial={0}
                        onAdd={cant => alert(`Agregados al carrito: ${cant}`)}
                     /> 
                </div>
            </div> 
        </div>
    </>
}

export default ItemDetail;