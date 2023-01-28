import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import WineBarIcon from "@mui/icons-material/WineBar";
import "./Home.css";

function Home() {
  return (
    <>
   
      <div className="card1">
        <div className="frame1">
          <h3>
            <span>
              <WineBarIcon />
            </span>
            <i className="name">Occasion</i>
            <span>
              <ExpandMoreIcon />
            </span>
          </h3>
        </div>
      </div>

      <div className="card2">
        <div className="frame1">
          <h3>
            <span>
              <WineBarIcon />
            </span>
            <i className="name">Occasion</i>
            <span>
              <ExpandMoreIcon />
            </span>
          </h3>
        </div>
        <br />

        <div className="frame2">
          <h3>
            <i>Birthday</i>
          </h3>
        </div>

        <div className="frame3">
          <h3>
            <i>Engagement</i>
          </h3>
        </div>

        <div className="frame4">
          <h3>
            <i>Anniversary</i>
          </h3>
        </div>
      </div>

      <div className="card3">
        <div className="sub_frame">
          <h3>
            <i className="name">Birthday</i>
            <ExpandLessIcon />
          </h3>
        </div>
      </div>

      <div className="card4">
        <div className="sub_frame">
          <h3>
            <i className="name">Engagement</i>
            <ExpandLessIcon />
          </h3>
        </div>
      </div>

      <div className="card5">
        <div className="sub_frame">
          <h3>
            <i className="name">Anniversary</i>
            <ExpandLessIcon />
          </h3>
        </div>
      </div>
      
    </>
  );
}

export default Home;
