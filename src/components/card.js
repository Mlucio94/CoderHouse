import React from 'react';
import ItemCount from './itemCount';


function Card({id,image,prodName,prodDesc,price,stock}){
    return <>
        <div class="card col-md-3">
           
            <img src={image} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{prodName}</h5>
            <p class="card-text">{prodDesc}</p>
            </div>
            <div class="card-footer containter">
                <div class="row justify-content-between">
                    <h3 class="float-left  text-center text-info col-md">{price}</h3>
                    <div class="col-md">
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

export default Card;