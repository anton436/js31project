export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return !cart ? cart.product.length : 0;
}

export const calcSubPrice = (product) => {
  return +product.count * product.item;
};

export const calcTotalPrice = (products) => {
  return products.reduce((acc, curr) => {
    return (acc += curr.subPrice);
  }, 0);
};
