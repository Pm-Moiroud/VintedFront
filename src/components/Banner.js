import bannerImage from "../assets/images/banner-vinted.jpg";
import banner from "../assets/images/banner.svg";

const Banner = () => {
  return (
    <div className="container-banner">
      <div className="di-banner">
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <button>Vends maintenant</button>
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
