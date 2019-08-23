import React from "react";

// core components
import MTGCustSpotsTable from "components/MTGTables/MTGCustSpotsTable.js";


function MTGCustSpotList(props) {

  return (
    <>
      <MTGCustSpotsTable {...props} customerid={props.customerid} />
    </>
  );

}

export default MTGCustSpotList;
