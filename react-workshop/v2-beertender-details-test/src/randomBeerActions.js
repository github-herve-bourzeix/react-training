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
