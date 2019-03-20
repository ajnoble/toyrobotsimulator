import styled from "styled-components";

const TableTopWrapper = styled.div.attrs({
  className: "TableTopWrapper"
})`
  background-color: ${props => props.theme.yellow};
  border: 1px solid ${props => props.theme.yellow};
  box-shadow: 2px 2px ${props => props.theme.darkBlue};
  display: inline-grid;
  grid-column: col / span 1;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  grid-gap: 1px;
  @media (max-width: ${props => props.theme.breakPoint}) {
    order: 2;
    grid-column: col / span 2;
  }
`;

export { TableTopWrapper };
