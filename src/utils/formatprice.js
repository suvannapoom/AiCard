export const formatPrice = (totalPrice) => {
  return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
