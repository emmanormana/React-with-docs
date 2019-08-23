import React from "react";
import {Link} from "react-router-dom";

// reactstrap components
import { Button, Container } from "reactstrap";



class MTGSpotsHeader extends React.Component {
  constructor(props) {
    console.log(props.spotid);
    super(props);
    this.state = {
      spotid: props.spotid
    };
  }

  render() {
    let pageHeader = React.createRef();
    console.log(this.state.spotid);
    return (
      <>
        <div
          style={{
            backgroundImage: "url(" + require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_Approach-of-the-Second-Sun_AKH_1280x960_Wallpaper.jpg") + ")"
          }}
          className="page-header"
          data-parallax={true}
          ref={pageHeader}
        >
          <div className="filter" />
          <Container>
            <div className="motto text-center">
              <h1>What will you cast?</h1>
              <h3>Hint: Note down your customer's Wish Id.</h3>
              <br />
              <Link to="/MTGWish">
              <Button
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
              >
                Grant a Wish
            </Button>
            </Link>
            <Link to="/MTGBox">
              <Button
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
              >
                Manage Boxes
            </Button>
            </Link>
            <Link to="/MTGReturn">
              <Button
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
              >
                Return a Card
            </Button>
            </Link>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default MTGSpotsHeader;
