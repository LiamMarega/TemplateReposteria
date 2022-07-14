import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Landingpage from "./components/Landingpage/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
