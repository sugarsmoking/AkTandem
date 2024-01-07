import React from "react";
import "./App.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Header } from "./components/Header";
import MainPage from "./pages/MainPage";
import CreatePage from "./pages/CreatePage";
import CreateMember from "./pages/GreenPages/CreateMember";

//wow

function App() {
  return (
    <BrowserRouter>
      <Link to={`/naslovnica`}>
        <Header />
      </Link>

      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/naslovnica" element={<MainPage />}></Route>
        <Route path="/upisi" element={<CreatePage />}></Route>
        <Route path="/upisi/clanovi" element={<CreateMember />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
