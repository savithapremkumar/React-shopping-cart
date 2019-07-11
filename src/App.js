import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductPage from "./containers/productPage";
import Cart from "./containers/cartPage";

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={ProductPage} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

export default App;
