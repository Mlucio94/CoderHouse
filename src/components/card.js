import React, { useEffect, useState } from 'react';
import ItemDetailContainer from './itemDetailContainer';

// const getItem = () =>{
        
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res( [{id,image,prodName,prodDesc,price,stock}]
                
//             );
//         },2000)
    
//     });
// }


function Card({id,image,prodName,prodDesc,price,stock}){
    // const [item,setItem]=useState(null);

    // useEffect(()=>{
    //     console.log('iniciando conteiner');
    //     getItem().then(item=>{
    //         setItem(item);
    //     })
    // })  
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
                        <button type="button" class="btn btn-outline-pink" data-toggle="modal" data-target="#exampleModal">
                        DETALLE
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <ItemDetailContainer ></ItemDetailContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Card;