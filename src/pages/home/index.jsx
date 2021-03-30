import { useState } from 'react';
import {Container, Content, Header, Input, ToolsPost, Post } from './styles';
import {NewToolsModal} from '../../components/newToolsModal';
import { useAuth } from '../../hooks/auth';
import { useTools } from '../../hooks/tools';

export function Home(){
  const [isNewToolsModal, setIsNewToolsModal] = useState(false);
  const { signOut } = useAuth();
  const { tools, createTools } = useTools();
  
  function handleSignOut(){
    return signOut()
  }


    function handleOpenNewToolsModal(){
      setIsNewToolsModal(true);
    }

    function handleCloseNewToolsModal(){
      setIsNewToolsModal(false);
    }


  return(
    <Container>
      <Content>
        <Header>
          <div className="loggout-group">
            <h1>VUTTR</h1>
            <button className="loggout" onClick={handleSignOut}>Loggout</button>
          </div>
          <h3>Very Useful Tools to Remember</h3>
          <form action="">
            <div className="input-group">
            <Input>
              <input type="text" placeholder="Tags"/>
            </Input>
              <label htmlFor="">
                <input type="checkbox" name="" id=""/>
                search in tags only
              </label>
            </div>
            <button  onClick={handleOpenNewToolsModal} type="button">Add</button>
            <NewToolsModal 
              isOpen={isNewToolsModal} 
              tools={tools}
              createTools={createTools}
              onRequestClose={handleCloseNewToolsModal}
            />
          </form>
        </Header>
        <ToolsPost>
        {tools.map(tool => (
          <Post key={tool.id}>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
            <ul>
            {tool.tags.map(tag => (
              <li key={tag}>#{tag}</li>
            ))}
            </ul>
          </Post>
        ))}
      </ToolsPost>
      </Content>
    </Container>
  );
}