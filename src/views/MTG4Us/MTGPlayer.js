import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import MTGPlayerForm from "components/MTGViews/MTGPlayerForm.js";

function MTGPlayerLand(props) {
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
      <MTGPlayerForm {...props} handleCustomerId={props.handleCustomerId} />
    </>
  );
}

export default MTGPlayerLand;
