import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="icon"></div>
      <div className="navbs">
        <div className="link">
          <a href="#inicio">Inicio</a>
        </div>
        <div className="link">
          <a href="#tareas">Tareas</a>
        </div>
        <div className="link">
          <a href="#clima">Clima</a>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
