import React,{useState} from 'react';



function ItemCount ({stock,initial,onAdd}){
   
    const [counter,setcouter] =useState(initial);

    function add(){
        if(counter<stock){
            setcouter(counter+1);
        }
    }
    function remove(){
        if(counter>initial){
            setcouter(counter-1);
        }
        
    }
    function addCart(){
        if (counter>0){
            onAdd(counter);
        }
    }

    return <>
        <div class="container p-0 ">
            <div class="row justify-content-center">
                <button class=" btn btn-outline-pink float-right col-md-4" onClick={remove} >
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z"/></svg>  
                </button>
                
                <span class="col-md-4  text-center align-self-center">{counter}</span>
            
                <button class=" btn btn-outline-pink float-right col-md-4 " onClick={add} >
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/></svg>
                </button>
                <button class="text-center btn btn-outline-pink float-right col-12" onClick={addCart}>Add to cart
                </button>
            </div>

        </div>

    </>

}

export default ItemCount;