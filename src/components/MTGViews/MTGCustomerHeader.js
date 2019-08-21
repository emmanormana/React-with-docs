import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function MTGCustomerHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

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
            <Button
              href="/MTGCustSpots"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              Tap a Land
            </Button>

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

            <Button
              href="/MTGCustWish"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              Make a Wish
            </Button>
            <Button
              href="/MTGBag"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              Manage a Bag
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default MTGCustomerHeader;
