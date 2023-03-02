import { CoffeState } from '../reducer/coffeReducer';

export const formatedPrice = (price: number) =>
  price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export const sumCoffeValues = (coffes: CoffeState[]) => {
  let total = 0;
  coffes.forEach((coffe) => {
    const itemTotal = coffe.quantity * coffe.price;
    total += itemTotal;
  });

  const deliveryValue = 3.7;

  return formatedPrice(total + deliveryValue);
};
