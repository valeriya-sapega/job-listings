import React from "react";

const Filter = (props) => {
  return (
    <>
      <button className="btn" onClick={props.removeFilter} value={props.filter}>
        {props.filteredItem}
      </button>
    </>
  );
};
export default Filter;
