import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import {Container, Content, Header, Input, ToolsPost, Post } from './styles';

export function Home(){
  const [posts, setPosts] = useState([]);
    useEffect(() => {
       api.get('/').then(response => {
        setPosts(response.data);
      });
    }, []);
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
            <button>Add</button>
          </form>
        </Header>
        <ToolsPost>
          {posts.map(post => (
        <Post>
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