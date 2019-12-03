import {
  RESPONSE_FEELING_THIRSTY
} from './randomBeerActions'

export default (state = {currentBeer: {}}, action) => {
  console.info('action', action)
  switch (action.type) {
    case RESPONSE_FEELING_THIRSTY:
      return {
        ...state,
        currentBeer: action.randomBeer
      }
    default:
      return state
  }
};
