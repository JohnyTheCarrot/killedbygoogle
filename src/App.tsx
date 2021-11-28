import React from "react";
import HeaderDesktop from "./components/HeaderDesktop";
import "./assets/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderMobile from "./components/HeaderMobile";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <HeaderDesktop />
        <HeaderMobile />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<p>about</p>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
