import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';
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
          <Route path="/cuadros"> 
            <ItemListContainer Title='Cuadros'/>
          </Route>
          <Route path="/box"> 
            <ItemListContainer Title='Box'/>
          </Route>
          <Route path="/macetas"> 
            <ItemListContainer Title='Macetas'/>
          </Route>
          <Route path="/ofertas"> 
            <ItemListContainer Title='Ofertas'/>
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
