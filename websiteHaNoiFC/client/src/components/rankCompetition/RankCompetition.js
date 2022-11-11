import React from "react";
import "./RankCompetition.css";
import logoHaNoiFC from "../../assets/img/logo/logo.png";
import logoHAGL from "../../assets/img/logo/hoang-anh-gia-lai2.png";
import { IoMdCheckmark } from "react-icons/io";

const RankCompetition = () => {
  return (
    <div className="competition__section-rank">
      <table className="competition__section-rank-table">
        <thead>
          <tr>
            <th colSpan={2}>
              <span>Câu lạc bộ</span>
            </th>
            <th>
              <span className="competition__section-rank-normal">Đã đấu</span>
              <span className="competition__section-rank-mobile">P</span>
            </th>
            <th>
              <span className="competition__section-rank-normal">Thắng</span>
              <span className="competition__section-rank-mobile">W</span>
            </th>
            <th>
              <span className="competition__section-rank-normal">Hòa</span>
              <span className="competition__section-rank-mobile">D</span>
            </th>
            <th>
              <span className="competition__section-rank-normal">Thua</span>
              <span className="competition__section-rank-mobile">L</span>
            </th>
            <th>
              <span className="competition__section-rank-normal">Hiệu số</span>
              <span className="competition__section-rank-mobile">GD</span>
            </th>
            <th className="competition__section-rank-point">
              <span className="competition__section-rank-normal">Điểm</span>
              <span className="competition__section-rank-mobile">PTS</span>
            </th>
            <th>
              <span>5 trận gần nhất</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <span>1</span>
            </th>
            <th>
              <img src={logoHaNoiFC} alt="HanoiFC" />
              <span>Dong a thanh hoa</span>
            </th>
            <th>
              <span>12</span>
            </th>
            <th>
              <span>9</span>
            </th>
            <th>
              <span>1</span>
            </th>
            <th>
              <span>1</span>
            </th>
            <th>
              <span>11</span>
            </th>
            <th className="competition__section-rank-point">
              <span>29</span>
            </th>
            <th>
              <span className="competition__section-rank-match win">
                <IoMdCheckmark />
              </span>
              <span className="competition__section-rank-match lose">
                x
              </span>
              <span className="competition__section-rank-match draw">--</span>
              <span className="competition__section-rank-match draw">--</span>
              <span className="competition__section-rank-match win">
                <IoMdCheckmark />
              </span>
            </th>
          </tr>
          <tr>
            <th>
              <span>1</span>
            </th>
            <th>
              <img src={logoHaNoiFC} alt="HanoiFC" />
              <span>hong linh ha tinh</span>
            </th>
            <th>
              <span>12</span>
            </th>
            <th>
              <span>9</span>
            </th>
            <th>
              <span>1</span>
            </th>
            <th>
              <span>1</span>
            </th>
            <th>
              <span>11</span>
            </th>
            <th className="competition__section-rank-point">
              <span>29</span>
            </th>
            <th>
              <span className="competition__section-rank-match win">
                <IoMdCheckmark />
              </span>
              <span className="competition__section-rank-match lose">
                x
              </span>
              <span className="competition__section-rank-match draw">--</span>
              <span className="competition__section-rank-match draw">--</span>
              <span className="competition__section-rank-match win">
                <IoMdCheckmark />
              </span>
            </th>
          </tr>
          <tr>
            <th>
              <span>1</span>
            </th>
            <th>
              <img src={logoHaNoiFC} alt="HanoiFC" />
              <span>Song lam nghe an</span>
            </th>
            <th>
              <span>12</span>
            </th>
            <th>
              <span>9</span>
            </th>
            <th>
              <span>1</span>
            </th>
            <th>
              <span>1</span>
            </th>
            <th>
              <span>11</span>
            </th>
            <th className="competition__section-rank-point">
              <span>29</span>
            </th>
            <th>
              <span className="competition__section-rank-match win">
                <IoMdCheckmark />
              </span>
              <span className="competition__section-rank-match lose">
                x
              </span>
              <span className="competition__section-rank-match draw">--</span>
              <span className="competition__section-rank-match draw">--</span>
              <span className="competition__section-rank-match win">
                <IoMdCheckmark />
              </span>
            </th>
          </tr>
          <tr>
            <th>
              <span>1</span>
            </th>
            <th>
              <img src={logoHaNoiFC} alt="HanoiFC" />
              <span>xskt can tho</span>
            </th>
            <th>
              <span>12</span>
            </th>
            <th>
              <span>9</span>
            </th>
            <th>
              <span>1</span>
            </th>
            <th>
              <span>1</span>
            </th>
            <th>
              <span>11</span>
            </th>
            <th className="competition__section-rank-point">
              <span>29</span>
            </th>
            <th>
              <span className="competition__section-rank-match win">
                <IoMdCheckmark />
              </span>
              <span className="competition__section-rank-match lose">
                x
              </span>
              <span className="competition__section-rank-match draw">--</span>
              <span className="competition__section-rank-match draw">--</span>
              <span className="competition__section-rank-match win">
                <IoMdCheckmark />
              </span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RankCompetition;
