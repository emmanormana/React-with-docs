import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import MTGBoxList from "components/MTGViews/MTGBoxList.js"


function MTGBox(props) {
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
      <MTGBoxList {...props} spotid={props.spotid} />
    </>
  );
}

export default MTGBox;
