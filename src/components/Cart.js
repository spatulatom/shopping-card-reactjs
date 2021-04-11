import React, { Fragment, useEffect } from 'react'
import {connect} from 'react-redux'
import {productQuantity, clearProduct} from '../actions/productQuantity'
import saveLocalStorage from '../actions/saveLocalStorage'
import  blacktshirt from '../images/1.jpg';
import  nasatshirt from '../images/2.jpg';
import  greytshirt from '../images/3.jpg';
import  moontshirt from '../images/5.jpg';

const Cart = ({basketProps, productQuantity, clearProduct, saveLocalStorage}) =>{
    console.log(basketProps.cartCost,"bla");

    useEffect(()=>{
        getLocalBasket();
      }, []);
   
    useEffect(()=>{
saveLocalBasket();
    },[basketProps])




let productInCart = [];
Object.keys(basketProps.products).forEach(function(item){
    // console.log(item);
console.log(basketProps.products[item].inCart);
if(basketProps.products[item].inCart){
    productInCart.push(basketProps.products[item])
}

})



// ------new section 'local storage ------'
 

// what happens: we gettingItem(but there is nothing), parisng it and we ge NaN
// typof productNumbers =NaN, then if checks productNumeber, which is faulty and for that reson goes
// to the bottom line. second time if is truthy and the first 'if' line gets printed
// const cartNumbers= ()=>{
//     let productNumbers = localStorage.getItem('cartNumbers');
//     // console.log('productnumber:',productNumbers);
//     // console.log(typeof productNumbers);
// //     // it says that typeof come as strings, we need to convert them into, this is how is done:
//     productNumbers = parseInt(productNumbers);
// //     // console.log(typeof productNumbers);
//     // now its says string 
//     if(productNumbers){
//     localStorage.setItem('cartNumbers', productNumbers+1);
//     }else{
//         localStorage.setItem('cartNumbers', 11);
// }
// }
  

// // -----------------------------------------------------
const saveLocalBasket = () => {
    localStorage.setItem("basket", JSON.stringify(basketProps));
  };



  const getLocalBasket = ()=>{
    
 if(localStorage.getItem("basket")===null){
localStorage.setItem("basket", JSON.stringify([]));}
else{
     let blah = JSON.parse(localStorage.getItem("basket"));
      saveLocalStorage(blah);
      console.log('here',blah);
    }
  };



// ---------------------------------------

const productImages =(product)=>{
    if(product.tagName==='blackTshirt'){
        return blacktshirt;
}else if (product.tagName==='nasaTshirt'){
return nasatshirt;
         }
         else if(product.tagName==='greyTshirt'){
             return greytshirt;
         }else if(product.tagName==='moonTshirt'){
             
             return moontshirt;
         }


}


productInCart = productInCart.map((product,index)=>{
    console.log("My product is");
    console.log(product.tagName);
return (
    <Fragment key={index}>
        
        <div className="product"><ion-icon onClick={()=>clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)}/>
<span className="sm-hide">{product.name}</span>
</div>
<div className="price sm-hide">${product.price},00 </div> 
<div className="quantity">
    <ion-icon onClick={()=>productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
<span>{product.numbers}</span>
<ion-icon onClick={()=>productQuantity('increase', product.tagName)}className="increase" name="arrow-forward-circle-outline"></ion-icon>

        </div>
<div className="total">${product.numbers * product.price},00</div>
    </Fragment>
)
}
);

    return(
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
                
            </div>
            <div className="products">
                {productInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
    <h4 className="basketTotal" >${basketProps.cartCost},00</h4>

            </div>
           
        </div>

    )
}
 
const mapStateToProps = state => ({
    basketProps: state.basketState
});



        
        export default connect (mapStateToProps, {productQuantity, clearProduct, saveLocalStorage }) (Cart);