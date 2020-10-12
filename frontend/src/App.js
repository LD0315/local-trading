import React from 'react';
// import './App.css';

function App() {
  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onclick="openMenu()">
                    &#9776;
                </button>
                <a href="index.html">LOCAL TRADING</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3 className="sidebar-title">Shopping Categories</h3>
            <button className="sidebar-close-button" onclick="closeMenu()">x</button>
            <ul>
                <li>
                    <a href="index.html">Fruites</a>
                </li>

                <li>
                    <a href="index.html">Vegetables</a>
                </li>
            </ul>
        </aside>
      
        <main className="main">
            <div className="content">
                <ul className="products">
                    <li> 
                        <div className="product">
                            <img className="product-image" src="images/pineapple.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Pineapple</a>
                            </div>
                            <div className="product-brand">Solomon Island</div>
                            <div className="product-price">$15</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>

                        </div>
                    </li> 
                    <li> 
                        <div className="product">
                            <img className="product-image" src="images/pineapple.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Pineapple</a>
                            </div>
                            <div className="product-brand">Solomon Island</div>
                            <div className="product-price">$15</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>

                        </div>
                    </li> 
                    <li> 
                        <div className="product">
                            <img className="product-image" src="images/pineapple.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Pineapple</a>
                            </div>
                            <div className="product-brand">Solomon Island</div>
                            <div className="product-price">$15</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>

                        </div>
                    </li> 
                    <li> 
                        <div className="product">
                            <img className="product-image" src="images/pineapple.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Pineapple</a>
                            </div>
                            <div className="product-brand">Solomon Island</div>
                            <div className="product-price">$15</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>

                        </div>
                    </li> 
                    <li> 
                        <div className="product">
                            <img className="product-image" src="images/pineapple.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Pineapple</a>
                            </div>
                            <div className="product-brand">Solomon Island</div>
                            <div className="product-price">$15</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>

                        </div>
                    </li> 
                    <li> 
                        <div className="product">
                            <img className="product-image" src="images/pineapple.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Pineapple</a>
                            </div>
                            <div className="product-brand">Solomon Island</div>
                            <div className="product-price">$15</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>

                        </div>
                    </li> 
                </ul>
            
            </div>
            
        </main>
        <footer className="footer">
            All right reserved. 
        </footer>
    </div>
  );
}

export default App;
