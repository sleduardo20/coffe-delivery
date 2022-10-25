import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Wrapper } from '../Wrapper';

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </DefaultLayoutContainer>
  );
}

const DefaultLayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
