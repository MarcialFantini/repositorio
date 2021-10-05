import React, { useEffect, useState } from "react";
import { Barra } from "./ComponentesClima/Barra";
import { Circulo } from "./ComponentesClima/Circulo";
import "./Clima.css";

const ClimaCompleto = () => {
  const apiKey = "&appid=04c6f917c2fd9188ad8f376db93e941b";

  const initialUrl = `api.openweathermap.org/data/2.5/weather?&units=metric`;
  const [url, setUrl] = useState(initialUrl);
  const initialState = {
    temp: 0,
    ciudad: "",
    min: 0,
    max: 0,
    icon: "",
  };
  const [clima, setClima] = useState(initialState);

  const buscarData = async (url) => {
    const data = await fetch(url);
    const datos = await data.json();
    let climaFecht = {
      temp: datos.main.temp,
      ciudad: datos.name,
      min: datos.main.temp_min,
      max: datos.main.temp_max,
      icon: datos.weather[0].icon,
    };
    setClima(climaFecht);
    console.log(datos);
  };

  useEffect(() => {
    buscarData(
      "http://api.openweathermap.org/data/2.5/weather?q=cordoba&units=metric&appid=04c6f917c2fd9188ad8f376db93e941b"
    );
  }, []);

  return (
    <div className="elClima">
      <div id="clima"></div>
      <Barra
        buscarData={buscarData}
        url={url}
        setUrl={setUrl}
        apiKey={apiKey}
      />
      <h1>{clima.ciudad}</h1>
      <Circulo clima={clima} />
    </div>
  );
};

export { ClimaCompleto };
