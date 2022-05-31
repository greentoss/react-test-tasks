import React from 'react';
import goodsImg from "../../temporaryImg/product-card-Image.jpg";
import arrowLeftImg from '../../pngs/ArrowLeft.png';
import arrowRightImg from '../../pngs/ArrowRight.png';

export default class CartItem extends React.Component {
    constructor() {
        super();
        // this.state = {color: "red"};
    }
    render() {
        return <>
            <div className='cart-item-container'>
                <div className='cart-item-left-group'>
                    <h3 className='cart-item-heading'>Appolo</h3>
                    <h3 className='cart-item-heading'>Running Short</h3>
                    <div className='cart-item-form-price'>
                        <h4>$50.00</h4>
                    </div>
                    <div className='cart-item-form-size'>
                        <h3 >Size :</h3>
                        <div className='cart-item-size-buttons'>
                            <button className='cart-item-size-XS'>XS</button>
                            <button className='cart-item-size-S'>S</button>
                            <button className='cart-item-size-M'>M</button>
                            <button className='cart-item-size-L'>L</button>
                        </div>
                    </div>
                    <div className='cart-item-form-color'>
                        <h3 >Color :</h3>
                        <input type='radio' name='color' id='color-1' checked={true} hidden={true}/>
                        <input type='radio' name='color' id='color-2' hidden={true}/>
                        <input type='radio' name='color' id='color-3' hidden={true}/>
                        <div className='cart-product-color-nav'>
                            <label className='cart-item-color-label' htmlFor='color-1' />
                            <label className='cart-item-color-label' htmlFor='color-2' />
                            <label className='cart-item-color-label' htmlFor='color-3' />
                        </div>
                    </div>

                </div>
                <div className='cart-item-right-group'>
                    <div className='cart-goods-quantity'>
                        <button className='cart-goods-quantity-plus'>+</button>
                        <div className='cart-goods-quantity-number'>1</div>
                        <button className='cart-goods-quantity-minus'>-</button>
                    </div>
                    <div className='cart-goods-Img'>
                        <img src={goodsImg} alt='goods-img'/>
                        <div className='button-arrow-left'>
                            <a href='#'><img src={arrowLeftImg} alt='arrowLeftImg'/></a>
                        </div>
                        <div className='button-arrow-right'>
                            <a href='#'><img src={arrowRightImg} alt='arrowLeftImg'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='cart-hr'/>
        </>

    }
}