import { Container, Content, AnimationContainer, Background } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function Login(){
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  async function handleSubmit(event){
    event.preventDefault();
    try{
    await signIn({
      email: email,
      password: password,
    });
    history.push('/home');
    
    return
    }catch(err){
      setError('Credenciais inválidas');
      return err;
    }
  }

  return(
    <Container>
      <Content>
        <AnimationContainer>
          <h1>TechEasy</h1>

          <form onSubmit={handleSubmit}>
            <h2>Faça seu login</h2>
            <div>
              <input 
                name="email"  
                placeholder="Ex: exemplo@gmail.com"
                value={email} 
                onChange={event => setEmail(event.target.value)} 
              />
              <p>{error}</p>
             </div>
             <div>
              <input
                name="password"
                type="password"
                placeholder="Senha"
                value={password} 
                onChange={event => setPassword(event.target.value)} 
              />
              <p>{error}</p>

             </div>

             <p>{error}</p>


            <button type="submit">Entrar</button>
          </form>

          <Link to="/register">
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
}