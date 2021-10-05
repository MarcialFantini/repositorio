import React from "react";

import { Navbar } from "./components/Navbar";
import { Inicio } from "./components/Inicio";
import { Footer } from "./components/Footer";
import { TareasCompleto } from "./components/TareasCompleto";
import { ClimaCompleto } from "./components/ClimaCompleto";
function App() {
  return (
    <div>
      <Navbar />

      <Inicio></Inicio>

      <TareasCompleto></TareasCompleto>

      <ClimaCompleto></ClimaCompleto>

      <Footer />
    </div>
  );
}

export default App;
