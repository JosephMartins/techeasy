import { Container, Content, AnimationContainer, Background } from './styles';
import { Link } from 'react-router-dom';

export function Login(){
  return(
    <Container>
      <Content>
        <AnimationContainer>
          <h1>EasyTech</h1>

          <form onSubmit="">
            <h2>Faça seu login</h2>

            <input name="email"  placeholder="E-mail" />

            <input
              name="password"
              type="password"
              placeholder="Senha"
            />

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