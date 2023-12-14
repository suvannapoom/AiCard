export const sumPrice = (data) => {
  return data.reduce((acc, cur) => {
    return (acc += cur.amount * cur.price);
  }, 0);
};
