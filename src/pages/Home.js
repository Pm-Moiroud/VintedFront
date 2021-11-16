import Content from "../components/Content";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ searchParams, token }) => {
  const [offers, setOffers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const queryString = Object.keys(searchParams)
        .filter((key) => !!searchParams[key])
        .map((key) => key + "=" + searchParams[key])
        .join("&");

      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?${queryString}`
      );
      const originalsOffers = response.data;
      setOffers(originalsOffers);
      setIsLoading(false);
    };
    fetchData();
  }, [searchParams]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div>
        <Content offers={offers} setOffers={setOffers} token={token} />
      </div>
    </>
  );
};

export default Home;
