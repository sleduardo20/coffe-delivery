import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box;
  }
  
  :focus{
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }

  input,button {
    border: none;
    outline: none;
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color:${({ theme }) => theme.yellowDark} ${({ theme }) =>
  theme.white};
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background:${({ theme }) => theme.white};
  }

  *::-webkit-scrollbar-thumb {
    background-color:${({ theme }) => theme.yellowDark};
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.white};;
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
