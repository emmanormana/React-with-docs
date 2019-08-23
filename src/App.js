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
import MTGBox from "views/MTG4Us/MTGBox";
import MTGNewBoxHeader from "components/MTGViews/MTGNewBoxHeader";
import MTGWish from "views/MTG4Us/MTGWish";
import MTGBoxExchange from "views/MTG4Us/MTGBoxExchange";
import MTGReturn from "views/MTG4Us/MTGReturn";

class App extends React.Component {
  state = {
    spotid: null,
    customerid: null,
    Wish: {
      id:null,
      custid:null,
      ownerid:null,
      ownername:null,
      shelfid:null,
      bagid:null,
      itemid:null,
      itemdescription:null,
      quantity:null,
      spotid:null,
      spot:null,
      boxid:null,
      boxnumber:null,
      returndate:null,
      expiringdate:null,
      status:null
    }
  };

  handleCustomerId = customerid => {
    console.log("handleCustomerId", customerid);
    this.setState({ customerid: customerid }, () =>
      this.props.history.push("/mtgcustomerlanding")
    );
    console.log(customerid);
  };

  handleSpotId = spotid => {
    console.log(spotid);
    this.setState({ spotid: spotid }, () =>
    this.props.history.push("/mtgspotlanding")
    );
    console.log(spotid);
  };

  handleWish = Wish => {
    console.log(Wish);
    this.setState({ Wish: Wish }, () =>
    this.props.history.push("/mtgBoxExchange")
    );
    console.log(Wish);
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
          <Route 
              path="/mtgcards" render={props => <MTGCards {...props} />} 
          />
          <Route 
            path="/mtgspot" render={props => <MTGSpots {...props} handleSpotId={this.handleSpotId} />}
          />
          <Route
            path="/mtgspotlanding"
            component={props => <MTGSpotLanding {...props} spotid={this.state.spotid} />}
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
            component={props => <MTGCustSpots {...props} customerid={this.state.customerid}/>}
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
            path="/mtgbox"
            component={props => (
              <MTGBox {...props} spotid={this.state.spotid} />
            )}
          />
          <Route
            path="/mtgnewboxheader"
            component={props => (
              <MTGNewBoxHeader {...props} spotid={this.state.spotid} />
            )}
          />
          <Route
            path="/mtgwish"
            component={props => (
              <MTGWish {...props} spotid={this.state.spotid} handleSpotId={this.handleSpotId} />
            )}
          />
          <Route
            path="/mtgboxexchange"
            component={props => (
              <MTGBoxExchange {...props} spotid={this.state.spotid} Wish={this.Wish} />
            )}
          />
          <Route
            path="/mtgreturn"
            component={props => (
              <MTGReturn {...props} spotid={this.state.spotid} />
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
