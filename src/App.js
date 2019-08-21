import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/MTG4Us/MTGLandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import MTGPlayer from "views/MTG4Us/MTGPlayer";
import MTGCards from "views/MTG4Us/MTGCards.js";
import MTGSpots from "views/MTG4Us/MTGSpots.js";
import MTGSpotLanding from "views/MTG4Us/MTGSpotLanding.js";
import MTGCustomerLanding from "views/MTG4Us/MTGCustomerLanding.js";
import MTGCustSpots from "views/MTG4Us/MTGCustSpots.js";
import MTGShelf from "views/MTG4Us/MTGShelf.js";
import MTGShelfCards from "views/MTG4Us/MTGShelfCards.js";

export default class App extends React.Component {
  state = {
    spotSelected: null,
    customerId: "1",
    user: {
      name: "",
      email: ""
    }
  };

  handleCustomerId = customerId => {
    console.log("handleCustomerId", customerId);
    this.setState({ customerId: customerId });
  };

  handleUser = user => {
    this.setState({ user: user });
  };

  render() {
    return (
      <div>
        <h1>NAVBAR DA APP</h1>
        <Switch>
          <Route path="/index" render={props => <Index {...props} />} />
          <Route
            path="/nucleo-icons"
            render={props => <NucleoIcons {...props} />}
          />
          <Route
            path="/landing-page"
            render={props => <LandingPage {...props} />}
          />
          <Route
            path="/profile-page"
            render={props => <ProfilePage {...props} />}
          />
          <Route
            path="/register-page"
            render={props => <RegisterPage {...props} />}
          />
          <Route
            path="/mtgplayer"
            render={props => (
              <MTGPlayer {...props} handleCustomerId={this.handleCustomerId} />
            )}
          />
          <Route path="/mtgcards" render={props => <MTGCards {...props} />} />
          <Route path="/mtgspot" render={props => <MTGSpots {...props} />} />
          <Route
            path="/mtgspotlanding"
            render={props => <MTGSpotLanding {...props} />}
          />
          <Route
            path="/mtgcustomerlanding"
            render={props => <MTGCustomerLanding {...props} />}
          />
          <Route
            path="/mtgcustspots"
            render={props => <MTGCustSpots {...props} />}
          />
          <Route
            path="/mtgshelf"
            render={props => (
              <MTGShelf {...props} customerId={this.state.customerId} />
            )}
          />
          <Route
            path="/mtgshelfcards"
            render={props => <MTGShelfCards {...props} />}
          />
          <Route
            path="/mtgselectspot/:id"
            render={props => {
              console.log(props);
              return (
                <div>
                  <h1>SPOT SELECTED</h1>
                  <h1>{props.match.params.id}</h1>
                  <button onClick={() => props.history.goBack()}>VOLTAR</button>
                  <button onClick={() => props.history.push("/profile-page")}>
                    NAVEGAR
                  </button>
                </div>
              );
            }}
          />
          <Redirect to="/landing-page" />
        </Switch>
      </div>
    );
  }
}
