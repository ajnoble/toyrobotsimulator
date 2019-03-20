import styled from "styled-components";

const TableTopSquareWrapper = styled.div.attrs({
  className: "TableTopSquare"
})`
  background-color: #0856d3;
  padding: 10%;
  position: relative;
  text-align: center;
`;

const Position = styled.div`
  color: ${props => props.theme.yellow};
  font-family: Arial;
  font-size: 12px;
  padding: 5px;
  position: absolute;
  top: 0;
  left: 0;
`;

export { TableTopSquareWrapper, Position };
