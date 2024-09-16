import React from "react";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-areas: "header" "main-content" "footer"; 
  height: 100%;
  max-height: 100vh;
`;
export const MainContent = styled.div`
  display: grid; // Look ! a grid within a grid !
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: 1fr;
  grid-template-areas: "suggestions content";
  grid-area: main-content;
`;
export const Suggestions = styled.div`
  grid-area: suggestions;
  border: solid 1px cyan;
`;
export const Content = styled.div`
  grid-area: content;
  border: solid 1px magenta;
`;
export const Header = styled.div`
  grid-area: header;
  border: solid 1px yellow;
`;
export const Footer = styled.div`
  grid-area: footer;
  border: solid 1px green;
`;
