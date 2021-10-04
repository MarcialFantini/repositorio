import React from "react";

const Circulo = ({ clima }) => {
  return (
    <div>
      <div className="circulo">
        <div className="iconClima"></div>
        <h1>{clima.temp}</h1>
        <img
          src={`http://openweathermap.org/img/wn/${clima.icon}@2x.png`}
          alt=""
        />
        <h3>
          Min {clima.min} / Max {clima.max}
        </h3>
      </div>
    </div>
  );
};

export { Circulo };
