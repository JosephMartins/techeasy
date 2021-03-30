import { createContext, useState, useContext, useEffect  } from 'react';
import { api } from '../service/api';

const ToolsContext = createContext({});

export function ToolsProvider({ children }) {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    api.get('/').then(response => {
      setTools(response.data);
    })
  }, []);

  async function createTools(toolsInput){
    await api.post('/', {...toolsInput});
    await api.get('/').then(response => {
      setTools(response.data);
    })
  }

  return(
    <ToolsContext.Provider value={{ tools, createTools }}>
      {children}
    </ToolsContext.Provider>
  );

}

export function useTools(){
  const context = useContext(ToolsContext);
  return context;
}
