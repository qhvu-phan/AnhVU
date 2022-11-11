import React from "react";
import HeaderPage from "../../components/headerPage/HeaderPage";
import TeamImage from "../../assets/img/banner/slide-2.jpg";
import TT from "../../assets/img/cauthu/cauthu-tan-truong.png";
import "./Team.css";
import FilterInfoTeam from "../../components/filterInfoTeam/FilterInfoTeam";

const Team = () => {
  return (
    <section className="team__story">
      <HeaderPage image={TeamImage}></HeaderPage>
      <div className="container team__story-container">
        <FilterInfoTeam />

        <div className="team__player-row">
          <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">1</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">Bùi Tấn Trường</span>
                <span className="team__player-venue">Thủ môn</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ngày sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chiều cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Cân nặng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Quê Quán</p>
                <p className="team__player-col-info">Đồng Tháp</p>
              </div>
            </div>
          </div>
          <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">25</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">lê xuân tú</span>
                <span className="team__player-venue">Thủ môn</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ngày sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chiều cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Cân nặng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Quê Quán</p>
                <p className="team__player-col-info">Đồng Tháp</p>
              </div>
            </div>
          </div>
          <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">74</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">trương văn thái quý</span>
                <span className="team__player-venue">Tiền vệ</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ngày sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chiều cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Cân nặng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Quê Quán</p>
                <p className="team__player-col-info">Đồng Tháp</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="team__player-row">
          <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">1</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">Bùi Tấn Trường</span>
                <span className="team__player-venue">Thủ môn</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ngày sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chiều cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Cân nặng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Quê Quán</p>
                <p className="team__player-col-info">Đồng Tháp</p>
              </div>
            </div>
          </div>
          <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">25</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">lê xuân tú</span>
                <span className="team__player-venue">Thủ môn</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ngày sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chiều cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Cân nặng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Quê Quán</p>
                <p className="team__player-col-info">Đồng Tháp</p>
              </div>
            </div>
          </div>
          <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">74</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">trương văn thái quý</span>
                <span className="team__player-venue">Tiền vệ</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ngày sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chiều cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Cân nặng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Quê Quán</p>
                <p className="team__player-col-info">Đồng Tháp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
