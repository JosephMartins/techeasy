import styled, { keyframes } from 'styled-components';
import imageRegister from '../../assets/Designer_Flatline.svg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: linear-gradient(0deg,rgb(49 49 49) -82%,rgba(0,0,0,1) 100%) no-repeat;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  h1{
    color:#fff;
    font-size: 2rem;
  }

  form {
    input{
      width: 100%;
      padding: 0 1.5rem;
      height: 3rem;
      
      font-size: 1rem;
      font-weight: 400;

      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background: #e7e9ee;
      outline: none;

      &::placeholder{
        color: var(--text-body);
      }

      & + input{
        margin-top: 1rem;
      }

      &:focus{
        box-shadow: 1px 1px 5px #d7d7d7;
      }
    }

    margin: 80px 0;
    width: 340px;
    text-align: center;
    h2 {
      margin-bottom: 24px;
      color: #fff;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;
      
    }
  }

  > a {
    color: #68e1fd;;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
    }
  }

  button{
    height: 3rem;
    margin-top: 1.5rem;
    width: 100%;
    background: #68e1fd;
    border: 0;
    border-radius: 0.25rem;
    text-shadow: 1px 1px 5px #000;
    color: #fff;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${imageRegister}) no-repeat center;
  background-size: cover;
  transform: scaleX(-1);

`;
