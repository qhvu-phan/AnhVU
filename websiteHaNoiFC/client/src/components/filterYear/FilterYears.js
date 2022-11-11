import React from "react";
import "./FilterYears.css"
import { IoMdArrowDropdown } from "react-icons/io";
import ListOptionsYears from "../filterYear/ListOptionsYears";

const FilterYears = () => {
  return (
    <div className="competition__section-head-option">
      <div className="competition__section-select">
        <span>2022</span>
        <IoMdArrowDropdown />
      </div>
      {/* <ListOptionsYears /> */}
    </div>
  );
};

export default FilterYears;
