import React from "react";

export default function Home() {
    return (
        <div >
            
            <div className="add-to-cart">
            <img  src="https://freepngimg.com/thumb/cart/10-2-cart-png-pic-thumb.png"/>
            </div>
            <h1>Home Component </h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg" />
                </div>

                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00 </span>
                </div>

                <div className="btn-wrapper item">
                    <button> ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}
