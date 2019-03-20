import styled, { css } from "styled-components";

const Button = styled.button.attrs({
  className: "RotateButton"
})`
  background: none};
  font-size: 1em;
  margin: 0;
  padding: 0 5px;
  border: none
`;

const arrowStyle = css`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  cursor: pointer;
`;

const ArrowRight = styled.div`
  ${arrowStyle}
  border-left:20px solid ${props => props.theme.yellow};
`;

const ArrowLeft = styled.div`
  ${arrowStyle}
  border-right:20px solid ${props => props.theme.yellow};
`;

const Heading = styled.h3`
  text-shadow: 2px 2px ${props => props.theme.darkBlue};
  color: ${props => props.theme.yellow};
`;

const RotateUiWrapper = styled.div`
  text-align: center;
  display: inline-block;
  vertical-align: top;
  padding: 20px;
`;

export { Button, ArrowLeft, ArrowRight, Heading, RotateUiWrapper };
