import React from 'react'
import ReactDOM from 'react-dom'
import {
  GridContainer,
  Suggestions,
  Content,
  Header,
  Footer,
  MainContent
} from './Layout'
import { GlobalStyle } from './theme'
import { BeerDescription, ConnectedBeerDescription } from './components/BeerDescription'
import FeelingThirstyButton from './components/FeelingThirstyButton'

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import randomBeerReducers from './randomBeerReducer'

const jsonDesc = require('./beerDescription.json')

const store = createStore(randomBeerReducers, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <GridContainer>
        <MainContent>
          <Suggestions>
            <FeelingThirstyButton/>
          </Suggestions>
          <Content>
            <BeerDescription name={jsonDesc.name} description={`${jsonDesc.description} ${jsonDesc.brewers_tips}`}
                             url={jsonDesc.image_url}/>
            <ConnectedBeerDescription/>
          </Content>
        </MainContent>
        <Header>
          <h1>With great layout comes great responsability</h1>
        </Header>
        <Footer>
          <h3>this is why we don't let dev choose colors</h3>
        </Footer>
      </GridContainer>
    </Provider>
  )
}

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)
ReactDOM.render(<App/>, rootElement)
