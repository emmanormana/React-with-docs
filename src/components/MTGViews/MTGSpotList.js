import React from "react";

// core components
import MTGSpotsTable from "components/MTGTables/MTGSpotsTable.js";


function MTGSpotList(props) {

  return (
    <>
      <MTGSpotsTable {...props} handleSpotId={props.handleSpotId} />
    </>
  );

}

export default MTGSpotList;
