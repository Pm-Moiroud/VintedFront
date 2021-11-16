import vintedLogo from "../assets/images/vintedLogo.svg";
import { BiSearch } from "react-icons/bi";

import ModaleFilter from "./ModaleFilter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";

import Cookies from "js-cookie";

const Header = ({ setParams, token, setToken }) => {
  const [isToogle, setIsToogle] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    if (token) {
      navigate("/publish");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="sticky">
      <div className="header-container ">
        <div className="loop-container">
          <Link to="/">
            <img className="vinted-logo" src={vintedLogo} alt="not found" />
          </Link>
          <BiSearch className="loop" />

          <input
            className="input-header"
            onChange={(e) =>
              setParams((prevParams) => ({
                ...prevParams,
                title: e.target.value,
              }))
            }
            placeholder="Chercher des articles"
            type="text"
          />
        </div>
        <div className="signup-btns">
          {token ? (
            <button
              className="modale-header"
              onClick={() => {
                setToken(null);
                Cookies.remove("Token");
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <div className="login-signup">
              <Link to="/SignUp">
                <button className="signup-btn">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="Login-btn">Se connecter</button>
              </Link>
            </div>
          )}

          <button onClick={handleClick} className="sell-button">
            Vends maintenant
          </button>
        </div>
      </div>
      <ModaleFilter
        isToogle={isToogle}
        setIsToogle={setIsToogle}
        setParams={setParams}
      />
    </div>
  );
};

export default Header;
