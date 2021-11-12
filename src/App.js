import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Offer from "./pages/Offer";
import NoMatch from "./pages/NoMatch";

function App() {
  const [token, setToken] = useState();

  return (
    <Router>
      <Header token={token} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="offer/:id" element={<Offer />} />
        <Route
          path="login"
          element={<Login token={token} setToken={setToken} />}
        ></Route>
        <Route
          path="signup"
          element={<SignUp token={token} setToken={setToken} />}
        ></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;

/* status 409, mettre la div mauvais email/mdp*/ 