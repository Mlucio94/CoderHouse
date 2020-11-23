import React, { useEffect, useState } from 'react';
import Card from './card';
import { getFirestore } from '../firebase';



function ItemListContainer({Title}){
    const [items,setItems]=useState(null);

    useEffect(()=>{
        console.log('iniciando conteiner');
        const db= getFirestore();
        console.log(db)
        const itemcolletions = db.collection("item");
        console.log(itemcolletions)
        let category;
        if(Title== "item"){
             category = itemcolletions;
             
        } else if(Title == "ofertas" ){
            category = itemcolletions.where('oferta','==',true);
           
        } else {
            category = itemcolletions.where('category','==',Title);
            
        }
        

        category.get().then((querySnapshot)=> {
            if(querySnapshot.size === 0 ){
                console.log('no results');
            };
            setItems(
                querySnapshot.docs.map(doc => ({id: doc.id,...doc.data()}))
            )
        })
        
    },[Title])  
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