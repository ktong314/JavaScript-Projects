import React, { useState, useEffect } from 'react';
import { Background } from '../Background';
import { Cart } from '../Cart/Cart';
import { Products } from '../Products';

const productList = [
    {
      id: 0,
      name: "T-shirt 1",
      price: 29.99,
      instock: 100,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/t1.png",
    },
    {
      id: 1,
      name: "T-shirt 2",
      price: 24.99,
      instock: 43,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/t2.png",
    },
    {
      id: 2,
      name: "T-shirt 3",
      price: 19.99,
      instock: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/t3.png",
    },
    {
      id: 3,
      name: "T-shirt 4",
      price: 25.99,
      instock: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/t4.png",
    },
    {
      id: 4,
      name: "T-shirt 5",
      price: 29.99,
      instock: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/t5.png",
    },
    {
      id: 5,
      name: "T-shirt 6",
      price: 39.99,
      instock: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "./img/t6.png",
    },
  ];

  
export const App = () => {
    const [cart, setCart] = useState(
        localStorage.getItem('CART') ? 
        JSON.parse(localStorage.getItem('CART')) : 
        []
    );
    const [subtotal, setSubtotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);


    useEffect(() => {
        localStorage.setItem('CART', JSON.stringify(cart));
        calculateTotal();
    }, [cart]);

    function calculateTotal(){
        let totalPrice = 0;
        let numberOfItems = 0;
        cart.forEach((item) => {
            totalPrice += item.price * item.numberOfUnits;
            numberOfItems += item.numberOfUnits;
        })
        setSubtotal(totalPrice);
        setTotalItems(numberOfItems);
    }


    function increaseUnits(id){
        setCart(cart.map((item) => {
            let numberOfUnits = item.numberOfUnits;
            if(item.id === id && numberOfUnits < item.instock){
                numberOfUnits++;
            }
            return{
                ...item,
            numberOfUnits,
            }
        }))
    }

    function decreaseUnits(id){
        setCart((cart.map((item) => {
            let numberOfUnits = item.numberOfUnits;
            if(item.id === id && numberOfUnits > 0){
                numberOfUnits--;
            }
            return{
                ...item,
            numberOfUnits,
            }
        })).filter(item => item.numberOfUnits !== 0))
    }

    return(
        <>
            <Background 
                totalItems = {totalItems}
            />
            <div className="products-list">
                <div class="products">
                    {productList.map((p, index) => (
                        <Products 
                            key = {index}
                            product = {p}
                            onClick = {() => {
                                if(cart.some ((item) => item.id === p.id)){
                                    increaseUnits(p.id);
                                } else {
                                    setCart([ 
                                        ...cart, 
                                        {...p, 
                                            numberOfUnits: 1}
                                    ]);
                                }
                            }}
                        />
                    ))}
                </div>   
                <div class="cart">
                    <div class="cart-header">
                        <div class="column1">Item</div>
                        <div class="column2">Unit price</div>
                        <div class="column3">Units</div>
                    </div>
                    <div class="cart-items">
                        {cart.map((c, index) => (
                            <Cart 
                                key = {index}
                                item = {c}
                                removeItemFromCart = {() => {
                                    setCart(cart.filter(i => i.id !== c.id));
                                }}
                                onPlus = {() => {
                                    increaseUnits(c.id);
                                }}
                                onSub = {() => {
                                    decreaseUnits(c.id);
                                }}
                            />
                        ))}
                        
                    </div>
                    <div class="cart-footer">
                        <div class="subtotal">
                            Subtotal ({totalItems} items): ${subtotal}
                        </div>
                        <div class="checkout">
                            Proceed to checkout
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

