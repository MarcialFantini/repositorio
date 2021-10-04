import React from "react";
import Tarea from "./Tarea";

const Tareas = (props) => {
  return (
    <div>
      {props.tareas.map((tarea) => {
        console.log(tarea);
        return (
          <Tarea
            key={tarea.id}
            completo={tarea}
            setTareas={props.setTareas}
            tareas={props.tareas}
          ></Tarea>
        );
      })}
    </div>
  );
};

export default Tareas;
