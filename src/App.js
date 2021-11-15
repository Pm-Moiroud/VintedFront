import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Offer from "./pages/Offer";
import NoMatch from "./pages/NoMatch";

function App() {
  const [token, setToken] = useState();
  const [searchParams, setSearchParams] = useState({});

  return (
    <Router>
      <Header token={token} setToken={setToken} setParams={setSearchParams} />
      <Routes>
        <Route path="/" element={<Home searchParams={searchParams} />} />
        <Route path="offer/:id" element={<Offer />} />
        <Route
          path="login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route
          path="signup"
          element={<Signup token={token} setToken={setToken} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
