import React, { Component } from "react";
class CartItem extends React.Component{
  
    // // testing() { not need lomger

    // //     const promise = new promise((resolve,rejact) =>{
    // //         setTimeout(() =>{
    // //             resolve('done');
    // //         },5000);
    // //     });

    // //     promise.then(() =>{
    // //         this.setState({qty:this.state.qty +10});
    // //     });

    // // }

    // increaseQuentity = () =>{ // arow function autometicaly bind the inheritance class
    //     // this.state.qty += 1;
    //     // console.log('this',this.state);
    //     // form 1
    //     // this.setState({ // rerender the value with updatated value 
    //     //     qty : this.state.qty + 1// add quentity 
    //     // });

       
    //     this.setState((prevState) => {  // form 2 - if prevState is require then do this one 
    //         return{
    //             qty :this.state.qty +1

    //         }
    //     })
    // }

    // decreaseQuestity = () =>{
    //     const {qty} = this.state;

    //     if(qty === 0){
    //         return;
    //     }


    //     this.setState((prevState) => {
    //         return{
    //             qty : this.state.qty -1
    //         }
    //     })
    // }
    render(){
        console.log('this.props',this.props);
         const {price,title,qty} = this.props.product; //boject distructing 
         const {product,onIncreaseQuentity,onDecreaseQuentity,onDeleteproduct} = this.props;
        return(
            <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
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