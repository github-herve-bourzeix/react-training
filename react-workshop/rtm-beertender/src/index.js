import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import BeerList from './components/BeerList'
import Form from './components/Form'
import FoodPairing from './components/FoodPairing'
import {
  GridContainer,
  MainContent,
  Suggestions,
  Content,
  Header,
  Footer
} from './Layout'
import { createGlobalStyle } from 'styled-components'
import BeerDescription from './components/BeerDescription'


// let's have a pretty layout base
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
const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <>
      <GlobalStyle/>
      <Provider store={store}>
        <GridContainer>
          <MainContent>
            <Suggestions>
              <BeerList/>
            </Suggestions>
            <Content>
              <BeerDescription/>
            </Content>
          </MainContent>
          <Header>
            <Form/>
          </Header>
          <Footer>
            <FoodPairing/>
          </Footer>
        </GridContainer>
      </Provider>
    </>
  )
}

const rootElement = document.createElement('div');
document.body.appendChild(rootElement)
ReactDOM.render(<App />, rootElement);
