import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
   --white: #fff;
   --background: #f2f3f5;
   --gray-line: #dcdde0;
   --text: #666666;
   --text-hightlight: #b3b9ff;
   --title: #2e384d;
   --blue: #5965e0;
   --blue-dark: #4953b8;
   --black: #151419;
   --blue-twitter: #2aa9e0;
}

@media(max-width: 1080px){
  html{
    font-size: 93.75%;
  }
}

@media(max-width: 720px){
  html{
    font-size: 87.5%;
  }
}

html{
  background: linear-gradient(0deg,rgb(49 49 49) -82%,rgba(0,0,0,1) 100%) no-repeat;

}

body {
  color: var(--white);
}

body, input, textarea, button{
  font: 400 1rem 'Inter', sans-serif;
}

button{
  cursor: pointer;
}

a{
  color: inherit;
  text-decoration: none;
}

.react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;

    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    outline: none;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    outline: none;
    transition: 0.2s;
    
    &:hover{
      filter: brightness(0.9);
    }
  }
`;
 
export default GlobalStyle;