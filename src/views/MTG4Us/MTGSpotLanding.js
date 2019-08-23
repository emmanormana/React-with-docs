import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import MTGSpotsHeader from "components/MTGViews/MTGSpotsHeader.js"


function MTGPlayerSpots(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <MTGSpotsHeader {...props} spotid={props.spotid}/>
    </>
  );
}

export default MTGPlayerSpots;
