import React from "react";

// core components
import MTGShelfTable from "components/MTGTables/MTGShelfTable.js";

function MTGShelfList(props) {
  return (
    <>
      <MTGShelfTable {...props} />
    </>
  );
}

export default MTGShelfList;
