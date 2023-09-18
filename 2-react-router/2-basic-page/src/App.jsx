import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// link - no page refresh

function App() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Hello, React Router!</h1>;
}

export default App;
