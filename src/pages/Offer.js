import "./offer.css";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Offer = () => {
  const [offer, setOffer] = useState();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [userId, setUserId] = useState("");

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setOffer(response.data);
      setIsLoading(false);
      setTitle(response.data.product_name);
      setPrice(response.data.product_price);
      setUserId(response.data.owner._id);
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

            <Link
              to="/payement"
              state={{ title: { title }, price: { price }, userId: { userId } }}
            >
              <button style={{ width: "100%" }}>Acheter</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Offer;
