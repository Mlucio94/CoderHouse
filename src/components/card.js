import React from 'react';
import ItemCount from './itemCount';


function Card({image,CardTitle}){
    return <>
        <div class="card ">
            <img src="https://http2.mlstatic.com/D_NQ_NP_734011-MLA43411448205_092020-O.webp" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer containter">
                <div class="row justify-content-between">
                    <h3 class="float-left  text-center text-info col-md">$ 999</h3>
                    <div class="col-md">
                     <ItemCount
                        stock={10}
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