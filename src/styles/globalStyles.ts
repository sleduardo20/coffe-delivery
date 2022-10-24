import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box;
  }
  :focus{
    outline: 0;

  html {
    font-size: 62.5%;
  }

  input,button {
    outline: none;

  }
    
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size:  1.6rem;
    }
`;
