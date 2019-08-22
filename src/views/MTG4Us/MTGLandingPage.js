import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import LandingPageHeader from "components/MTGViews/MTGLandingPageHeader.js";

function LandingPage() {
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
      <LandingPageHeader />
    </>
  );
}

export default LandingPage;
