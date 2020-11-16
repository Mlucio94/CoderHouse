import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';

const getItem = () =>{
        
    return new Promise((res,rej)=>{
            res(
                
                    {   id:0,
                        image:"https://http2.mlstatic.com/D_NQ_NP_749088-MLA43301556023_082020-O.webp",
                        prodName:"Producto 1",
                        prodDescExt:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
                        price:999,
                        stock:20
                    }
                  
            );
        
    
    });
}

function ItemDetailContainer(){
    const [item,setItem]=useState(null);
    const { id } = useParams();

    useEffect(()=>{
        console.log('iniciando detalle con id', id);
        getItem().then(item=>{
            setItem(item);
        })
    },[id]); 
    
    return <>
         {item && <ItemDetail item={item}/>}
    </>

}

export default ItemDetailContainer;