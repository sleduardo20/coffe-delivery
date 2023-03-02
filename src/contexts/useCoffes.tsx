import { createContext, useContext, useReducer } from 'react';
import { addToCardAction, removeFromCardAction } from '../reducer/actions';
import { CoffeState, coffeReducer } from '../reducer/coffeReducer';

interface CoffeContextProps {
  coffes: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  addToCard: (coffe: CoffeState) => void;
  removeFromCard: (name: string) => void;
}

const CoffeContextData = createContext({} as CoffeContextProps);

interface CoffeProviderProps {
  children: React.ReactNode;
}

export const CoffesProvider = ({ children }: CoffeProviderProps) => {
  const [state, dispatch] = useReducer(coffeReducer, { coffes: [] });

  const addToCard = (coffe: CoffeState) => dispatch(addToCardAction(coffe));

  const removeFromCard = (coffeId: string) => {
    dispatch(removeFromCardAction(coffeId));
  };

  return (
    <CoffeContextData.Provider
      value={{
        coffes: state.coffes,
        addToCard,
        removeFromCard,
      }}
    >
      {children}
    </CoffeContextData.Provider>
  );
};

export const useCoffesContext = () => useContext(CoffeContextData);
