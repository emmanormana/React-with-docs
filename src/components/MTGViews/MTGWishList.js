import React from "react";

// core components
import MTGWishTable from "components/MTGTables/MTGWishTable.js";


function MTGWishList(props) {

  return (
    <>
      <MTGWishTable {...props} spotid={props.spotid} />
    </>
  );

}

export default MTGWishList;
