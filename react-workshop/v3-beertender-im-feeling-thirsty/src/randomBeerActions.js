export const REQUEST_FEELING_THIRSTY = "REQUEST_FEELING_THIRSTY";
export const RESPONSE_FEELING_THIRSTY = "RESPONSE_FEELING_THIRSTY";

export const requestRandomBeer = () => ({
  type: REQUEST_FEELING_THIRSTY
});
export const handleRandomBeerResponse = randomBeer => ({
  type: RESPONSE_FEELING_THIRSTY,
  randomBeer
});


export const getRandomBeer = () => async dispatch => {
  dispatch(requestRandomBeer())
  const result = await fetchRandomBeer()
  dispatch(
    handleRandomBeerResponse(
      result
    )
  )
}

const fetchRandomBeer = async () => {
  const payload = await (await window.fetch(
    `https://api.punkapi.com/v2/beers/random`
  )).json()
  const result = payload.map(({ id, name, image_url, food_pairing, description }) => ({
    id,
    name,
    url: image_url,
    food_pairing,
    description
  }))[0]
  return result
}
