import vintedLogo from "../assets/images/vintedLogo.svg";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
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
            type="text"
            placeholder="Rechercher des articles"
          />
        </div>
        <div className="signup-btns">
          <div className="buttons-container">
            <Link to="/SignUp">
              <button className="signup-btn">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="Login-btn">Se connecter</button>
            </Link>
          </div>
          <Link to="/signup">
            <button className="sell-button">Vends maintenant</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
