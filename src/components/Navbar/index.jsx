import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="icon"></div>
      <div className="navbs">
        <div className="link">
          <Link to="/">Inicio</Link>
        </div>
        <div className="link">
          <Link to="/tarea">Tareas</Link>
        </div>
        <div className="link">
          <Link to="/clima">Clima</Link>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
