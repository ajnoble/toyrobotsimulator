import styled, { css } from "styled-components";

const inputStyle = css`
  padding: 5px;
  margin: 5px;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.yellow};
  color: ${props => props.theme.yellow};
  background: none;
  height: 20px;
  box-shadow: 2px 2px ${props => props.theme.darkBlue};
  ::placeholder {
    color: ${props => props.theme.yellow};
  }
`;

const PlaceUiWrapper = styled.div.attrs({
  className: "PlaceUi"
})`
  text-align: left;
  display: block;
  vertical-align: top;
  padding: 20px 20px 0;
  @media (max-width: ${props => props.theme.breakPoint}) {
    text-align: center;
  }
`;

const Input = styled.input.attrs(({ name }) => ({
  type: "number",
  className: name,
  max: 1,
  maxlength: 1
}))`
  ${inputStyle}
`;

const DirectionDropdown = styled.select.attrs({
  className: "PlaceUi__DirectionDropdown"
})`
  ${inputStyle}
  height: 36px;
`;

const HiddenWrapper = styled.div`
  display: none;
`;

const Heading = styled.h3`
  color: ${props => props.theme.yellow};
  text-shadow: 2px 2px ${props => props.theme.darkBlue};
`;

const Button = styled.button`
  font-size: 1em;
  padding: 5px;
  margin: 5px;
  border: 2px solid ${props => props.theme.yellow};
  border-radius: 3px;
  background: none;
  color: ${props => props.theme.yellow};
  font-family: "Righteous", cursive;
  box-shadow: 2px 2px ${props => props.theme.darkBlue};
  cursor: pointer;
  @media (max-width: ${props => props.theme.breakPoint}) {
    width: 60%;
  }
`;

const ErrorWrapper = styled.div`
  color: ${props => props.theme.yellow};
  padding: 5px 0 0;
`;

export {
  PlaceUiWrapper,
  Input,
  DirectionDropdown,
  HiddenWrapper,
  Heading,
  Button,
  ErrorWrapper
};
