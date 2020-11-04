import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';

const getItem = () =>{
        
    return new Promise((res,rej)=>{
            res(
                [
                    {   id:0,
                        image:"https://http2.mlstatic.com/D_NQ_NP_749088-MLA43301556023_082020-O.webp",
                        prodName:"Producto 1",
                        prodDesc:"Este es el primer producto",
                        price:"$999",
                        stock:20
                    },
                    {   id:1,
                        image:"https://http2.mlstatic.com/D_NQ_NP_749088-MLA43301556023_082020-O.webp",
                        prodName:"Producto 2",
                        prodDesc:"Este es el segundo producto",
                        price:"$995",
                        stock:20,
                    },
                    {   id:2,
                        image:"https://http2.mlstatic.com/D_NQ_NP_749088-MLA43301556023_082020-O.webp",
                        prodName:"Producto 3",
                        prodDesc:"Este es el tercer producto",
                        price:"$999",
                        stock:20
                    },
                    {   id:3,
                        image:"https://http2.mlstatic.com/D_NQ_NP_749088-MLA43301556023_082020-O.webp",
                        prodName:"Producto 4",
                        prodDesc:"Este es el cuarto producto",
                        price:"$99",
                        stock:20
                    },
                    {   id:4,
                        image:"https://http2.mlstatic.com/D_NQ_NP_749088-MLA43301556023_082020-O.webp",
                        prodName:"Producto 5",
                        prodDesc:"Este es el quinto producto",
                        price:"$999",
                        stock:20
                    },
                ]
            );
        
    
    });
}

function ItemDetailContainer(){
    const [item,setItem]=useState(null);
    const { id } = useParams();

    useEffect(()=>{
        console.log('iniciando detalle con id', id);
        getItem(id).then(item=>{
            setItem(item);
        })
    },[id]); 
    
    return <>
         {item && <ItemDetail item={item}/>}
    </>

}

export default ItemDetailContainer;