import React,{useContext, useEffect, useState} from 'react';


export const CartContext = React.createContext([]);

export const useCartcontext = () => useContext(CartContext);

const CartProvider = ({children,defaultCart}) => {
    const [cart,setCart] = useState (defaultCart);


    function add(item,qty){

        const result = cart.filter(cart => cart.id == item.id);
        console.log(result)
       
        if(result.length != 0){
            console.log('paso por el if')

            const productosFiltrados = cart.filter(
                cart => cart.id !== item.id
              );
            console.log(result.cant)
            const nuevaCantidad = (parseFloat(result.cant) + parseFloat(qty))
            console.log(nuevaCantidad)
            const itemModificado = {
                id: item.id,
                name:item.prodName,
                price:item.price,
                cant: nuevaCantidad
            };
            
            const nuevoItemModificado = [...productosFiltrados,itemModificado];
            setCart(nuevoItemModificado);
        }else{

            const newItem = {
                id: item.id,
                name:item.prodName,
                price:item.price,
                cant: qty
            };
            
            const nuevoItemAgregado = [...cart,newItem];
            setCart(nuevoItemAgregado);

        }
        alert(`Añadiste ${qty} elementos del producto ${item.id}`);
        
        console.log(cart);
    }
    

    function remove(id){

        const productosFiltrados = cart.filter(
            cart => cart.id !== id
          );
        setCart(productosFiltrados);

    }
    function clear(){
      setCart([]);
    }

    return <CartContext.Provider value = {{cart,add,remove,clear}}>

        {children}
    </CartContext.Provider>
}

export default CartProvider;