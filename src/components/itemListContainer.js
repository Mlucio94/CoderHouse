import React, { useEffect, useState } from 'react';
import Card from './card';

const getItems = () =>{
        
    return new Promise((res,rej)=>{
        setTimeout(()=>{
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
        },2000)
    
    });
}

function ItemListContainer({Title}){
    const [items,setItems]=useState(null);

    useEffect(()=>{
        console.log('iniciando conteiner');
        getItems().then(items=>{
            setItems(items);
        })
    },[])  
    return <>
        <div class="container-md mt-4 mb-4">
            <h2>{Title}</h2>
            

                <div class="row row-cols-1 row-cols-md-2 mt-4 ">
                
                    {items && items.map(item => <Card item={item}/>)}
                </div>

            
       </div>
    </>

}



export default ItemListContainer;