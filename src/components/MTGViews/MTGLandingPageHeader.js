/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function MTGLandingPageHeader() {
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
          backgroundImage: "url(" + require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_Ferocious_Pup_M20_1920x1080.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Choose your Deck</h1>
            <h3>This is a demo of the product. Hence, no user data will be required to navigate the app.</h3>
            <br />
            <Button
              href="/MTGPlayer"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              MTG Player
            </Button>
            <Button
              href="/MTGSpot"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              Spot Master
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default MTGLandingPageHeader;
