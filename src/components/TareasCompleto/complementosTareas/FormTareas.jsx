import React, { useState } from "react";

const FormTareas = (props) => {
  const stateInitial = {
    id: 0,
    text: "",
    completado: false,
    editar: false,
  };
  const [nuevaTarea, setNuevaTarea] = useState(stateInitial);

  const handleInputText = (e) => {
    setNuevaTarea({ ...nuevaTarea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNuevaTarea({ ...nuevaTarea, id: props.tareas.length + 1 });
    props.setTareas([...props.tareas, nuevaTarea]);
  };

  return (
    <div className="formNuevaTarea">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ingresar nueva tarea"
          onChange={handleInputText}
          type="text"
          name="text"
        />
        <button type="submit">agregar</button>
      </form>
    </div>
  );
};

export default FormTareas;
