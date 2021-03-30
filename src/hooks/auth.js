import { createContext, useCallback, useState, useContext } from 'react';
import { api } from '../service/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Techeasy:token');
    const user = localStorage.getItem('@Techeasy:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }
    return {};
  });


  const signIn = useCallback(async ({ email, password }) => {
    const reseponse = await api.post('sessions', { email, password });
    const { token, user } = reseponse.data;

    localStorage.setItem('@Techeasy:token', token);
    localStorage.setItem('@Techeasy:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Techeasy:token');
    localStorage.removeItem('@Techeasy:user');

    setData({});
  }, []);


  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );

}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth};
