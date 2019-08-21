import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import MTGCardsHeader from "components/MTGViews/MTGCardsHeader.js";

function MTGCards() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <MTGCardsHeader />
    </>
  );
}

export default MTGCards;
