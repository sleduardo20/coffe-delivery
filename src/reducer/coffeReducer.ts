import { Action, ACTION_TYPES } from './actions';
import produce from 'immer';

export interface Coffe {
  name: string;
  quantity: number;
  price: number;
  image: string;
  description: string;
  tags: string[];
}

export interface CoffeState {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface State {
  coffes: CoffeState[];
}

export const coffeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CARD:
      return produce(state, (draft) => {
        draft.coffes.push(action.payload.coffe);
      });
    case ACTION_TYPES.REMOVE_FROM_CARD:
      return produce(state, (draft) => {
        draft.coffes.filter((coffe) => coffe.name !== action.payload.coffename);
      });

    default: {
      return state;
    }
  }
};
