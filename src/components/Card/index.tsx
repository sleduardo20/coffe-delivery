import { useEffect, useState } from 'react';
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
import { useCoffesContext } from '../../contexts/useCoffes';
import { formatedPrice } from '../../utils/formatValues';

interface Props {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export function Card({ id, description, image, name, price, tags }: Props) {
  const [quantity, setQuantity] = useState(0);

  const { addToCard } = useCoffesContext();

  useEffect(() => {
    if (quantity <= 0) {
      setQuantity(0);
    }
  }, [quantity]);

  const emptyQuantity = quantity === 0;

  const coffe = {
    id,
    name,
    quantity,
    price,
    image,
  };

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
          <strong>{formatedPrice(price)}</strong>
        </Price>

        <ActionButton $emptyQuantity={emptyQuantity}>
          <Minus
            weight="fill"
            size={14}
            onClick={() => setQuantity((state) => state - 1)}
          />
          <span>{quantity}</span>
          <Plus
            weight="fill"
            size={14}
            onClick={() => setQuantity((state) => state + 1)}
          />
        </ActionButton>

        <AddCardButton
          title="Adicionar no carrinho"
          onClick={() => addToCard(coffe)}
        >
          <ShoppingCart weight="fill" size={24} />
        </AddCardButton>
      </Footer>
    </CardContainer>
  );
}
