import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import MTGShelfCardsList from "components/MTGViews/MTGShelfCardsList.js";

function MTGShelfCards() {
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
      <MTGShelfCardsList />
    </>
  );
}

export default MTGShelfCards;
