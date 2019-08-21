import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import MTGCustSpotList from "components/MTGViews/MTGCustSpotList.js"


function MTGCustSpots() {
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
      <MTGCustSpotList />
    </>
  );
}

export default MTGCustSpots;
