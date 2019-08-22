import React from "react";

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
              <Button
                href="/MTGWish"
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
              >
                Find a Wish
            </Button>
              <Button
                href="/MTGBox"
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
              >
                Manage Boxes
            </Button>
              <Button
                href="/MTGGrantWish"
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
              >
                Grant a Wish
            </Button>
              <Button
                href="/MTGReturn"
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
              >
                Return a Card
            </Button>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default MTGSpotsHeader;
