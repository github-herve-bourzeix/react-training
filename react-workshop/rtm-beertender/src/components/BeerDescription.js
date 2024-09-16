import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import { getSelectedBeer } from "../selectors";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${props =>
    props.middle &&
    css`
      align-content: center;
      justify-content: space-around;
    `}
`;

const BeerDescription = ({ name, url, description }) => (
  <div>
    <Row>
      <Column>
        <img height="200px" src={url} alt={name} />
      </Column>
      <Column>{name}</Column>
    </Row>
    <div>{description}</div>
  </div>
);

const StyledBeerDescription = styled(BeerDescription)``;

const mapStateToProps = state => ({
  ...getSelectedBeer(state)
});

export default connect(mapStateToProps)(StyledBeerDescription);
