import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 25.6rem;
  height: 32rem;
  background: ${({ theme }) => theme.card};
  display: flex;
  border-radius: 0.6rem 3.6rem;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  img {
    margin-top: -4.8rem;
    margin-bottom: 1.2rem;
  }
`;

export const Tags = styled.div`
  margin-bottom: 1.6rem;
`;

export const Tag = styled.div`
  width: 8rem;
  height: 2rem;
  border-radius: 0.8rem;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.yellowDark};
  background: ${({ theme }) => theme.yellowLight};
`;

export const CoffeName = styled.strong`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  margin-bottom: 0.8rem;
  text-transform: capitalize;
  font-weight: 700;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.subTitle};
`;

export const CoffeDescription = styled.p`
  font-size: 1.4rem;
  margin-bottom: 6.8rem;
  text-align: center;
  font-weight: 400;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.label};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 0.8rem;
`;

export const Price = styled.div`
  margin-right: 3.2rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.4rem;
  span {
    font-size: 1.2rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.4rem;
  }
`;

export const ActionButton = styled.div`
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

export const AddCardButton = styled.button`
  height: 3.8rem;
  width: 3.8rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.purpleDark};

  svg {
    fill: ${({ theme }) => theme.white};
  }
`;
