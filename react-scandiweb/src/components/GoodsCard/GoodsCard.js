import goodsImg from "../../temporaryImg/product-card-Image.jpg";
import round_cart_img from "../../pngs/CircleCartIcon.png";
import React from "react";

export default class GoodsCard extends React.Component {
    constructor() {
        super();
        // this.state = {color: "red"};
    }
    render() {
        return <div className='goods-card'>
            <div className='goods-card-image-holder'>
                <img src={goodsImg} alt='goods-img'/>
                <a className='round-cart-button'>
                    <img src={round_cart_img} alt='cart'/>
                </a>
                <h4 className='outofstock-mark'>out of stock</h4>
            </div>
            <h3 className='goods-card-heading'>Appolo Running Short</h3>
            <h3 className='goods-card-price'>$ 50.00</h3>
        </div>;
    }
}