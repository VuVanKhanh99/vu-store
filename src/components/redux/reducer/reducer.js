export const initialState = {
  user: "",
  basket: [],
  subPrice:0,
  totalPrice :0,
  quantity:0
};
export const getBasketTotal = basket =>
basket?.reduce((amount,item) => item.price +amount,0);



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add-user":
      return {
        user: action.payload,
      };

    case "remove-user":
      return {
        user: "",
      };

    case "add-basket-item":
     quantity += action.payload.quantity;
      return {
        ...state,
        basket: [...state.basket, action.payload.item,...state.quantity,state.quantity],
      };

    case "remove-basket-item":
      
      const index = state.basket.findIndex(
        (itemRemove) => itemRemove.id === action.payload.id
      );
        
      if (index >= 0) state.basket.splice(index, 1);
      return {
        ...state,
        basket: [...state.basket],
      };
    case "update-item-price":
      state.totalPrice += action.payload;
        return{
          ...state,
          subPrice : action.payload,
          totalPrice:[...state.totalPrice,state.totalPrice]
    }
    case "incre-quantity":
      return{
        
      }
    default:
      return state;
  }
};

export default reducer;
