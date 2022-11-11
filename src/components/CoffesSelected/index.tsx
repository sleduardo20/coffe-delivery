import styled from 'styled-components';
import { CoffeItem } from './CoffeItem';

import mockCoffesSelected from './mock';

export function CoffesSelected() {
  return (
    <CoffesSelectedContainer>
      {mockCoffesSelected.map((coffe) => (
        <>
          <CoffeItem
            key={coffe.name}
            {...coffe}
            removeCoffe={() => console.log('remover')}
          />
          <Divider />
        </>
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
