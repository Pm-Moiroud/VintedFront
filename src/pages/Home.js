import Content from "../components/Content";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [offers, setOffers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setOffers(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div>
        <Content offers={offers} setOffers={setOffers} />
      </div>
    </>
  );
};

export default Home;
