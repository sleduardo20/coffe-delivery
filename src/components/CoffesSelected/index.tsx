import styled from 'styled-components';
import { CoffeItem } from './CoffeItem';

import mockCoffesSelected from './mock';

export function CoffesSelected() {
  return (
    <CoffesSelectedContainer>
      {mockCoffesSelected.map((coffe) => (
        <div key={coffe.name}>
          <CoffeItem {...coffe} removeCoffe={() => console.log('remover')} />
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
