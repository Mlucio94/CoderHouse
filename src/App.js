import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/cart';
import './App.css';
import CartProvider from './context/cartContext';

function App() {
  return (
    <CartProvider defaultCart={[]}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/"> 
            <Home/>
          </Route>
          <Route exact path="/cart"> 
            <Cart/>
          </Route>
          <Route path="/cuadros"> 
            <ItemListContainer Title='cuadros'/>
          </Route>
          <Route path="/box"> 
            <ItemListContainer Title='box'/>
          </Route>
          <Route path="/macetas"> 
            <ItemListContainer Title='macetas'/>
          </Route>
          <Route path="/ofertas"> 
            <ItemListContainer Title='ofertas'/>
          </Route>
          <Route path="/item/:id"> 
            <ItemDetailContainer></ItemDetailContainer>
          </Route>
        </Switch>
          
      
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
