import React, { useState, useEffect, useContext} from 'react';
import BtnCart from './btnCart';
import ItemCount from './itemCount';
import { CartContext } from '../context/cartContext';


function ItemDetail({item}){

    const[cant,setCant]= useState(null);
       

    return <>
        <div className="container-md mt-4">
           <div class="card text-center">
                <div class="card-header">
                    <h5 class="card-title">{item.prodName}</h5>
                </div>
                <div class="card-body container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img src={item.image} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>

                        </div>
                        <div class="col-md-6">
                            <p class="card-text">{item.prodDescExt}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="card-footer text-muted container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <p class="h1 text-info card-text">{item.price}</p>
                        </div>
                        <div class="col-md-6">
                            <ItemCount
                                stock={item.stock}
                                initial={0}
                                onAdd = {valor => setCant(valor)}
                             /> 
                             <BtnCart 
                                id={item.id}
                                cant={cant}
                             ></BtnCart>
                        </div>
                    </div>    
                    
                </div>
            </div> 
        </div>
    </>
}

export default ItemDetail;