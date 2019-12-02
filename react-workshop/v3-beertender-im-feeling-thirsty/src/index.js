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
import { BeerDescription } from './components/BeerDescription'

const jsonDesc = require('./beerDescription.json')

function App() {
  return (
    <>
      <GlobalStyle/>
      <GridContainer>
        <MainContent>
          <Suggestions>
            <h2>Left side</h2>
          </Suggestions>
          <Content>
            <BeerDescription name={jsonDesc.name} description={`${jsonDesc.description} ${jsonDesc.brewers_tips}`} url={jsonDesc.image_url}/>
          </Content>
        </MainContent>
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

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)
ReactDOM.render(<App/>, rootElement)
