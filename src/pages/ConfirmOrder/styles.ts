import styled, { css } from 'styled-components';
import { Wrapper } from '../../components/Wrapper';

export const ConfirmOrderContainer = styled(Wrapper)``;

export const FormWrapper = styled.form`
  margin-top: 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3.2rem;

  h3 {
    color: ${({ theme }) => theme.subTitle};
    font-size: 1.8rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
`;

export const FinisherOrderSection = styled.section`
  width: 64rem;
`;

const DefaultStyles = css`
  background: ${({ theme }) => theme.card};
  border-radius: 0.6rem;
  padding: 4rem;
`;

export const CoffesSelectedSection = styled.section``;

export const DeliverySection = styled.div`
  ${DefaultStyles}
`;

interface TitleProps {
  iconColor: 'yellowDark' | 'purple';
}

export const Title = styled.div<TitleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3.2rem;

  strong {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 400;
  }

  svg {
    color: ${({ theme, iconColor }) => theme[iconColor]};
  }

  span {
    font-size: 1.4rem;
    margin-left: 2.6rem;
  }
`;

export const Field = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Payment = styled.section`
  ${DefaultStyles}
  margin-top: 1.2rem;
`;

export const ConfirmItems = styled.div`
  width: 44.8rem;
  height: 49.8rem;
  border-radius: 0.6rem 4.4rem 0.6rem 4.4rem;
  background: ${({ theme }) => theme.card};
  padding: 4rem;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.2rem;

  span {
    font-size: 1.4rem;
    line-height: 1.82rem;
  }

  strong {
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.subTitle};
  }
`;

export const ConfirmOrderButton = styled.button`
  margin-top: 1.2rem;
  background: ${({ theme }) => theme.yellow};
  border-radius: 0.6rem;
  width: 100%;
  height: 4.6rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 1.4rem;
  padding: 1.2rem 0.8rem;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.yellowDark};
  }
`;
