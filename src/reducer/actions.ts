import { CoffeState } from './coffeReducer';

export enum ACTION_TYPES {
  ADD_TO_CARD = 'ADD_TO_CARD',
  REMOVE_FROM_CARD = 'REMOVE_FROM_CARD',
}

export const addToCardAction = (coffe: CoffeState) => {
  return {
    type: ACTION_TYPES.ADD_TO_CARD,
    payload: {
      coffe,
    },
  };
};

export const removeFromCardAction = (id: string) => {
  return {
    type: ACTION_TYPES.REMOVE_FROM_CARD,
    payload: {
      id,
    },
  };
};

export type Action = {
  type: ACTION_TYPES;
  payload: any;
};
