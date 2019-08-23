import React from "react";

// core components
import MTGBoxTable from "components/MTGTables/MTGBoxTable.js";


function MTGBoxList(props) {

  return (
    <>
      <MTGBoxTable {...props} spotid={props.spotid} />
    </>
  );

}

export default MTGBoxList;
