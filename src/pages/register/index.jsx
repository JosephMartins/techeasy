import { Container, Content, AnimationContainer, Background } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../service/api';

export function Register(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [erroPasswordConfirm, setErroPasswordConfirm] = useState('');
  const [userExists, setUserExists] = useState('');

  const history = useHistory();

  async function handleSubmit(event){
    event.preventDefault();
    if(password !== passwordConfirm){
      setErroPasswordConfirm('Senhas não conferem');
      return;
    }

    try{
      const response = await api.post('/users', {
        email,
        password,
      });

      console.log(response)
    setEmail('');
    setPassword('');
    history.push('/home');
    
    }catch(err){
      setUserExists('Email já está em uso!')
      return;
    }
  }


  return(
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <h1>EasyTech</h1>

          <form onSubmit={handleSubmit}>
            <h2>Faça seu cadastro</h2>
            <div>
              <input
                name="email" 
                placeholder="E-mail" 
                type="email"
                value={email} 
                onChange={event => setEmail(event.target.value)}  />
              <p>{userExists !== '' && (userExists) }</p>
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="Senha"
                value={password} 
                onChange={event => setPassword(event.target.value)} 
              />
              <p>{erroPasswordConfirm !== '' && (erroPasswordConfirm) }</p>
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="Confirme a senha"
                value={passwordConfirm} 
                onChange={event => setPasswordConfirm(event.target.value)} 
              />
             <p>{erroPasswordConfirm !== '' && (erroPasswordConfirm) }</p>
            </div>

            <button type="submit">Cadastrar</button>
          </form>

          <Link to="/">
            Fazer login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
}