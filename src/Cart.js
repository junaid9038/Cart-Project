import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor (){
        super();
    this.state= {
        products :[
            {
                price:99,
                title:'watch',
                qty:5,
                img:'',
                id:1
            },{
                price:999,
                title:'Mobile Phone',
                qty:5,
                img:'',
                id:2
            },{
                price:39000,
                title:'Laptop',
                qty:1,
                img:'',
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
    
  render(){
    const {products} = this.state
    return (
        <div className="cart"> 
            {/* <CartItem qty = {1} price = {99} title ={'Watch'} img ={''}/> */}
            {products.map((product) => {
               return (
               <CartItem 
               product ={product}
                key ={product.id}
                onIncreaseQuentity = {this.HandleIncreaseQuentity}
                onDecreaseQuentity = {this.HandleDecreaseQuentity}
                onDeleteproduct = {this.handlDeleteproduct}/>
               )

            })}
            
        </div>
    );
  }
}



export default Cart;