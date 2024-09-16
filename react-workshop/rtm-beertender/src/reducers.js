import {
  REQUEST_BEER_SUGGESTIONS,
  RESPONSE_BEER_SUGGESTIONS,
  SET_QUERY_TEXT,
  SELECT_BEER
} from "./actions";

export default (state = {}, action) => {
  console.info("action", action);
  switch (action.type) {
    case REQUEST_BEER_SUGGESTIONS:
      return {
        ...state,
        isLoading: true
      };
    case RESPONSE_BEER_SUGGESTIONS:
      return {
        ...state,
        isLoading: false,
        suggestions: action.suggestions
      };

    case SET_QUERY_TEXT:
      return {
        ...state,
        queryText: action.queryText
      };

    case SELECT_BEER:
      return {
        ...state,
        selectedBeerName: action.selectedBeerName
      };
    default:
      return state;
  }
};
