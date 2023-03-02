import { COFFE_TYPES } from '../../constants/CoffeTypes';
import { getCoffeImages } from '../../utils/getCoffeImages';

const mock = [
  {
    id: '01',
    name: 'expresso tradicional',
    image: 'expresso',
    tags: ['tradicional', 'especial'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9.90',
  },
  {
    id: '02',
    name: 'expresso americano',
    image: 'americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9.90',
  },
  {
    id: '03',
    name: 'expresso cremoso',
    image: 'expressocremoso',
    tags: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9.90',
  },
  {
    id: '04',
    name: 'expresso gelado',
    image: 'cafegelado',
    tags: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9.90',
  },
  {
    id: '05',
    name: 'café com leite',
    image: 'cafecomleite',
    tags: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9.90',
  },
  {
    id: '06',
    name: 'latte',
    image: 'latte',
    tags: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9.90',
  },
  {
    id: '07',
    name: 'capuccino',
    image: 'capuccino',
    tags: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9.90',
  },
  {
    id: '08',
    name: 'macchiato',
    image: 'macchiato',
    tags: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9.90',
  },
  {
    id: '09',
    name: 'mochaccino',
    image: 'mochaccino',
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9.90',
  },
  {
    id: '10',
    name: 'chocolatequente',
    image: 'chocolatequente',
    tags: ['tradicional', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9.90',
  },
  {
    id: '11',
    name: 'cubano',
    image: 'cubano',
    tags: ['especial', 'gelado', 'alcoólico'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9.90',
  },
  {
    id: '12',
    name: 'havaiano',
    image: 'havaiano',
    tags: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9.90',
  },
  {
    id: '13',
    name: 'árabe',
    image: 'arabe',
    tags: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9.90',
  },
  {
    id: '14',
    name: 'irlandes',
    image: 'irlandes',
    tags: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9.90',
  },
];

export const availableCoffes = mock.map((coffe) => ({
  id: coffe.id,
  name: coffe.name,
  quantity: 0,
  price: Number(coffe.price),
  image: getCoffeImages(coffe.image as COFFE_TYPES).toString(),
  description: coffe.description,
  tags: coffe.tags,
}));
