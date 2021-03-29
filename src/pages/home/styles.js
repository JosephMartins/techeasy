import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: linear-gradient(0deg,rgb(49 49 49) -82%,rgba(0,0,0,1) 100%) no-repeat;
  height: 100vh;
`; 


export const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100vh;
`; 


export const Header = styled.div`
  h1{
    margin-top: 5rem;
    font-size: 3.8rem;
    color: #fff;
    font-weight: 600;
  }

  h3{
    font-size: 2rem;
    margin-top: 2rem;
    color: #fff;

  }

  form{
    display: flex;
    margin-top: 2rem;
    color: #fff;
    width: 100%;
    justify-content: space-between;

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      border-radius: 0.5rem;
      background: #5965e0;
      color: #fff;
      border: none;
      height: 2rem;

    }
  }


  div.input-group{
    display: flex;
    align-items: center;


    label{
      margin-left: 1rem;
      font-size: 1rem;
      display: flex;
      align-items: center;

      
      input{
        margin-right: 0.5rem;

        
      }
    }
  }
`; 


export const Input = styled.div`
  input{
    height: 2.5rem;
    padding: 0 0.5rem;
    outline: none;
    border-radius: 0.5rem;
    border: none;


    &:focus{
      box-shadow: 1px 1px 6px white;
    }
  }
`;


export const ToolsPost = styled.div`
  background: var(--white);
  color: var(--black);
  margin-top: 1rem;
  border-radius: 0.5rem 0.5rem 0 0 ;
  height: 600px;
  overflow: auto;
`;


export const Post = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding: 1rem 2rem;

  h3{
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p{
    color: #585858;
  }

  ul{
    list-style: none;
    display: flex;
    margin-top: 0.5rem;
    flex-wrap: wrap;
  
    li{
      margin-right: 1rem;
      color: #5965e0;
    }
  }


  

`;
