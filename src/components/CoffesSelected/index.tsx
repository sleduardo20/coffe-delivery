import styled from 'styled-components';
import { useCoffesContext } from '../../contexts/useCoffes';
import { CoffeItem } from './CoffeItem';

export function CoffesSelected() {
  const { coffes, removeFromCard } = useCoffesContext();

  return (
    <CoffesSelectedContainer>
      {coffes.map((coffe) => (
        <div key={coffe.name}>
          <CoffeItem {...coffe} removeCoffe={() => removeFromCard(coffe.id)} />
          <Divider />
        </div>
      ))}
    </CoffesSelectedContainer>
  );
}

const CoffesSelectedContainer = styled.ul``;
const Divider = styled.div`
  margin: 2.4rem 0;
  height: 0.1rem;
  width: 36.8rem;
  background: ${({ theme }) => theme.button};
`;
