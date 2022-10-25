import styled from 'styled-components';
import backgroundHomePage from '../../assets/backgroundHomePage.svg';
import { Wrapper } from '../Wrapper';

export const BannerContainer = styled.section`
  margin-top: 8.6rem;
  height: 54.4rem;
  width: 100%;
  background-image: url(${backgroundHomePage});
`;

export const ContentBanner = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.6rem;
`;

export const Info = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 4.8rem;
    color: ${({ theme }) => theme.title};
    font-weight: 800;
    max-width: 58.8rem;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme.title};
    font-weight: 400;
    max-width: 58.8rem;
  }
`;

export const BannerImage = styled.img``;

export const Skills = styled.div`
  margin-top: 6.4rem;
  display: grid;
  grid-template-columns: 23.2rem 23.2rem;
  column-gap: 4rem;
  row-gap: 2rem;
`;

export const SkillItem = styled.div<{
  backgroundColor: 'yellowDark' | 'text' | 'yellow' | 'purple';
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-right: 1.2rem;
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    padding: 0.8rem;
    background: ${({ theme, backgroundColor }) => theme[backgroundColor]};

    svg {
      fill: ${({ theme }) => theme.white};
    }
  }
`;
