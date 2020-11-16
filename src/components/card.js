import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const getDetail = () =>{
        
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res( {
                  id:0,
                    image:"https://http2.mlstatic.com/D_NQ_NP_749088-MLA43301556023_082020-O.webp",
                    prodName:"Producto 1",
                    prodDescExt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat purus et odio ullamcorper molestie. Phasellus finibus risus velit, et ultricies neque ullamcorper laoreet. Nunc fringilla odio bibendum, semper augue gravida, gravida erat. Curabitur imperdiet id ipsum nec blandit. Fusce vitae aliquam mauris, sit amet aliquet ipsum. Orci varius natoque.",
                    price:"$999",
                    stock:20
                } 
            );
        },2000)
    
    });
}


function Card({item}){
    const [detail,setDetail]=useState(null);

    useEffect(()=>{
        console.log('iniciando conteiner');
        getDetail().then(detail=>{
            setDetail(detail);
        })
    },[])  
    return <>
    <div className="col-md-3">
        <div class="card mb-4">
           
            <img src={item.image} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{item.prodName}</h5>
            <p class="card-text">{item.prodDesc}</p>
            </div>
            <div class="card-footer containter">
                <div class="row align-items-center justify-content-between">
                    <h3 class="float-left  text-center text-info col-md-6">{item.price}</h3>
                    <div class="col-md-6">
                       <Link to={`/item/${item.id}`} class="btn btn-outline-pink"> Detalle</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
}

export default Card;