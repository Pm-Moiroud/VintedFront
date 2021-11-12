import "./signup.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    try {
      event.preventDefault();

      const fetchData = async () => {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            email: email,
            username: username,
            phone: "0607080910",
            password: password,
          }
        );

        setToken(response.data.token);
      };

      fetchData();
      if (token) {
        Cookies.set("Token", token, { expires: 30 });
      } else {
        Cookies.remove("Token");
      }
      navigate("/");
    } catch (error) {
      console.log(error.response.status);

      if (error.response.status === 409) {
        console.log(error.response.status);
        setErrorMessage("Mauvais email et/ou mot de passe");
      } else {
        navigate("/");
      }
    }
  };
  return (
    <div className="form-container">
      <h1>S'incrire</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          style={{ background: "#ffff" }}
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ background: "#ffff" }}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ background: "#ffff" }}
          type="Password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="checkbox">
          <input type="checkbox" />
          <div>Accepter les conditions générales </div>
        </div>
        <p className="terms-conditions">
          En m'inscrivant je confirme avoir lu et accepté les Termes et
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18
        </p>
        <span>{errorMessage}</span>
        <button className="connect">S'inscrire</button>
        <Link to="/login">
          <span className="already-user">
            Tu as déjà un compte ? Connecte-toi !
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
