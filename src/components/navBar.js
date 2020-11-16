import React,{useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/cartContext';


function NavBar(){

    const cart = useContext(CartContext);

    return(<>
              <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-nav">
                <div className="container-md">

                    <a className="navbar-brand" href="#">ArtDeco</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/ofertas'} className="nav-link">Ofertas</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tienda
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to={'/cuadros'} className="dropdown-item">Cuadros</Link>
                                    <Link to={'/box'} className="dropdown-item">Box</Link>
                                <div className="dropdown-divider"></div>
                                    <Link to={'/Macetas'} className="dropdown-item">Macetas</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Nosotros</a>
                            </li>
                            </ul>
                            
                    </div>

                        <Link className="nav-link" to={'/cart'}>
                            <button className="btn btn-outline-pink my-2 my-sm-0 m-1" type="submit">   
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.029 13h2.971l-.266 1h-2.992l.287-1zm.863-3h2.812l.296-1h-2.821l-.287 1zm-.576 2h4.387l.297-1h-4.396l-.288 1zm-11.816 6c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm8-16.5l-.743 2h-1.929l-3.474 12h-11.239l-4.615-11h14.812l-2.541 9h2.102l3.432-12h4.195z"/></svg>
                            </button>
                        </Link>
                        
                </div>
             </nav>
              
            </>
        ); 

}

export default NavBar;