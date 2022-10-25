import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Router';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
