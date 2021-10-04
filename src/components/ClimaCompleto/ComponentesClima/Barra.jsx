import React, { useState } from "react";

const Barra = (props) => {
  const [busquedaCiudad, setBusquedaCiudad] = useState("cordoba");
  const handleInputText = (event) => {
    setBusquedaCiudad(event.target.value);
  };

  const submitBusqueda = (e) => {
    e.preventDefault();
    props.setUrl(
      `http://api.openweathermap.org/data/2.5/weather?q=${busquedaCiudad}&units=metric&appid=04c6f917c2fd9188ad8f376db93e941b`
    );
    props.buscarData(props.url);
  };

  return (
    <div>
      <form onSubmit={submitBusqueda} className="form">
        <input
          className="input"
          onChange={handleInputText}
          type="text"
          name="ciudad"
          placeholder="Ingrese ciudad "
        />
        <button className="boton" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};

export { Barra };
