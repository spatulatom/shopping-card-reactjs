import React, {useEffect} from 'react';
import  blacktshirt from '../images/1.jpg';
import  nasatshirt from '../images/2.jpg';
import  greytshirt from '../images/3.jpg';
import  moontshirt from '../images/5.jpg';
import {connect} from 'react-redux';
import addBasket from '../actions/addAction';
import saveLocalStorage from '../actions/saveLocalStorage'

const Home =(props)=>{
    // console.log(props);
    // its kinda weird that add to basket is a prop, at leat thats pops up
    // to the console when home firs rendered
   
   useEffect(()=>{
      getLocalBasket();},
       []);
           
    
    
    useEffect(()=>{
        saveLocalBasket();
        },[props.basketProps])

           
           
  const saveLocalBasket = () => {
      localStorage.setItem("basket", JSON.stringify(props.basketProps));
      }; 
  
  
  const getLocalBasket = ()=>{
        if(localStorage.getItem("basket")===null){
        localStorage.setItem("basket", JSON.stringify([]));}
        else{
             let blah = JSON.parse(localStorage.getItem("basket"));
              props.saveLocalStorage(blah);
              console.log('here',blah);
            }
          };
        
     


 return(
        <div className="container">
        
         
            
            <div className="image">
                <img src={blacktshirt} alt=""/>
                <h3>Black Tshirt</h3>
                <h3>$12,00</h3>
                <a onClick={() =>props.addBasket('blackTshirt')} className="addToCart cart1" href="#">Add Cart</a>
               
            </div>
         
            <div className="image">
                <img src={nasatshirt} alt=""/>
                <h3>Nasa Tshirt</h3>
                <h3>$22,00</h3>
                <a onClick={() =>props.addBasket('nasaTshirt')} className="addToCart cart2" href="#">Add Cart</a>
               
            </div>
            
            <div className="image">
                <img src={greytshirt} alt=""/>
                <h3>Grey Tshirt</h3>
                <h3>$14,00</h3>
                <a onClick={() =>props.addBasket('greyTshirt')} className="addToCart cart3" href="#">Add Cart</a>
               
            </div>
            
            <div className="image">
                <img src={moontshirt} alt=""/>
                <h3>Moon Tshirt</h3>
                <h3>$18,00</h3>
                <a onClick={() =>props.addBasket('moonTshirt')} className="addToCart cart4" href="#">Add Cart</a>
               
            </div>
 
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps,{addBasket, saveLocalStorage})(Home);
// null represent the state, and we dont need to worry about state here, we want state in navbar