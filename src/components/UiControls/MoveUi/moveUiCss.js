import styled, { css } from "styled-components";

const arrowStyle = css`
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  cursor: pointer;
  width: 0;
  height: 0;
`;

const ArrowUp = styled.div`
  ${arrowStyle}
  border-bottom:20px solid ${props => props.theme.yellow};
`;

const Button = styled.button`
  background: none};
  font-size: 1em;
  margin: 0;
  padding: 0 5px;
  border: none
`;

const Heading = styled.h3`
  color: ${props => props.theme.yellow};
  text-shadow: 2px 2px ${props => props.theme.darkBlue};
`;

const MoveUiWrapper = styled.div`
  text-align: center;
  display: inline-block;
  vertical-align: top;
  padding: 20px;
  grid-column: col / span 1;
`;

export { ArrowUp, Button, Heading, MoveUiWrapper };
