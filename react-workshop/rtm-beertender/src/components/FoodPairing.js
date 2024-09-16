import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { getFoodPairingForTop10Suggestions } from "../selectors";
import { THEME_SECONDARY_COLOR } from '../theme'
import { Footer } from '../Layout'

const FoodPairingSuggestion = styled.div`
  border-radius: 5px;
  border-color: ${THEME_SECONDARY_COLOR};
  border-style: solid;
  max-width: 300px;
  padding: 5px;
  margin: 5px;
`;

const FoodPairing = ({ foodPairing }) => {
  return (
    <>
      {foodPairing.length>0 && <h2>this beer goes well with</h2>}
      {foodPairing.map(
        food =>
          console.info(food) || (
            <FoodPairingSuggestion key={food}>{food}</FoodPairingSuggestion>
          )
      )}
    </>
  );
};

const mapStateToProps = state => ({
  foodPairing: getFoodPairingForTop10Suggestions(state)
});

export default connect(mapStateToProps)(FoodPairing);
