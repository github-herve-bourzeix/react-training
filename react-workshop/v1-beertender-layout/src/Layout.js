import React from "react";
import styled from "styled-components";
import { THEME_PRIMARY_COLOR, THEME_SECONDARY_COLOR } from './theme'

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  // let's make a global layout
  // there are many ways to create a layout, this is imho the easiest
  grid-template-areas: 
  "header header header"
  "suggestions content content"
  "footer footer footer";
  height: 100%;
  max-height: 100vh;
`;

export const Suggestions = styled.div`
  grid-area: suggestions;
  background-color: #FB1;
`;
export const Content = styled.div`
  grid-area: content;
  background-color: #DEC0DE;
`;
export const Header = styled.div`
  grid-area: header;
  background-color: ${THEME_PRIMARY_COLOR};
`;
export const Footer = styled.div`
  grid-area: footer;
   background-color: ${THEME_SECONDARY_COLOR}
`;
