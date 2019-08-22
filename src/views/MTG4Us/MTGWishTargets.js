import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import MTGWishTargetsTable from "components/MTGTables/MTGWishTargetsTables";

function MTGWishTargets() {
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
      <MTGWishTargetsTable />
    </>
  );
}

export default MTGWishTargets;