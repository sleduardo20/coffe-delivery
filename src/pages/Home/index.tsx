import { Card } from '../../components/Card';
import { Banner } from '../../components/Banner';
import { Wrapper } from '../../components/Wrapper';
import styled from 'styled-components';
import { availableCoffes } from './mock';

export function Home() {
  return (
    <>
      <Banner />
      <CoffeSection>
        <h3>Nossos cafés</h3>
        <CoffeList>
          {availableCoffes.map((coffe) => (
            <Card key={coffe.name} {...coffe} />
          ))}
        </CoffeList>
      </CoffeSection>
    </>
  );
}

const CoffeSection = styled(Wrapper)`
  margin-top: 4.8rem;

  h3 {
    font-size: 3.2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    color: ${({ theme }) => theme.subTitle};
    margin-bottom: 5.6rem;
  }
`;

const CoffeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 25.6rem);
  gap: 6rem;
  justify-items: center;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 25.6rem);
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 25.6rem);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
