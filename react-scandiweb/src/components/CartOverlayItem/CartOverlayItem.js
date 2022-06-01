import React from 'react';
import goodsImg from "../../temporaryImg/product-card-Image.jpg";
import arrowLeftImg from '../../pngs/ArrowLeft.png';
import arrowRightImg from '../../pngs/ArrowRight.png';

export default class CartOverlayItem extends React.Component {
    constructor() {
        super();
        // this.state = {color: "red"};
    }
    render() {
        return <>
            <div className='cart-overlay-item-container'>
                <div className='cart-overlay-item-left-group'>
                    <h3 className='cart-overlay-item-heading'>Appolo</h3>
                    <h3 className='cart-overlay-item-heading'>Running Short</h3>
                    <div className='cart-overlay-item-form-price'>
                        <h4>$50.00</h4>
                    </div>
                    <div className='cart-overlay-item-form-size'>
                        <h3 >Size :</h3>
                        <div className='cart-overlay-item-size-buttons'>
                            <a className='cart-overlay-item-size-XS'>XS</a>
                            <a className='cart-overlay-item-size-S'>S</a>
                            <a className='cart-overlay-item-size-M'>M</a>
                            <a className='cart-overlay-item-size-L'>L</a>
                        </div>
                    </div>
                    <div className='cart-overlay-item-form-color'>
                        <h3 >Color :</h3>
                        {/*<input type='radio' name='color' id='color-1' checked={true} hidden={true}/>*/}
                        {/*<input type='radio' name='color' id='color-2' hidden={true}/>*/}
                        {/*<input type='radio' name='color' id='color-3' hidden={true}/>*/}
                        <div className='cart-overlay-product-color-nav'>
                            <label className='cart-overlay-item-color-label' htmlFor='color-1' />
                            <label className='cart-overlay-item-color-label' htmlFor='color-2' />
                            <label className='cart-overlay-item-color-label' htmlFor='color-3' />
                        </div>
                    </div>
                </div>
                <div className='cart-overlay-item-right-group'>
                    <div className='cart-overlay-goods-quantity'>
                        <button className='cart-overlay-goods-quantity-plus'>+</button>
                        <div className='cart-overlay-goods-quantity-number'>1</div>
                        <button className='cart-overlay-goods-quantity-minus'>-</button>
                    </div>
                    <div className='cart-overlay-goods-Img'>
                        <img src={goodsImg} alt='goods-img'/>
                    </div>
                </div>
            </div>
        </>
    }
}