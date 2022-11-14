import styled from 'styled-components';
import { Wrapper } from '../../components/Wrapper';

export const ConfirmedOrderContainer = styled(Wrapper)`
  h1 {
    color: ${({ theme }) => theme.yellowDark};
    font-weight: 800;
    font-size: 3.2rem;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 0.8rem;
  }

  h5 {
    font-size: 2rem;
    color: ${({ theme }) => theme.subTitle};
    margin-bottom: 4rem;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10.2rem;
  }

  svg {
    color: ${({ theme }) => theme.white};
    size: 1.6rem;
  }
`;

export const SectionLeft = styled.section`
  width: 52.6rem;
  height: 27rem;
  border-style: solid;

  border: double 1.5px transparent;
  border-radius: 0.6rem 3.6rem;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-image: linear-gradient(white, white),
    radial-gradient(
      circle at top left,
      ${({ theme }) => theme.yellow},
      ${({ theme }) => theme.purple}
    );
`;

export const InfoOrder = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: flex-start;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  p {
    width: fit-content;

    span {
      font-weight: 800;
    }
  }
`;

const COLORS_CIRCLE = {
  yellow: 'yellow',
  purple: 'purple',
  yellowDark: 'yellowDark',
} as const;

export const CicleIcon = styled.div<{ $color: keyof typeof COLORS_CIRCLE }>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: ${({ theme, $color }) => theme[$color]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionRight = styled.section`
  img {
    width: 49.2rem;
  }
`;
