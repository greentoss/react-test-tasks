import React from 'react';
import CartItem from "../CartItem/CartItem";

export default class Cart extends React.Component {
    constructor() {
        super();
        // this.state = {color: "red"};
    }
    render() {
        return <main className='main'>
            <h1 className='cart-heading'>Cart</h1>
            <hr className='cart-hr'/>
            <section className='cart-box'>
                <div className='cart-chosen-goods'>
                    <CartItem/>
                    <CartItem/>
                </div>

                <div className='summery-goods'>
                    {/*<h4 className='sg-tax'>Tax 21% : <span>$42.00</span></h4>*/}
                    {/*<h4 className='sg-quantaty'>Quantaty : <span>3</span></h4>*/}
                    {/*<h4 className='sg-total'>Total : <span>$200.00</span></h4>*/}
                    <table className='sg-total-table'>
                        <tbody>
                        <tr>
                            <td className='sg-tax'>Tax 21% : </td>
                            <td className='sg-tax-number'>$42.00</td>
                        </tr>
                        <tr>
                            <td className='sg-quantaty'>Quantaty : </td>
                            <td className='sg-quantaty-number'>3</td>
                        </tr>
                        <tr>
                            <td className='sg-total'>Total : </td>
                            <td className='sg-total-number'>$200.00</td>
                        </tr>
                        </tbody>
                    </table>

                    <button className='cart-order-btn'>Order</button>
                </div>
            </section>
        </main>;
    }
}