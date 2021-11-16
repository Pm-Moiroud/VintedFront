import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Offer from "./pages/Offer";
import NoMatch from "./pages/NoMatch";
import Publish from "./pages/Publish";
import Payement from "./pages/Payement";

function App() {
  const [token, setToken] = useState(Cookies.get("Token") || null);
  const [searchParams, setSearchParams] = useState({});
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

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
        <Route path="publish" element={<Publish token={token} />} />

        <Route
          path="/payement"
          element={
            <Elements stripe={stripePromise}>
              <Payement />
            </Elements>
          }
        />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
