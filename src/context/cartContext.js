import React,{useContext, useState} from 'react';


export const CartContext = React.createContext([]);

export const useCartcontext = () => useContext(CartContext);

const CartProvider = ({children,defaultCart}) => {
    const [cart,setCart] = useState (defaultCart);

    function add(item){

    }
    function remove(item){

    }

    return <CartContext.Provider value = {{cart,add,remove}}>

        {children}
    </CartContext.Provider>
}

export default CartProvider;