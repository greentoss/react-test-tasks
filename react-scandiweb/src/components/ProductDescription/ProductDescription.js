import React from 'react';
import goodsImg from "../../temporaryImg/product-card-Image.jpg";

export default class ProductDescription extends React.Component {
    constructor() {
        super();
        // this.state = {color: "red"};
    }
    render() {
        return <div className='product-description'>
            <div className='pd-preview-Imgs'>
                <img src={goodsImg} alt='goods-img'/>
                <img src={goodsImg} alt='goods-img'/>
                <img src={goodsImg} alt='goods-img'/>
            </div>
            <section className='product-description-content'>


                <div className='pd-Img'>
                    <img src={goodsImg} alt='goods-img'/>
                </div>
                <div className='pd-description'>
                    <h3 className='pd-heading'>Appolo</h3>
                    <h3 className='pd-heading'>Running Short</h3>
                    <div className='pd-form-size'>
                        <h3 >Size :</h3>
                        <div className='pd-size-buttons'>
                            <button className='pd-size-XS'>XS</button>
                            <button className='pd-size-S'>S</button>
                            <button className='pd-size-M'>M</button>
                            <button className='pd-size-L'>L</button>
                        </div>

                    </div>
                    <div className='pd-form-color'>
                        <h3 >Color :</h3>
                        <input type='radio' name='color' id='color-1' checked='true' hidden='true'/>
                        <input type='radio' name='color' id='color-2' hidden/>
                        <input type='radio' name='color' id='color-3' hidden/>
                        <div className='product-color-nav'>
                            <label className='pd-color-label' htmlFor='color-1' />
                            <label className='pd-color-label' htmlFor='color-2' />
                            <label className='pd-color-label' htmlFor='color-3' />
                        </div>
                    </div>
                    <div className='pd-form-price'>
                        <h3 >Price :</h3>
                        <h4>$50.00</h4>
                    </div>
                    <button className='add-to-cart-btn'>Add to cart</button>
                    <p className='pd-text'>Find stunning women's cocktail dresses and party dresses.
                        Stand out in lace and metallic cocktail dresses and party
                        dresses from all your favorite brands.</p>
                </div>
            </section>
        </div>;
    }
}