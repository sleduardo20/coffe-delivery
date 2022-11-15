import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CoffesProvider } from './contexts/useCoffes';
import { Router } from './routes/Router';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CoffesProvider>
          <BrowserRouter>
            <Router />
            <GlobalStyles />
          </BrowserRouter>
        </CoffesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
