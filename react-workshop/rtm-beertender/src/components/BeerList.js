import React, { createContext, useContext, useCallback, memo } from 'react'
import { connect } from 'react-redux'
import { getTop10Suggestions, getSelectedBeerName } from '../selectors'
import styled, { css } from 'styled-components'
import { selectBeer } from '../actions'
import { THEME_COLOR_3 } from '../theme'

const BeerListContext = createContext()
const nomemo = fn => fn
const Beer = ({ name, url }) => {
  const { selectedBeerName, onChange } = useContext(BeerListContext)
  const handleClick = useCallback(() => onChange(name), [name, onChange])
  return (
    console.info('render BEER ', name) || (
      <BeerContent onClick={handleClick} selected={name === selectedBeerName}>
        <img height="32px" width="16px" src={url} alt={`${name}`}/>
        <p>{name}</p>
      </BeerContent>
    )
  )
}

const BeerContent = styled.li`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  * {
    margin: 5px;
  }
  ${props =>
  props.selected &&
  css`
      background-color: lightcyan;
    `};
  img {
    background-color: red;
  }
  p {
    vertical-align: middle;
  }
`

const BeerContainer = styled.ol`
width: 100%;
li:nth-child(odd) {
background-color: ${THEME_COLOR_3};
}
`

const BeerList = ({ beers, selectedBeerName, onChange }) => (
  <BeerListContext.Provider value={{ selectedBeerName, onChange }}>
    <BeerContainer>
      {beers.map(({ name, url }) => (
        <Beer key={name} name={name} url={url}/>
      ))}
    </BeerContainer>
  </BeerListContext.Provider>
)

const mapStateToProps = state => ({
  beers: getTop10Suggestions(state),
  selectedBeerName: getSelectedBeerName(state)
})

const mapDispatchToProps = dispatch => ({
  onChange: newSelectedBeer => dispatch(selectBeer(newSelectedBeer))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)
