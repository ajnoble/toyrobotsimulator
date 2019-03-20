import styled from "styled-components";

const UiControlsWrapper = styled.div.attrs({
  className: "UiControls"
})`
  @media (max-width: ${props => props.theme.breakPoint}) {
    grid-column: col / span 2;
    text-align: center;
  }
`;

export { UiControlsWrapper };
