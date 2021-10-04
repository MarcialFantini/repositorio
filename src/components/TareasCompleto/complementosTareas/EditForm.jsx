import React, { useState } from "react";

const EditForm = (props) => {
  const [TextEditado, setTextEditado] = useState("");
  const handleEdit = (e) => {
    setTextEditado(e.target.value);
  };

  const editadoCompletado = (e) => {
    e.preventDefault();
    const todito = [...props.tareas];
    todito[props.completo.id].text = TextEditado;
    todito[props.completo.id].editar = false;
    props.setTareas(todito);
  };

  return (
    <div>
      <form onSubmit={editadoCompletado}>
        <input onChange={handleEdit} name="text" />
        <button type="submit">Editar</button>
      </form>
    </div>
  );
};

export default EditForm;
