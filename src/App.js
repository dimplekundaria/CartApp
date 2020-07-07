import React from 'react';
import CartItem from './CartItem';
import Navbar from './Navbar';
import Cart from './Cart';


class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
            {
                price:100,
                title:'Watch',
                qty:2,
                img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                id:1
            },
            {
                price:999,
                title:'Mobile Phone',
                qty:1,
                img:'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=359&q=80',
                id:2
            },
            {
                price:40000,
                title:'Laptop',
                qty:1,
                img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
                id:3
            }
        ]
    }
    
}
handleIncreaseQuantity = (product) => {
    console.log('Hey, Plz increase the qty of',product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty+=1;

    this.setState({
        products
    })
}
handleDecreaseQuantity = (product) => {
    
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0){
        return;
    }

    products[index].qty-=1;

    this.setState({
        products
    })
}

handleDeleteProduct = (id) => {
    const {products}=this.state;

     const items = products.filter((item) => item.id !== id); // [{}]

     this.setState({
         products:items
     })
}

getCartCount(){
  const {products} = this.state;

  let count=0;
  products.forEach((product) =>{
    count += product.qty;
  })
  return count;
}

getCartTotal(){
  const {products} = this.state;

  let cartTotal=0;
  products.map((product) =>{
    cartTotal=cartTotal + product.qty * product.price;
  })
  return cartTotal;
}

  render(){
    const {products} = this.state;
  return (
    
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products = {products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteQuantity={this.handleDeleteProduct}
      />
      <div>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
