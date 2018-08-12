import React, { Component } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

import AppContainer from "./containers/AppContainer";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: yellow,
    error: red,
  },
}
  );

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}

export default App;
