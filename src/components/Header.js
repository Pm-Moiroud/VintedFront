import vintedLogo from "../assets/images/vintedLogo.svg";
import { BiSearch } from "react-icons/bi";
import ToogleButton from "./ToogleButton/ToogleButton";
import RangeSlider from "./RangeSlider/RangeSlider";
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
      <div className="header-container container">
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
                navigate("/home");
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
          <div className="buttons-container"></div>

          <button onClick={handleClick} className="sell-button">
            Vends maintenant
          </button>
        </div>
      </div>
      <div className="second-header-lign">
        <ToogleButton
          rounded={true}
          isToogle={isToogle}
          onToogle={() => {
            setIsToogle(!isToogle);
            if (isToogle === false) {
              setParams((prevParams) => ({
                ...prevParams,
                sort: "price-asc",
              }));
            } else {
              setParams({});
            }
          }}
        />
        <span className="switch-sort">Trier par prix croissant</span>

        <RangeSlider setParams={setParams} />
      </div>
    </div>
  );
};

export default Header;
