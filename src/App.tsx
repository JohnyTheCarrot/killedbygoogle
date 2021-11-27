import React from "react";
import HeaderDesktop from "./components/HeaderDesktop";
import "./assets/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderMobile from "./components/HeaderMobile";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <HeaderDesktop />
        <HeaderMobile />
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="/about" element={<p>about</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
