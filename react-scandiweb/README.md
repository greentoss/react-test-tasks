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

