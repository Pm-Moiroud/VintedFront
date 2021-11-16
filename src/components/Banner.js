import bannerImage from "../assets/images/banner-vinted.jpg";
import banner from "../assets/images/banner.svg";

import { useNavigate } from "react-router";

const Banner = ({ token }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (token) {
      navigate("/publish");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="container-banner">
      <div className="di-banner">
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <button onClick={handleClick}>Vends maintenant</button>
        <a href="https://www.vinted.fr/how_it_works">
          <br /> Découvrir comment ça marche
        </a>
      </div>
      <img className="banner-img" src={bannerImage} alt="not found" />
      <img className="banner-wreck" src={banner} alt="not found" />
    </div>
  );
};

export default Banner;
