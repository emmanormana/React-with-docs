import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function MTGSpotsHeader() {
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

export default MTGSpotsHeader;
