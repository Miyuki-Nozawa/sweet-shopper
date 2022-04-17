import axios from 'axios';


const ADD_TO_CART = 'ADD_TO_CART';


export const addToCart = (candy,cart)=>{
  return async(dispatch)=>{
    //TODO
    if(!window.localStorage.token){
      //not logged in
      //get cart from windows local storage

    }
    else{
      //if cart exists get all line items with that cart number then search for line item with our candy #
      const line = cart.lineitems.find(_line => {
        return _line.candyId === candy.id;
      })

      //if no line item exist create one to add to cart
      if(!line){
      await axios.post('/api/lineItem',{cartId:cart.id, qty: 1, candyId: candy.id}); 
      }
      else{
        //else update line item in cart 
        await axios.put(`/api/lineItem/${line.id}`, {...line, ...{qty: line.qty + 1}});
      }

      dispatch({
        type: ADD_TO_CART,
        cart
      })
    }
  }
};

export default (state = {}, action) => {
  if(action.type === ADD_TO_CART){
    return action.cart;
  }

  return state;
}