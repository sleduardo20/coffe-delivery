import { useState } from 'react';
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

import { Minus, Plus, ShoppingCart } from 'phosphor-react';

interface Props {
  image: string;
  name: string;
  description: string;
  price: string;
  tags: string[];
}

export function Card({ description, image, name, price, tags }: Props) {
  const [quantity, setQuantity] = useState(0);
  return (
    <CardContainer>
      <img src={image} alt="" />

      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <CoffeName>{name} </CoffeName>
      <CoffeDescription>{description} </CoffeDescription>

      <Footer>
        <Price>
          <span>R$</span>
          <strong>{price}</strong>
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

        <AddCardButton title="Adicionar no carrinho">
          <ShoppingCart weight="fill" size={24} />
        </AddCardButton>
      </Footer>
    </CardContainer>
  );
}
