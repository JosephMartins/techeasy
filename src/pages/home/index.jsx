import {Container, Content, Header, Input, ToolsPost, Post } from './styles';

export function Home(){
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
        <Post>
          <h3>Json-server</h3>
          <p>Uma orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l</p>
          <ul>
            <li>#web</li>
            <li>#react</li>
            <li>#jwt</li>
          </ul>
        </Post>
        <Post>
          <h3>Json-server</h3>
          <p>Uma orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l</p>
          <ul>
            <li>#web</li>
            <li>#react</li>
            <li>#jwt</li>
          </ul>
        </Post>

        <Post>
          <h3>Json-server</h3>
          <p>Uma orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l</p>
          <ul>
            <li>#web</li>
            <li>#react</li>
            <li>#jwt</li>
          </ul>
        </Post>

        <Post>
          <h3>Json-server</h3>
          <p>Uma orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l</p>
          <ul>
            <li>#web</li>
            <li>#react</li>
            <li>#jwt</li>
          </ul>
        </Post>

        <Post>
          <h3>Json-server</h3>
          <p>Uma orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l</p>
          <ul>
            <li>#web</li>
            <li>#react</li>
            <li>#jwt</li>
          </ul>
        </Post>

        <Post>
          <h3>Json-server</h3>
          <p>Uma orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l</p>
          <ul>
            <li>#web</li>
            <li>#react</li>
            <li>#jwt</li>
          </ul>
        </Post>

        <Post>
          <h3>Json-server</h3>
          <p>Uma orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l</p>
          <ul>
            <li>#web</li>
            <li>#react</li>
            <li>#jwt</li>
          </ul>
        </Post>

        
      </ToolsPost>
      </Content>

      
    </Container>
  );
}