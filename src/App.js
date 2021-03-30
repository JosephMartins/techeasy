import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/auth';
import { Routes } from './routes';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
