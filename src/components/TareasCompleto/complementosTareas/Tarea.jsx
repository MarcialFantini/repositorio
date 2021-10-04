import React from "react";
import EditForm from "./EditForm";
const Tarea = (props) => {
  //editar
  const editarOn = () => {
    const editado = [...props.tareas];
    console.log(editado);

    const updateList = editado.map((tarea) => {
      if (tarea.id === props.completo.id) {
        tarea.editar = !tarea.editar;
        return tarea;
      } else {
        return tarea;
      }
    });
    // editado[props.completo.id].editar = !editado[props.completo.id].editar;
    props.setTareas(updateList);
  };

  const eliminar = () => {
    const filtradito = [...props.tareas].filter(
      (item) => item.id !== props.completo.id
    );

    props.setTareas(filtradito);
  };

  return (
    <div className="tareaIndividual">
      <button className="botonesAciones">Completada</button>
      <h3>{props.completo.text}</h3>
      <div className="acciones">
        <button className="botonesAciones" onClick={editarOn}>
          Editar
        </button>
        <button className="botonesAciones" onClick={eliminar}>
          Eliminar
        </button>
      </div>

      {props.completo.editar ? (
        <EditForm
          className="editForm"
          completo={props.completo}
          tareas={props.tareas}
          setTareas={props.setTareas}
        ></EditForm>
      ) : null}
    </div>
  );
};

export default Tarea;
