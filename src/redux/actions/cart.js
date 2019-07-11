
  import { ADD_TO_CART,REMOVE_FROM_CART,INCREMENT_QUANTITY,DECREMENT_QUANTITY} from './types'

 
  export const addToCart = (productID) => {
    return {
      type: ADD_TO_CART,
      productID
    };
  }
  
  export const removeFromCart = (productID) => {
    return {
      type: REMOVE_FROM_CART,
      productID
    };
  }

  export const incrementQuantity = (productID) => {
    return {
      type: INCREMENT_QUANTITY,
      productID
    };
  }
  
  export const decrementQuantity = (productID) => {
    return {
      type: DECREMENT_QUANTITY,
      productID
    };
  }

