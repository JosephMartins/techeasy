import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/auth';
import { Routes } from './routes';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <GlobalStyle />
      </BrowserRouter>

  );
}

export default App;
