export const addUser = ({ email }) => {
  return {
    type: "add-user",
    payload: email,
  };
};

export const removeUser = () => {
  return {
    type: "remove-user",
  };
};

export const addToBasket = ({ item,quantity }) => {
  return {
    type: "add-basket-item",
    payload:{
      item:item,
      quantity:quantity
    }
  };
};
export const rmFromBasket = ({ item }) => {
  return {
    type: "remove-basket-item",
    payload:{
      id: item.id,
      quantity:1
    }
  };
};
export const updatePrice = ({price, quantity}) => {
  const resultPrice = quantity * price;
  return{
    type:'update-item-price',
    payload:resultPrice
  }
}