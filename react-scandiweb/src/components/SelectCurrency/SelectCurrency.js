import React from 'react';

export default class SelectCurrency extends React.Component {
    constructor() {
        super();
        // this.state = {color: "red"};
    }
    render() {
        return <div className='currency-select-div'>
            {/*<select className="currency-selector">*/}
            {/*    <option data-symbol="$" data-placeholder="0.00" selected>$ USD</option>*/}
            {/*    <option data-symbol="€" data-placeholder="0.00">€ EUR</option>*/}
            {/*    <option data-symbol="¥" data-placeholder="0">¥ JPY</option>*/}
            {/*</select>*/}
            {/*<span className='arrow'></span>*/}
            <button className='currency-selector-button'>
                <span>$</span>
                <svg className='dropdown-arrow' width="16" height="8" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3.5L4 0.5L7 3.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className='dropdown-menu'>
                <a href='#'>$ USD</a>
                <a href='#'>€ EUR</a>
                <a href='#'>¥ JPY</a>
            </div>
        </div>;
    }
}