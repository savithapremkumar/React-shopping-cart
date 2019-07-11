import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY
} from "../actions/types";
import PropTypes from 'prop-types';




const initState = {
  products: [
    {
      id: 1,
      name: "Sledgehammer",
      price: 125.75
    },
    {
      id: 2,
      name: "Axe",
      price: 190.5
    },
    {
      id: 3,
      name: "Bandsaw",
      price: 562.13
    },
    {
      id: 4,
      name: "Chisel",
      price: 12.9
    },
    {
      id: 5,
      name: "Hacksaw",
      price: 18.45
    }
  ],
  addedToCart: [],
  cartTotal: 0
};
const cartReducer = (state = initState, action) => {
  //INSIDE PRODUCT PAGE
  if (action.type === ADD_TO_CART) {
    let addedItem = state.products.find(item => item.id === action.productID);
    //check if the action id exists in the addedItems
    let existing_item = state.addedToCart.find(item => action.productID === item.id);
    if (existing_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        cartTotal: (state.cartTotal*1 + addedItem.price).toFixed(2)
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = (state.cartTotal*1 + addedItem.price).toFixed(2);

      return {
        ...state,
        addedToCart: [...state.addedToCart, addedItem],
        cartTotal: newTotal
      };
    }
  }
  //INSIDE SHOPPING CART
  if (action.type === REMOVE_FROM_CART) {
    let itemToRemove = state.addedToCart.find(item => action.productID === item.id);
    let new_items = state.addedToCart.filter(item => action.productID !== item.id);

    //calculating the total
    let newTotal = (state.cartTotal*1 - itemToRemove.price * itemToRemove.quantity).toFixed(2);
    return {
      ...state,
      addedToCart: new_items,
      cartTotal: newTotal
    };
  }
  //ACTIONS NOT IMPLEMENTED IN UI
  if (action.type === INCREMENT_QUANTITY) {
    let addedItem = state.products.find(item => item.id === action.productID);
    addedItem.quantity += 1;
    let newTotal = (state.cartTotal*1 + addedItem.price).toFixed(2);
    return {
      ...state,
      cartTotal: newTotal
    };
  }
  if (action.type === DECREMENT_QUANTITY) {
    let addedItem = state.products.find(item => item.id === action.productID);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedToCart.filter(item => item.id !== action.productID);
      let newTotal = (state.cartTotal*1 - addedItem.price).toFixed(2);
      return {
        ...state,
        addedToCart: new_items,
        cartTotal: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = (state.cartTotal*1 - addedItem.price).toFixed(2);
      return {
        ...state,
        cartTotal: newTotal
      };
    }
  }

  else{
    return state
    }
};

initState.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    addedToCart: PropTypes.array,
    cartTotal : PropTypes.number
  };

export default cartReducer
