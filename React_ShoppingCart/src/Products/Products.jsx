import React from 'react';

export const Products = ( {product, onClick} ) => {
    return(
        <>
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src={product.imgSrc} alt={product.name}></img>
                    </div>
                    <div class="desc">
                        <h2>{product.name}</h2>
                        <h2><small>$</small>{product.price}</h2>
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div class="add-to-wishlist">
                        <img src="./icons/heart.png" alt="add to wish list"></img>
                    </div>
                    <div class="add-to-cart" onClick = {onClick}>
                        <img src="./icons/bag-plus.png" alt="add to cart"></img>
                    </div>
                </div>
            </div>
        </>
    );
}