import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./AppBar.css";
import "./App.css";
import NotFound from "./NotFound";
import Convertisseur from "./Convertisseur";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Convertisseur />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
