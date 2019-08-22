import React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
// pages
import Index from "views/Index.js";
import Icons from "views/NucleoIcons";
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
import MTGWishTargets from "views/MTG4Us/MTGWishTargets";
import MTGBags from "views/MTG4Us/MTGBag";

class App extends React.Component {
  state = {
    spotid: null,
    customerid: null,
    user: {
      name: "",
      email: ""
    }
  };

  handleCustomerId = customerid => {
    console.log("handleCustomerId", customerid);
    this.setState({ customerid: customerid }, () =>
      this.props.history.push("/mtgcustomerlanding")
    );
    console.log(customerid);
  };

  handleUser = user => {
    this.setState({ user: user });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/index" render={props => <Index {...props} />} />
          <Route path="/icons" render={props => <Icons {...props} />} />
          <Route
            path="/landing-page"
            component={props => <LandingPage {...props} />}
          />
          <Route
            path="/profile-page"
            component={props => <ProfilePage {...props} />}
          />
          <Route
            path="/register-page"
            component={props => <RegisterPage {...props} />}
          />
          <Route
            path="/mtgplayer"
            component={props => (
              <MTGPlayer {...props} handleCustomerId={this.handleCustomerId} />
            )}
          />
          <Route path="/mtgcards" render={props => <MTGCards {...props} />} />
          <Route path="/mtgspot" render={props => <MTGSpots {...props} />} />
          <Route
            path="/mtgspotlanding"
            component={props => <MTGSpotLanding {...props} spotid={props.match.params.id} />}
          />
          <Route
            path="/mtgcustomerlanding"
            component={props => (
              <MTGCustomerLanding
                {...props}
                customerid={this.state.customerid}
              />
            )}
          />
          <Route
            path="/mtgcustspots"
            component={props => <MTGCustSpots {...props} />}
          />
          <Route
            path="/mtgshelf"
            component={props => (
              <MTGShelf {...props} customerid={this.state.customerid} />
            )}
          />
          <Route
            path="/mtgshelfcards"
            component={props => (
              <MTGShelfCards {...props} customerid={this.state.customerid} />
            )}
          />
          <Route
            path="/mtgwishtargets"
            component={props => (
              <MTGWishTargets {...props} customerid={this.state.customerid} />
            )}
          />
          <Route
            path="/mtgbag"
            component={props => (
              <MTGBags {...props} customerid={this.state.customerid} />
            )}
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

export default withRouter(App);
