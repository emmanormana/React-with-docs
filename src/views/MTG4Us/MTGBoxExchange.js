import React from "react";

// core components
import MTGBoxExchangeTable from "components/MTGTables/MTGBoxExchangeTable.js";


function MTGBoxExchange(props) {

  return (
    <>
      <MTGBoxExchangeTable {...props} Wish={props.Wish} spotid={props.spotid} />
    </>
  );

}

export default MTGBoxExchange;
