import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { ComoUsar } from "./complementosTareas/ComoUsar";
import FormTareas from "./complementosTareas/FormTareas";
import Tareas from "./complementosTareas/Tareas";
import "./TareasCompleto.css";

const TareasCompleto = () => {
  const initialState = [];
  const [tareas, setTareas] = useState(initialState);

  useEffect(() => {
    console.log(tareas);
  }, [tareas]);

  return (
    <div className="tareasCompleto">
      <div>
        <h1 id="tareas">Administrador de tareas</h1>
      </div>
      <FormTareas
        className="formTarea"
        setTareas={setTareas}
        tareas={tareas}
      ></FormTareas>
      <Tareas key="unica" tareas={tareas} setTareas={setTareas}></Tareas>
      <ComoUsar />
    </div>
  );
};

export { TareasCompleto };
