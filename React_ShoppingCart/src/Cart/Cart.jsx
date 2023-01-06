import React from 'react';

export const Cart = ({item, removeItemFromCart, onPlus, onSub}) => {
    return(
        <>
            <div className="cart-item">
                <div className="item-info" onClick={removeItemFromCart}>
                    <img src={item.imgSrc} alt={item.name}></img>
                    <h4>${item.name}</h4>
                </div>
                <div className="unit-price">
                    <small>$</small>{item.price}
                </div>
                <div className="units">
                    <div className="btn minus" onClick = {onSub}>-</div>
                    <div className="number">{item.numberOfUnits}</div>
                    <div className="btn plus" onClick = {onPlus}>+</div>           
                </div>
             </div>
        </>
    );
}