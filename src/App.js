import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/auth';
import { ToolsProvider } from './hooks/tools';
import { Routes } from './routes';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <ToolsProvider>
            <Routes />
          </ToolsProvider>
        </AuthProvider>
        <GlobalStyle />
      </BrowserRouter>

  );
}

export default App;
