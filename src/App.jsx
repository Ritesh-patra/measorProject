import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return <div className="w-full h-screen bg-zinc-400 flex">
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </div>;
}

export default App;
