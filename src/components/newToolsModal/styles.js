import styled from 'styled-components';

export const Container = styled.form`
h2{
  color: var(--text);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

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

button[type="submit"]{
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  color: var(--white);
  border-radius: 0.25rem;
  background: var(--blue);
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  transition: 0.2s;
  font-weight: 600;

  &:hover{
    filter: brightness(0.9);
  }
}
`;