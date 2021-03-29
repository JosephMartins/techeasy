import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import {Container, Content, Header, Input, ToolsPost, Post } from './styles';
import {NewToolsModal} from '../../components/newToolsModal';

export function Home(){
  const [isNewToolsModal, setIsNewToolsModal] = useState(false);
  const [posts, setPosts] = useState([]);


    useEffect(() => {
       api.get('/').then(response => {
        setPosts(response.data);
      });
    }, []);

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
          <h1>VUTTR</h1>
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
            setPosts={setPosts}
            posts={posts}
            onRequestClose={handleCloseNewToolsModal}
            />
          </form>
        </Header>
        <ToolsPost>
        {posts.map(post => (
          <Post key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <ul>
            {post.tags.map(tag => (
              <li>#{tag}</li>
            ))}
            </ul>
          </Post>
        ))}
      </ToolsPost>
      </Content>
    </Container>
  );
}