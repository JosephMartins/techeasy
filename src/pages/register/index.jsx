import { Container, Content, AnimationContainer, Background } from './styles';
import { Link } from 'react-router-dom';

export function Register(){
  return(
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <h1>EasyTech</h1>

          <form onSubmit="">
            <h2>Faça seu cadastro</h2>

            <input name="email"  placeholder="E-mail" />

            <input
              name="password"
              type="password"
              placeholder="Senha"
            />

            <input
              name="password"
              type="password"
              placeholder="Confirme a senha"
            />

            <button type="submit">Cadastrar</button>
          </form>

          <Link to="/login">
            Fazer login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
}