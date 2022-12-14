import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Wrapper } from '../Wrapper';

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />

      <Outlet />
    </DefaultLayoutContainer>
  );
}

const DefaultLayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
