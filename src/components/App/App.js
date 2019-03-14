import React from "react";
import TableTop from "components/TableTop";
import UiControls from "components/UiControls";
import styled from "styled-components";

export const App = () => {
  const AppWrapper = styled.div.attrs({
    className: "App"
  })`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, [col] auto);
    grid-template-rows: repeat(2, [row] auto);
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, [col] auto);
    }
    padding: 20px;
  `;
  const Heading = styled.h1`
    grid-column: col / span 2;
    grid-row: row;
    text-align: center;
    color: #f7c738;
  `;
  return (
    <AppWrapper>
      <Heading>Toy Robot Simulator</Heading>
      <TableTop />
      <UiControls />
    </AppWrapper>
  );
};

export default App;
