import React from 'react';
import ItemListContainer from './itemListContainer';

function Home(){
    return <> 
        <div class="header">
            <img src="https://veganlifecommx.files.wordpress.com/2019/09/vegan-minimalist-1.jpg" alt=""/>
            <div class="title">
                <h1>ArtDeco</h1>
                <p>CREA tu espacio</p>
                <p>"Pensalo y nosotros lo hacemos"</p>     
            </div>
        </div>
        <ItemListContainer Title='Lista 1'/>

    </>

}


export default Home;