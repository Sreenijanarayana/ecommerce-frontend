import {
    ADD_ITEM_TO_CART_FAILURE,
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    GET_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    REMOVE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS,
  } from "./ActionType";
  
  const initialState = {
    cart: null,
    loading: false,
    error: null,
    cartItems: [],
    totalItem: 0,
    totalPrice: 0,
    totalDiscountedPrice: 0,
    discounte: 0,
  };
  
  // Helper function to calculate cart totals
  const calculateCartTotals = (cartItems) => {
    const totalItem = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const totalDiscountedPrice = cartItems.reduce(
      (sum, item) => sum + item.product.discountedPrice * item.quantity,
      0
    );
    const discounte = totalPrice - totalDiscountedPrice;
  
    return {
      totalItem,
      totalPrice,
      totalDiscountedPrice,
      discounte,
    };
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM_TO_CART_REQUEST:
        return { ...state, loading: true, error: null };
  
      case ADD_ITEM_TO_CART_SUCCESS: {
        const updatedCartItems = [...state.cartItems, action.payload.cartItems];
        return {
          ...state,
          cartItems: updatedCartItems,
          loading: false,
          ...calculateCartTotals(updatedCartItems), // Recalculate totals
        };
      }
  
      case ADD_ITEM_TO_CART_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case GET_CART_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case GET_CART_SUCCESS: {
        const cartItems = action.payload.cartItems;
        return {
          ...state,
          cartItems: cartItems,
          cart: action.payload,
          loading: false,
          ...calculateCartTotals(cartItems), // Recalculate totals
        };
      }
  
      case GET_CART_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
  
      case REMOVE_CART_ITEM_REQUEST:
      case UPDATE_CART_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case REMOVE_CART_ITEM_SUCCESS: {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        return {
          ...state,
          cartItems: updatedCartItems,
          loading: false,
          ...calculateCartTotals(updatedCartItems), // Recalculate totals
        };
      }
  
      case UPDATE_CART_ITEM_SUCCESS: {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
          loading: false,
          ...calculateCartTotals(updatedCartItems), // Recalculate totals
        };
      }
  
      case REMOVE_CART_ITEM_FAILURE:
      case UPDATE_CART_ITEM_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  