import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Inicio } from "./components/Inicio";
import { Footer } from "./components/Footer";
import { TareasCompleto } from "./components/TareasCompleto";
import { ClimaCompleto } from "./components/ClimaCompleto";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Inicio></Inicio>
        </Route>
        <Route path="/tarea">
          <TareasCompleto></TareasCompleto>
        </Route>
        <Route path="/clima">
          <ClimaCompleto></ClimaCompleto>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
