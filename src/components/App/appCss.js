import styled, { createGlobalStyle } from "styled-components";

const THEME = {
  yellow: "#f7c738",
  darkBlue: "MidnightBlue",
  lightBlue: "#0856d3",
  lighterBlue: "DodgerBlue",
  breakPoint: "768px"
};

const GlobalStyle = createGlobalStyle`
    html,
    body {
    margin: 0;
    font-family: "Righteous", cursive;
    background-image: linear-gradient(
        to bottom,
        ${props => props.theme.lighterBlue},
        ${props => props.theme.darkBlue}
    );
    height: 100%;
    }
`;

const AppWrapper = styled.div.attrs({
  className: "App"
})`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, [col] 1fr);
  grid-template-rows: repeat(2, [row] auto);
  padding: 20px;
  @media (max-width: ${props => props.theme.breakPoint}) {
    grid-template-columns: repeat(1, [col] auto);
  }
`;

const Heading = styled.h1`
  color: ${props => props.theme.yellow};
  grid-column: col / span 2;
  grid-row: row;
  text-align: center;
  text-shadow: 2px 2px ${props => props.theme.darkBlue};
`;

export { THEME, GlobalStyle, AppWrapper, Heading };
