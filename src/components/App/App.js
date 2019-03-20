import React from "react";
import TableTop from "components/TableTop";
import UiControls from "components/UiControls";
import { ThemeProvider } from "styled-components";
import { THEME, GlobalStyle, AppWrapper, Heading } from "./appCss";

export const App = () => (
  <ThemeProvider theme={THEME}>
    <React.Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Heading>Toy Robot Simulator</Heading>
        <TableTop />
        <UiControls />
      </AppWrapper>
    </React.Fragment>
  </ThemeProvider>
);

export default App;
