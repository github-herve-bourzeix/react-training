import React from 'react'
import { connect } from 'react-redux'
import { getRandomBeer } from '../randomBeerActions'


// add test
const FeelingThirstyButton = ({ onFeelingThirsty }) => <button onClick={onFeelingThirsty}>I'm feeling thirsty</button>

const mapDispatchToProps = {
  onFeelingThirsty: getRandomBeer
}

export default connect(
  null, mapDispatchToProps
)(FeelingThirstyButton)
