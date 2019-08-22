import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components
class MTGCustomerHeader extends React.Component {
  constructor(props) {
    console.log(props.customerid);
    super(props);
    this.state = {
      customerid : props.customerid
    };
  }

 render() {
  let pageHeader = React.createRef();
  console.log(this.state.customerid);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_Back-to-Basics_UMA_1280x960_Wallpaper.jpg") +
            ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>What will you cast?</h1>
            <h3>Hint: Make sure you tap your Lands first.</h3>
            <br />
            <Link to="/MTGCustSpots">
            <Button
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              Tap a Land
            </Button>
            </Link>
            <Link to="/MTGShelf">
              <Button
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
              >
                Manage a Shelf
              </Button>
            </Link>
            <Link to="/MTGCards">
            <Button
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              Make a Wish
            </Button>
            </Link>
            <Link to="/MTGBag">
            <Button
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              Manage a Bag
            </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
}

export default MTGCustomerHeader;
