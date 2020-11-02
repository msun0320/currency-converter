import React from "react";
import Converter from "./components/Converter";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <h1>Always get the real exchange rate</h1>
      </header>

      <main>
        <Converter />
      </main>
    </>
  );
}

export default App;
