import React from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';

export default class Main extends React.Component {
    constructor() {
        super();
        // this.state = {color: "red"};
    }
    render() {
        return <main className='main'>
            <h1 className='main-heading'>Category name</h1>
            <section className='goods-box'>
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
            </section>
        </main>;
    }
}