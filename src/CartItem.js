import React, { Component } from "react";
const CartItem =(props)=>{

         const {price,title,qty} = props.product; //boject distructing 
         const {product,onIncreaseQuentity,onDecreaseQuentity,onDeleteproduct} = props;
        return(
            <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}> Rs {price}</div>
                <div style={{color:'#777'}}> Qty: {qty}</div>
                <div className="cart-item-action">
                    <img
                     alt="increase"
                      className="action-icon"
                       src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                       onClick={() => onIncreaseQuentity(product)}
                    />
                    <img
                     alt="decrease"
                      className="action-icon" 
                      src="https://cdn-icons-png.flaticon.com/128/9632/9632763.png"
                      onClick={() => onDecreaseQuentity(product)}
                    />
                    <img
                     alt="delete"
                      className="action-icon"
                       src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                       onClick={()=> onDeleteproduct(product.id)}
                     />
                </div>
            </div>
         </div>
        );       

}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;