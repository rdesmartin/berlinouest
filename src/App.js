import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

import AboutView from "./components/AboutView";
import HomeView from "./components/HomeView";
import LocalisationContainer from "./containers/LocalisationContainer";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey,
    error: red,
    input: {
      bottomLine: "red"
    }
  },
  colors: {
    grey: "#C8C8C8"
  },
  underline: {
    borderBottom: "5px solid red",
    "&:after": {
      borderBottom: "5px solid red"
    }
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid ${grey[300]} !important`,
          content: ""
        },
        borderBottom: `1px solid ${grey[300]} !important`,
        "&:hover:not($disabled):before": {
          borderBottom: `1px solid ${grey[300]} !important`,
          position: "relative"
        },
        position: "relative"
      }
    },
    MuiStepIcon: {
      text: {
        fill: "white"
      }
    },
    MuiSelect: {
      select: {
        display: "flex"
      }
    },
    MuiButton: {
      containedPrimary: {
        color: "white"
      }
    }
  },
  button: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white"
  },
  enhancedButton: {
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  flatButton: {
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  tabs: {
    fontWeight: "bold"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Switch>
            <Route path="/about" component={AboutView} />
            <Route path="/home" component={HomeView} />
              <Route path="/" component={LocalisationContainer} />
          </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
