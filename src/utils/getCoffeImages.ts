import expresso from '../assets/expresso.svg';
import americano from '../assets/americano.svg';
import arabe from '../assets/arabe.svg';
import cafecomleite from '../assets/cafecomleite.svg';
import cafegelado from '../assets/cafegelado.svg';
import capuccino from '../assets/capuccino.svg';
import chocolatequente from '../assets/chocolatequente.svg';
import cubano from '../assets/cubano.svg';
import expressocremoso from '../assets/expressocremoso.svg';
import havaiano from '../assets/havaiano.svg';
import irlandes from '../assets/irlandes.svg';
import latte from '../assets/latte.svg';
import macchiato from '../assets/macchiato.svg';
import mochaccino from '../assets/mochaccino.svg';
import { COFFE_TYPES } from '../constants/CoffeTypes';

export const getCoffeImages = (coffeName: COFFE_TYPES) => {
  switch (coffeName) {
    case COFFE_TYPES.AMERICANO:
      return americano;
    case COFFE_TYPES.ARABE:
      return arabe;
    case COFFE_TYPES.CAFE_COM_LEITE:
      return cafecomleite;
    case COFFE_TYPES.CAFE_GELADO:
      return cafegelado;
    case COFFE_TYPES.CAPUCCINO:
      return capuccino;
    case COFFE_TYPES.CHOCOLATE_QUENTE:
      return chocolatequente;
    case COFFE_TYPES.CUBANO:
      return cubano;
    case COFFE_TYPES.EXPRESSO_CREMOSO:
      return expressocremoso;
    case COFFE_TYPES.HAVAIANO:
      return havaiano;
    case COFFE_TYPES.IRLANDES:
      return irlandes;
    case COFFE_TYPES.LATTE:
      return latte;
    case COFFE_TYPES.MACCHIATO:
      return macchiato;
    case COFFE_TYPES.MOCHACCINO:
      return mochaccino;
    case COFFE_TYPES.EXPRESSO:
      return expresso;

    default:
      return expresso;
  }
};
