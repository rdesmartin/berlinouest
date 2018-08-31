import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_fr from 'react-intl/locale-data/fr';

import messages_fr from "./translations/fr.json";
import messages_en from "./translations/en.json";

import AppContainer from "./containers/AppContainer";

addLocaleData([...locale_en, ...locale_fr]);

const messages = {
    'fr': messages_fr,
    'en': messages_en
};

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: yellow,
    error: red,
  },
});

class App extends Component {
  render() {
    return (
      <IntlProvider locale={this.props.locale} messages={messages[this.props.locale]}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <AppContainer/>
          </MuiThemeProvider>
        </Router>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.locale
});


export default connect(mapStateToProps)(App);
