import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import MTGReturnWishTable from "components/MTGTables/MTGReturnWishTable.js"


function MTGReturn(props) {
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
      <MTGReturnWishTable {...props} spotid={props.spotid} />
    </>
  );
}

export default MTGReturn;