import React from 'react'
import ReactDOM from 'react-dom'
import {
  GridContainer,
  MainContent,
  Suggestions,
  Content,
  Header,
  Footer
} from './Layout'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
        <GridContainer>
          {/*<MainContent>*/}
            <Suggestions>
              <h2>Left side</h2>
            </Suggestions>
            <Content>
              <h2>Right side</h2>
            </Content>
          {/*</MainContent>*/}
          <Header>
            <h1>With great layout comes great responsability</h1>
          </Header>
          <Footer>
            <h3>this is why we don't let dev choose colors</h3>
          </Footer>
        </GridContainer>
    </>
  )
}

const rootElement = document.createElement('div');
document.body.appendChild(rootElement)
ReactDOM.render(<App />, rootElement);
