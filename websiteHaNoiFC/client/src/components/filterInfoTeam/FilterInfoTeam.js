import React from "react";
import FilterYears from "../filterYear/FilterYears";
import "./FilterInfoTeam.css";

const FilterInfoTeam = () => {
  return (
    <div className="filter-info-team">
      <div className="filter-info-team__container">
        <ul>
          <li>
            <span className="active">Đội hình chính</span>
          </li>
          <li>
            <span>Huấn Luyện Viên</span>
          </li>
          <li>
            <span>Nhà tài trợ</span>
          </li>
        </ul>
      <FilterYears />
      </div>
    </div>
  );
};

export default FilterInfoTeam;
