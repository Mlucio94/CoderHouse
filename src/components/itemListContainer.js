import React from 'react';
import Card from './card';

function ItemListContainer({Title}){

    return <>
        <div class="container-md mt-4 mb-4">
            <h2>{Title}</h2>
            <div class="card-deck mt-4">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div class="card-deck mt-4">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </>

}



export default ItemListContainer;