import React from "react";

// core components
import MTGBagTable from "components/MTGTables/MTGBagTable.js";


function MTGBagList(props) {

  return (
    <>
      <MTGBagTable {...props} customerid={props.customerid}/>
    </>
  );

}

export default MTGBagList;
