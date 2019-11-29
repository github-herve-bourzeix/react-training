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

const jsonDesc =
  {
    id: 1,
    name: 'Buzz',
    tagline: 'A Real Bitter Experience.',
    first_brewed: '09/2007',
    description: 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    food_pairing:
      ['Spicy chicken tikka masala', 'Grilled chicken quesadilla', 'Caramel toffee cake'],
    brewers_tips:
      'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
  }

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
