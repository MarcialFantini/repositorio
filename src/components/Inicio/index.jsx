import React from "react";
import "./inicio.css";

const Inicio = () => {
  return (
    <div id="inicio" className="container-inicio">
      <div className="col-persona-contacto">
        <div className="marcial-fantini">
          <div className="nombre">
            <h1>Marcial Domingo Fantini</h1>
          </div>
          <div className="cargo">
            <h3>Desarrollador Front-end Junior</h3>
          </div>
        </div>
        <div className="contacto">
          <h3>¿Como me puedes contactar?</h3>
          <div className="particular">
            <h4>Celular:</h4>
            <p>+543533685147</p>
          </div>
          <div className="correo">
            <h4>Correo electrónico:</h4>
            <p>marcialfantini@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="col-habilidades-perfil">
        <div className="habilidades">
          <h3 className="alineado">Habilidades Profecionales</h3>
          <h4 className="alineado">Lenguajes de codificacion:</h4>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>React js</li>
          </ul>
        </div>
        <div className="perfil">
          <h4>Perfil personal</h4>
          <p>
            Soy desarrollador de software, cuento con gran capacidad para la
            resolución de problemas y experiencia comprobable en la creación y
            diseño de sofware en un entorno de pruebas.
          </p>
        </div>
      </div>
      <div className="col-resumen-profecional">
        <div className="proyectos">
          <h3>Resumen profecional</h3>
          <h4>Proyectos personales</h4>
          <ul>
            <li>Aplicacion del clima con fech y api publica.</li>
            <li>Aplicacion de administracion de tareas de nombre Todoo.</li>
            <li>Esta App en la que esta leyendo.</li>
          </ul>
        </div>
        <div className="habilidades-desarroyadas">
          <h4>Habilidades desarrolladas durante los proyectos</h4>
          <ul>
            <li>
              Diseño y creo soluciones de software para resolver puntos de
              conflicto para varios clientes
            </li>
            <li>Verifico la viabilidad de prototipos de software</li>
            <li>Modifico el código para solucionar errores</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Inicio };
