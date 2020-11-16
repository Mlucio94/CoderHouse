import React,{useContext, useEffect, useState} from 'react';


export const CartContext = React.createContext([]);

export const useCartcontext = () => useContext(CartContext);

const CartProvider = ({children,defaultCart}) => {
    const [cart,setCart] = useState (defaultCart);


   

    function add(item,qty){

        const result = cart.filter(cart => cart.id == item);
       

        if(result != null){
            const productosFiltrados = cart.filter(
                cart => cart.id !== item
              );

              const itemModificado = {
                id: item,
                cant: (result.cant + qty)
            };
            
            const nuevoItemModificado = [...productosFiltrados,itemModificado];
            setCart(nuevoItemModificado);
        }else{

            const newItem = {
                id: item,
                cant: qty
            };
            
            const nuevoItemAgregado = [...cart,newItem];
            setCart(nuevoItemAgregado);

        }
        alert(`Añadiste ${qty} elementos del producto ${item}`);
        
        console.log(cart);
    }
    

    function remove(id){

        const productosFiltrados = cart.filter(
            cart => cart.id !== id
          );
        setCart(productosFiltrados);

    }
    function clear(){
      
    }

    return <CartContext.Provider value = {{cart,add,remove,clear}}>

        {children}
    </CartContext.Provider>
}

export default CartProvider;