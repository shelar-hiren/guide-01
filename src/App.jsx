import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// component
import CrsCalculator from "./component/CrsCalculator";
import EligibilityCalculator from "./component/EligibilityCalculator";
import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" name="crs" component={CrsCalculator} />
            <Route
              exact
              path="/calculator"
              name="calculator"
              component={EligibilityCalculator}
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
