import React from "react";
import "./FixturesCompetition.css";
import logoVleague from "../../assets/img/logo/logo-vleague.png";
import logoHaNoiFC from "../../assets/img/logo/logo.png";
import logoHAGL from "../../assets/img/logo/hoang-anh-gia-lai2.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import DetailsFixtureCompetition from "../detailsFixtureCompetition/DetailsFixtureCompetition";
import { useState } from "react";

const FixturesCompetition = () => {
  const [isShowDetails, setIsShowDetails] = useState(false);

  return (
    <div className="competition__section-fixtures">
      <div
        className="competition__section-fixture-row"
        onClick={() => setIsShowDetails(!isShowDetails)}
      >
        <div className="competition__section-fixture-col--schedule">
          {/* <div className="competition__section-fixture-col--schedule-logo">
            <img src={logoVleague} alt="V League 1" />
          </div> */}
          <div className="competition__section-fixture-col--schedule-info">
            <p>2022 V.League 1</p>
            <p>12/03/2022 - 19:15</p>
            <p>Hàng Đẫy</p>
          </div>
        </div>

        <div className="competition__section-fixture-col--competitor">
          <div className="competition__section-fixture-col--competitor--left">
            <p>Hà Nội</p>
            <img src={logoHaNoiFC} alt="HaNoiFC" />
          </div>
          <div className="competition__section-fixture-col--competitor--center">
            <span>4</span>
            <span>:</span>
            <span>0</span>
          </div>
          <div className="competition__section-fixture-col--competitor--right">
            <img src={logoHAGL} alt="HAGLFC" />
            <p>Hoàng Anh Gia Lai</p>
          </div>
        </div>

        <div className="competition__section-fixture-col--result">
          <span>D</span>
          <button className="btn-show-toggle">
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
      {isShowDetails && <DetailsFixtureCompetition />}
    </div>
  );
};

export default FixturesCompetition;
