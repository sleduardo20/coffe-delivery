export enum ACTION_TYPES {
  SET_CURRENT_COFFES = 'SET_CURRENT_COFFES',
  ADD_TO_CARD = 'ADD_TO_CARD',
  REMOVE_FROM_CARD = 'REMOVE_FROM_CARD',
  ADD_QUANTITY = 'ADD_QUANTITY',
  REMOVE_QUANTITY = 'REMOVE_QUANTITY',
}

interface Coffe {
  name: string;
  quantity: number;
  price: number;
  image: string;
  description: string;
  tags: string[];
}

export const setCurrentCoffesAction = (coffes: Coffe[]) => {
  return {
    type: ACTION_TYPES.SET_CURRENT_COFFES,
    payload: {
      coffes,
    },
  };
};
export const addToCardAction = (coffe: Coffe) => {
  return {
    type: ACTION_TYPES.ADD_TO_CARD,
    payload: {
      coffe,
    },
  };
};

export const removeFromCardAction = (coffename: string) => {
  return {
    type: ACTION_TYPES.REMOVE_FROM_CARD,
    payload: {
      coffename,
    },
  };
};

/* interface AddQuantity {
  type: ACTION_TYPES;
  payload: {
    quantity: number;
    coffename: string;
  };
}

interface RemoveQuantity {
  type: ACTION_TYPES;
  payload: {
    quantity: number;
    coffename: string;
  };
} */

export type Action = {
  type: ACTION_TYPES;
  payload?: any;
};
