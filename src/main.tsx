import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ReactDOM from 'react-dom/client';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <h1>Hello, 3d-avatar!</h1>
  </ThemeProvider>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

