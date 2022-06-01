import React from 'react';
import {Link} from "react-router-dom";
import CartOverlayItem from "../CartOverlayItem/CartOverlayItem";

export default class CartPopUpOverlay extends React.Component {

    render() {
        const showHideClassName = this.props.trigger ? "cart-overlay display-block" : "cart-overlay display-none";
        return  <div className={showHideClassName}>
            {this.props.children}
                <div className='cart-overlay-content'>
                    <h3 className='cart-overlay-heading'>My Bag,  </h3><span> 3 </span><span>items</span>
                    <div className='cart-overlay-chosen-goods'>
                        <CartOverlayItem/>
                        {/*<CartOverlayItem/>*/}
                        {/*<CartOverlayItem/>*/}
                    </div>
                    <table className='cart-overlay-total-table'>
                        <tbody>
                        <tr>
                            <td className='sg-cart-overlay-total'>Total : </td>
                            <td className='sg-cart-overlay-total-number'>$200.00</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='cart-overlay-buttons'>
                        <button type="button" className='cart-overlay-ToCart-btn' onClick={()=>{
                            this.props.handleClose()
                            this.props.unFreezeScroll()
                        }}
                        ><Link to='/cart'>View Bag</Link></button>
                        <button type="button" className='cart-overlay-CheckOut-btn'>Checkout</button>
                    </div>
                </div>
            </div>;
    }
}

// export default function CartPopUpOverlay ({handleClose, trigger, children}) {
//
//         console.log(trigger, ': props passed ');
//         const showHideClassName = trigger ? "cart-overlay display-block" : "cart-overlay display-none";
//         return  <div className={showHideClassName}>
//             {/*if (!this.props.trigger) return null;*/}
//             {/*return  <div className='cart-overlay'>*/}
//             {children}
//             <div className='cart-overlay-content'>
//                 <h3 className='cart-overlay-heading'>My Bag,  </h3><span> 3 </span><span>items</span>
//                 <div className='cart-overlay-chosen-goods'>
//                     <CartOverlayItem/>
//                     {/*<CartOverlayItem/>*/}
//                     {/*<CartOverlayItem/>*/}
//                 </div>
//                 <table className='cart-overlay-total-table'>
//                     <tbody>
//                     <tr>
//                         <td className='sg-cart-overlay-total'>Total : </td>
//                         <td className='sg-cart-overlay-total-number'>$200.00</td>
//                     </tr>
//                     </tbody>
//                 </table>
//                 <div className='cart-overlay-buttons'>
//                     <button type="button" onClick={handleClose}>123</button>
//                     <button type="button" className='cart-overlay-ToCart-btn' onClick={handleClose}>View Bag</button>
//                     {/*><Link to='/cart'>View Bag</Link></button>*/}
//
//                     <button type="button" className='cart-overlay-CheckOut-btn'>Checkout</button>
//                 </div>
//             </div>
//         </div>;
// }
