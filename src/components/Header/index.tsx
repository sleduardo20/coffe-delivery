import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoCoffeDelivery from '../../assets/logo.svg';
import { useCoffesContext } from '../../contexts/useCoffes';
import { Wrapper } from '../Wrapper';

export function Header() {
  const navigate = useNavigate();
  const { coffes } = useCoffesContext();

  const totalCoffes = coffes.length;
  return (
    <Wrapper>
      <HeaderContainer>
        <Link to="/">
          <img src={logoCoffeDelivery} alt="Logo Coffe Delivery" />
        </Link>

        <SideRigth>
          <Location>
            <MapPin weight="fill" size={22} />
            <span>Porto Alegre, RS</span>
          </Location>

          <CardButton
            title="Confirmar Pedido"
            onClick={() => navigate('/confirmOrder')}
          >
            <ShoppingCart weight="fill" size={22} />
            {totalCoffes > 0 && <small>{totalCoffes}</small>}
          </CardButton>
        </SideRigth>
      </HeaderContainer>
    </Wrapper>
  );
}

const HeaderContainer = styled.header`
  height: 10.4rem;
  width: 100%;
  padding: 3.2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SideRigth = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const Location = styled.div`
  height: 3.8rem;
  width: 14.3rem;
  background: ${({ theme }) => theme.purpleLight};
  border-radius: 0.8rem;
  padding: 1.2rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.purpleDark};

  svg {
    fill: ${({ theme }) => theme.purpleDark};
  }
`;

const CardButton = styled.button`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 0.8rem;
  padding: 0.8rem;
  background: ${({ theme }) => theme.yellowLight};
  position: relative;

  svg {
    fill: ${({ theme }) => theme.yellowDark};
  }

  small {
    position: absolute;
    bottom: 2.8rem;
    left: 2.8rem;
    height: 2rem;
    width: 2rem;
    padding: 0.2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.yellowDark};
    color: ${({ theme }) => theme.white};
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
