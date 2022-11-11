import { Minus, Plus, Trash } from 'phosphor-react';
import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  image: string;
  price: string;
  removeCoffe: () => void;
}

export function CoffeItem({ name, image, price, removeCoffe }: Props) {
  const [quantity, setQuantity] = useState(0);
  return (
    <CoffeItemContainer>
      <img src={image} alt="Image do cafe" />

      <Details>
        <Info>
          <Description>{name}</Description>
          <ActionsButton>
            <AddRemoveQuantityButton>
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
            </AddRemoveQuantityButton>
            <RemoveCoffeButton type="button" onClick={removeCoffe}>
              <Trash size={16} />
              Remover
            </RemoveCoffeButton>
          </ActionsButton>
        </Info>
      </Details>
      <Price>R$ {price}</Price>
    </CoffeItemContainer>
  );
}

const CoffeItemContainer = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.6rem;

  img {
    width: 6.4rem;
  }
`;

const Details = styled.div`
  flex: 1;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const Description = styled.span`
  text-transform: capitalize;
`;

const Price = styled.strong``;

export const AddRemoveQuantityButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  height: 3.8rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.title};

  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.purple};
  }
`;

const ActionsButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const RemoveCoffeButton = styled.button`
  height: 3.8rem;
  width: 9.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.8rem;
  border-radius: 0.6rem;
  gap: 0.8rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;

  svg {
    color: ${({ theme }) => theme.purple};
  }
  background: ${({ theme }) => theme.button};
`;
