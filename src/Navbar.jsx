import React, { useState } from "react";
// import
import "./Nav.css";

function Navbar() {
  const [selected, setSelected] = useState("Home");

  return (
    <div className="nav-container">
      <div className="nav-container-left">
        <div className="left-title-container">
          <div>Coding Addict</div>
          <div>X</div>
        </div>
        <div
          className={`nav-element ${selected == "Home" && "active"}`}
          onClick={() => setSelected("Home")}
        >
          <span>H{`        `}</span>
          <span>Home</span>
        </div>

        <div
          className={`nav-element ${selected == "Team" && "active"}`}
          onClick={() => setSelected("Team")}
        >
          <span>T{`        `}</span>
          <span>Team</span>
        </div>

        <div
          className={`nav-element ${selected == "Projects" && "active"}`}
          onClick={() => setSelected("Projects")}
        >
          <span>{`        `}</span>
          <span>Projects</span>
        </div>

        <div
          className={`nav-element ${selected == "Calender" && "active"}`}
          onClick={() => setSelected("Calender")}
        >
          <span>C{`        `}</span>
          <span>Calender</span>
        </div>
      </div>
      <div className="nav-container-right"> r</div>
    </div>
  );
}

export default Navbar;