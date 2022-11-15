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

interface State {
  coffes: Coffe[];
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

    case ACTION_TYPES.SET_CURRENT_COFFES:
      return produce(state, (draft) => {
        draft.coffes = action.payload.coffes;
      });
    default: {
      return state;
    }
  }
};
