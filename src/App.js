import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

import AppContainer from "./containers/AppContainer";
import reducer from "./reducers"

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: yellow,
    error: red,
  },
}
  );

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <AppContainer/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
