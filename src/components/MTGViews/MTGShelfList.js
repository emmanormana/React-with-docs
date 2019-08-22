import React from "react";

// core components
import MTGShelfTable from "components/MTGTables/MTGShelfTable.js";

function MTGShelfList(props) {
  return (
    <>
      <MTGShelfTable {...props} customerid={props.customerid} />
    </>
  );
}

export default MTGShelfList;
