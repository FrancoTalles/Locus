import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header.jsx";

import Login from "../pages/Login.jsx";
import Feed from "../pages/Feed.jsx";
import NewAnimal from "../pages/NewAnimal.jsx//";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/novo-animal" element={<NewAnimal />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
