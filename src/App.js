import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";

class App extends React.Component{
  constructor (){
    super();
  this.state= {
    products :[
        {
            price:99,
            title:'watch',
            qty:5,
            img:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            id:1
        },{
            price:999,
            title:'Mobile Phone',
            qty:5,
            img:'https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            id:2
        },{
            price:39000,
            title:'Laptop',
            qty:1,
            img:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
            id:3
        }
    ]
}

}

HandleIncreaseQuentity = (product) =>{
    console.log('heey please Inc the qty',product);
    const {products} = this.state;

    const index =products.indexOf(product);

    products[index].qty +=1;

    this.setState({
        products:products
    })
    
    
}

HandleDecreaseQuentity = (product) =>{
    console.log('heey please Inc the qty',product);
    const {products} = this.state;

    const index =products.indexOf(product);

    if(products[index].qty === 0){
        return;
    }

    products[index].qty -=1;

    this.setState({
        products:products
    })
    
    
}

handlDeleteproduct = (id) =>{
    const{products} =this.state;
    const item = products.filter((item) => item.id!==id);

    this.setState({
        products:item
    });
}

getCartCount = ()=> {
  const {products}= this.state;
  let count = 0;

  products.forEach((product) =>{
    count += product.qty;
  })

  return count;
 }

 getCartTotal =()=>{
  const {products} = this.state;
  let cartTotal = 0;

  products.map((product) =>{
    cartTotal = cartTotal + product.qty*product.price;
  })

  return cartTotal;
 }

  render(){
    const {products}= this.state;
    return (
      <div className="App">
        <Navbar const={this.getCartCount()}/>
        <Cart
        products = {products}
         onIncreaseQuentity = {this.HandleIncreaseQuentity}
         onDecreaseQuentity = {this.HandleDecreaseQuentity}
         onDeleteproduct = {this.handlDeleteproduct}
        
        />
        <div style ={{padding:10 , fontSize:20}} > TOTAL:{this.getCartTotal()}</div>
      </div>
    ); 
}
}

export default App;
