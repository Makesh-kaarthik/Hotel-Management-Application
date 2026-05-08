export const calculateTotal = (menuItems) => {
  return menuItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
};