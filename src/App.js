import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";


import "./App.css";
import Login from "./Components/Containers/Login";
import PrivateRoute from "./Components/Containers/PrivateRoute";
import Layout from "./Components/Containers/Layout";

import store from "./store";

import theme from "./styles/theme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <div className="App">
            <BrowserRouter>
              <div>
                <Switch>
                  <Route exact={true} path={"/login"} component={Login} />
                  <PrivateRoute path={"/"} component={Layout} />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
