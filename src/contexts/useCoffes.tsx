import { createContext, useContext, useReducer } from 'react';
import {
  addToCardAction,
  removeFromCardAction,
  setCurrentCoffesAction,
} from '../reducer/actions';
import { Coffe, coffeReducer } from '../reducer/coffeReducer';

interface CoffeContextProps {
  coffes: Coffe[];
  addToCard: (coffe: Coffe) => void;
  removeFromCard: (name: string) => void;
  setCurrentCoffes: (coffes: Coffe[]) => void;
}

const CoffeContextData = createContext({} as CoffeContextProps);

interface CoffeProviderProps {
  children: React.ReactNode;
}

export const CoffesProvider = ({ children }: CoffeProviderProps) => {
  const [state, dispatch] = useReducer(coffeReducer, { coffes: [] });

  const addToCard = (coffe: Coffe) => dispatch(addToCardAction(coffe));

  const removeFromCard = (coffename: string) =>
    dispatch(removeFromCardAction(coffename));

  const setCurrentCoffes = (coffes: Coffe[]) =>
    dispatch(setCurrentCoffesAction(coffes));

  return (
    <CoffeContextData.Provider
      value={{
        coffes: state.coffes,
        addToCard,
        removeFromCard,
        setCurrentCoffes,
      }}
    >
      {children}
    </CoffeContextData.Provider>
  );
};

export const useCoffesContext = () => useContext(CoffeContextData);
