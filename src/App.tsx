import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h1>Home</h1>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
