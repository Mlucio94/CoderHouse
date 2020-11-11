import React,{useContext, useEffect, useState} from 'react';


export const CartContext = React.createContext([]);

export const useCartcontext = () => useContext(CartContext);

const CartProvider = ({children,defaultCart}) => {
    const [cart,setCart] = useState (defaultCart);


    useEffect (()=>{
        
    },[cart])

    function add(item,qty){
        
        setCart({item:[item,qty]});


        alert(`Añadiste ${qty} elementos del producto ${item}`);
        console.log(cart);
    }
    

    function remove(item){

    }
    function clear (){

    }

    return <CartContext.Provider value = {{cart,add,remove,clear}}>

        {children}
    </CartContext.Provider>
}

export default CartProvider;