Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**Super mega instruction how to make this test task**

**Chapter I - Make templates**
- create basic sceleton by ``create-react-app`` thing
- make header, page with goods, page with goods description, cart page, 
  cart overlay, currency dropdown thing
  
__remember thet here we have to use **CLASS** components__
- make __CSS__ styles for all above
- use ``react-router`` and make navigation, put the ``<Link to='/'>`` links where u need, 
  make routes (read docs for react routes)
  
but your App class should look like this: 
```javascript
class App extends React.Component {
  constructor() {
      super();
  }
  render () {
      return (
          <>
              <Router>
                  <Header />
                  <Routes>
                      <Route exact path='/' element = {<Main />} />
                      <Route path='/about' element = {<ProductDescription />} />
                      <Route path='/cart' element = {<Cart />} />
                      <Route path = '*' element = {<ClientError />} />
                  </Routes>
              </Router>

          </>
      );
  };
}
```

and dont forget to ``import {BrowserRouter as Router,  Routes,  Route} from "react-router-dom";`` if your IDE dont do that

**Chapter II - Make Redux state**

u will need it for adding goods to cart









**Chapter III - make ***graphql*** surrounding **

__remember thet here we have to use **CLASS** components__

- make ``npm install @apollo/client graphql``
- endpoint is **'http://localhost:4000/'**
- in app component - it is root - set up an client setup
- make those in index.js: 
```javascript
const uri = 'http://localhost:4000/';

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache()
})
```
```javascript
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
```
- go to Component which renders first page with goods = Main.js

make there query, using gql`` thing, and import it from 

````javascript
import {gql} from "@apollo/client";
````
- go to localhost4000 and see there UI of grapql. U will find there in Docs
the structure of represented products. first query is 
```javascript
const getGoodsQuery = gql`
    query {
  category {
    name,
    products{
    \tid,
      name,
      prices{
        amount,
        currency{
          label,
          symbol
        }
      },
      gallery
    }
  }
}
`
```
- we are using class components, so use this in the bottom of class file:
```javascript
export default graphql(getGoodsQuery)(Main);
```
this thing is similar to connect thing from redux. it looks similar perhaps.

- then make method whisch delivers all the data where u need on the page:
```javascript
displayProducts(){
        let data = this.props.data;
        if(data.loading) {
            return null
        } else if (data.error) {
            console.log('data error')
        } else {
            return data.category.products.map((product)=>{
                return(
                    <GoodsCard product={product} />
                    // <div>{product.name}</div>
                )
            })
        }
    }
```
- and call it where u need :
```javascript
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
```
- and pass data by props inside your daughter or son components