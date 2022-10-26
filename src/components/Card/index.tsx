import {
  ActionButton,
  AddCardButton,
  CardContainer,
  CoffeDescription,
  CoffeName,
  Footer,
  Price,
  Tag,
  Tags,
} from './styles';

import mock from './mock';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';

export function Card() {
  const [quantity, setQuantity] = useState(0);
  return (
    <CardContainer>
      <img src={mock.image} alt="" />

      <Tags>
        <Tag>{mock.tags[0]}</Tag>
      </Tags>

      <CoffeName>{mock.name} </CoffeName>
      <CoffeDescription>{mock.description} </CoffeDescription>

      <Footer>
        <Price>
          <span>R$</span>
          <strong>{mock.price}</strong>
        </Price>

        <ActionButton>
          <Minus
            weight="fill"
            size={14}
            onClick={() => setQuantity(quantity - 1)}
          />
          <span>{quantity}</span>
          <Plus
            weight="fill"
            size={14}
            onClick={() => setQuantity(quantity + 1)}
          />
        </ActionButton>

        <AddCardButton>
          <ShoppingCart weight="fill" size={24} />
        </AddCardButton>
      </Footer>
    </CardContainer>
  );
}
