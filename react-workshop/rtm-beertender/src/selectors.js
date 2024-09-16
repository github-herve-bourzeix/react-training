export const getQueryText = ({ queryText = '' }) => queryText

export const getSuggestions = ({ suggestions = [] }) => suggestions

export const getTop10Suggestions = state => getSuggestions(state).slice(0, 10)

export const getFoodPairingForTop10Suggestions = state =>
  getTop10Suggestions(state).reduce(
    (foodPairing, next) => [...foodPairing, ...next.food_pairing].slice(0, 2),
    []
  )

export const getSelectedBeerName = ({ selectedBeerName }) => selectedBeerName

export const getSelectedBeer = state => {
  const [first] = getTop10Suggestions(state).filter(
    ({ name }) => getSelectedBeerName(state) === name
  )
  return first
}
