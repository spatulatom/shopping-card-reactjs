import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT, SAVE_LOCAL_STORAGE } from "../actions/types";



 let initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        blackTshirt:{
        name: 'Black Tshirt',
        tagName: 'blackTshirt',
        price: 12.00,
        numbers: 0, 
        inCart: false

    },
    nasaTshirt: {
    name: 'Nasa Tshirt',
    tagName: 'nasaTshirt',
    price: 22.00,
    numbers: 0, 
    inCart: false
},
greyTshirt: {
name: 'Grey Tshirt',
tagName: 'greyTshirt',
price: 14.00,
numbers: 0, 
inCart: false
},

moonTshirt: {
    name: 'Moon Tshirt',
    tagName: 'moonTshirt',
    price: 18.00,
    numbers: 0, 
    inCart: false 
}
}
 }
export default (state=initialState,action) => {
    let productSelected = "";
    switch (action.type){
        case ADD_PRODUCT_BASKET: 
        productSelected = {...state.products[action.payload]}
        productSelected.numbers +=1;
        productSelected.inCart = true;
        


        return{
            ...state,
            basketNumbers: state.basketNumbers +1,
            cartCost: state.cartCost + state.products[action.payload].price,
            products: {
                ...state.products,
                [action.payload]: productSelected
            }
        }
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }
            case INCREASE_QUANTITY:
                // if we click for balckTshirt we get: state.products['blackTshirt'], and acces to that object properties
                productSelected= {...state.products[action.payload]}
                productSelected.numbers+=1;
            return{
            
                ...state, 
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    // blackTshirt: productSelected-this is what the action.payload is doing when we click on for ex blackTshirt
                    [action.payload]: productSelected
                }
                
            }
            case DECREASE_QUANTITY:
                productSelected= {...state.products[action.payload]}
                let newCartCost =0;
                let newBasketNumbers = 0;

                if(productSelected.numbers ===0 ){
                    productSelected.numbers = 0;
                    newCartCost = state.cartCost;
                    newBasketNumbers = state.basketNumbers
                }else{
                productSelected.numbers -=1;
                newCartCost= state.cartCost - state.products[action.payload].price;
                newBasketNumbers = state.basketNumbers - 1
                }
            return{
            
                ...state, 
                basketNumbers: state.basketNumbers -1,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    // blackTshirt: productSelected-this is what the action.payload is doing when we click on for ex blackTshirt
                    [action.payload]: productSelected
                }
                
            }
            case CLEAR_PRODUCT:
                productSelected = {...state.products[action.payload]};
                let numbersBackup = productSelected.numbers;
                productSelected.numbers= 0;
                productSelected.inCart=false;

                return{
                    ...state,
                    basketNumbers: state.basketNumbers - numbersBackup,
                    cartCost: state.cartCost - (numbersBackup * productSelected.price),
                    products: {
                        ...state.products,
                        [action.payload]: productSelected
                    }

                }

                case SAVE_LOCAL_STORAGE:
                  productSelected = action.payload;
                  
                 return{
                     ...state,
                     basketNumbers: productSelected['basketNumbers'],
                     cartCost: productSelected['cartCost'],  
                     products: productSelected['products'],

            
                    
                 }
                    
        default:
            return state;

    }
}