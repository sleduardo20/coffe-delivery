import { Card } from '../../components/Card';
import { Banner } from '../../components/Banner';
import { Wrapper } from '../../components/Wrapper';
import styled from 'styled-components';
import mock from './mock';
import { useCoffesContext } from '../../contexts/useCoffes';
import { useEffect } from 'react';
import { getCoffeImages } from '../../utils/getCoffeImages';
import { COFFE_TYPES } from '../../constants/CoffeTypes';

export function Home() {
  const { coffes, setCurrentCoffes } = useCoffesContext();

  console.log(coffes);

  useEffect(() => {
    const currentCoffes = mock.map((coffe) => ({
      name: coffe.name,
      quantity: 0,
      price: Number(coffe.price),
      image: getCoffeImages(coffe.image as COFFE_TYPES) as string,
      description: coffe.description,
      tags: coffe.tags,
    }));

    setCurrentCoffes(currentCoffes);
  }, []);

  return (
    <>
      <Banner />
      <CoffeSection>
        <h3>Nossos cafés</h3>
        <CoffeList>
          {coffes.map((coffe) => (
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
