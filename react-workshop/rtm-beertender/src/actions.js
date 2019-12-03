import { getQueryText } from "./selectors";
export const REQUEST_BEER_SUGGESTIONS = "REQUEST_BEER_SUGGESTIONS";
export const RESPONSE_BEER_SUGGESTIONS = "RESPONSE_BEER_SUGGESTIONS";
export const SET_QUERY_TEXT = "SET_QUERY_TEXT";
export const SELECT_BEER = "SELECT_BEER";

export const requestBeerSuggestions = () => ({
  type: REQUEST_BEER_SUGGESTIONS
});
export const handleBeerSuggestionsResponse = suggestions => ({
  type: RESPONSE_BEER_SUGGESTIONS,
  suggestions
});

const setQueryText = queryText => ({
  type: SET_QUERY_TEXT,
  queryText
});

export const selectBeer = selectedBeerName => ({
  type: SELECT_BEER,
  selectedBeerName
});

export const suggestBeers = queryText => async dispatch => {
  dispatch(setQueryText(queryText));
  dispatch(requestBeerSuggestions());
  const suggestions = await (await window.fetch(
    `https://api.punkapi.com/v2/beers/?food=${queryText}`
  )).json();
  dispatch(
    handleBeerSuggestionsResponse(
      suggestions.map(({ id, name, image_url, food_pairing, description }) => ({
        id,
        name,
        url: image_url,
        food_pairing,
        description
      }))
    )
  );
};
