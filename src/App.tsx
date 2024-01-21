import React from "react";
import "./App.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Header } from "./components/Header";
import MainPage from "./pages/MainPage";
import CreatePage from "./pages/CreatePage";
import CreateMember from "./pages/GreenPages/CreateMember";
import CreatePlane from "./pages/GreenPages/CreatePlane";
import CreateAirport from "./pages/GreenPages/CreateAirport";
import CreateJump from "./pages/GreenPages/CreateJump";

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
        <Route path="/upisi/avioni" element={<CreatePlane />}></Route>
        <Route path="/upisi/aerodromi" element={<CreateAirport />}></Route>
        <Route path="/upisi/skok" element={<CreateJump />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
