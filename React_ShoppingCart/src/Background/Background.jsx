import React from 'react';


export const Background = ({totalItems}) => {
    return (
        <>
            <div className = "app-container">
                <div className="app-bg">
                    <div className="left-side"></div>
                    <div className="right-side"></div>
                </div>
                <header>
                    <nav>
                        <ul>
                            <li className="btn home">
                                <a href="./">
                                    <img src={"./icons/home.png"} alt =""></img>
                                </a>
                            </li>
                            <li className="btn">
                                <a href="#">
                                    <img src={"./icons/filter.png"} alt="filter"></img>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Women
                                </a>
                            </li>
                            <li className="active">
                                <a href="#">
                                    Men
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Children
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="shopping-bag">
                        <a href="./cart.html">
                            <img src={"./icons/bag.png"} alt="cart"></img>
                            <div className="total-items-in-cart">
                                {totalItems}
                            </div>
                        </a>
                    </div>
                </header>
                <main>
                    <div class="content">
                        <div class="products-preview">
                            <div class="products-container">
                                <div class="product">
                                    <img src="./img/t1.png" alt="t-shirt 1"></img>
                                </div>
                                <div class="product">
                                    <img src="./img/t2.png" alt="t-shirt 2"></img>
                                </div>
                                <div class="product">
                                    <img src="./img/t4.png" alt="t-shirt 3"></img>
                                </div>
                            </div>
                            <div class="more-details">
                                <div class="see-more-btn">
                                        <img src="./icons/right-arrow.png" alt=""></img>
                                </div>
                                <div class="description">
                                    <small>New Season</small>
                                    <h1>Men Tees - <small>$</small>29.99</h1>
                                    <h1>Summer T-shirt</h1>
                                </div>
                            </div>
                        </div>
                        <div class="model">
                            <img class="model-img" src="./img/model.png" alt="model"></img>
                            <div class="product">
                                <img src="./img/t3.png" alt="t-shirt 4"></img>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}