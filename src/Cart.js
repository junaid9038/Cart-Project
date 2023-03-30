import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor (){
        super();
    this.state= {
        product :[
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
    
  render(){
    const {product} = this.state
    return (
        <div className="cart"> 
            {/* <CartItem qty = {1} price = {99} title ={'Watch'} img ={''}/> */}
            {product.map((product) => {
               return (
               <CartItem 
               product ={product}
                key ={product.id}/>
               )

            })}
            
        </div>
    );
  }
}



export default Cart;