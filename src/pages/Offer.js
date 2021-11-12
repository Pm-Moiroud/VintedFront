import "./offer.css";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
const Offer = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setOffer(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="background">
      <div className="offer-container">
        <img src={offer.product_image.secure_url} alt="" />

        <section>
          <h4>{offer.product_price} €</h4>
          <div className="list">
            <ul>
              {/* COMMENTAIRES */}
              {offer.product_details.map((elem, index) => {
                const keys = Object.keys(elem);
                return (
                  <li className="offer-list">
                    <div>
                      <span className="offer-col1">{keys[0]} :</span>
                    </div>
                    <div>
                      <span className="offer-col2">{elem[keys[0]]}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <h1>{offer.product_name}</h1>
          <div className="desc">
            <p className="offer-desc">{offer.product_description}</p>
            <div className="icon-flex">
              <MdAccountCircle
                size={40}
                color={"#09aeb6"}
                style={{ margin: "0 20px 0 0" }}
              />
              <p className="offer-username">{offer.owner.account.username}</p>
            </div>

            <button>Acheter</button>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Offer;
