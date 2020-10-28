import React from "react";
import Converter from "./components/Converter";
import "./index.css";

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
