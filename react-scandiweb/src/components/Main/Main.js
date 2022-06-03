import React from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';
import {graphql} from "@apollo/client/react/hoc";
import {getProductsQuery} from "../../queries/queries";


class Main extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    displayProducts(){
        let data = this.props.data;
        if(data.loading) {
            return null
        } else if (data.error) {
            console.log('data error')
        } else {
            return data.category.products.map((product)=>{
                return(
                    <GoodsCard product={product} productId={product.id} key={product.id}/>
                )
            })
        }
    }
    render() {
        // console.log(this.props.data.category.products);
        return <main className='main'>
            <h1 className='main-heading'>Category name</h1>
            <section className='goods-box'>
                {this.displayProducts()}
                {/*<GoodsCard />*/}
            </section>
        </main>;
    }
}
export default graphql(getProductsQuery)(Main);