import React, { useEffect } from "react";
import HeaderDesktop from "./components/HeaderDesktop";
import "./assets/global.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HeaderMobile from "./components/HeaderMobile";
import Home from "./pages/Home";
import About from "./pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <HeaderDesktop />
        <HeaderMobile />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
