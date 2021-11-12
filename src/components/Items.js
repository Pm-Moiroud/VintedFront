import Item from "./Item";
import { Link } from "react-router-dom";

const Items = ({ offers, setOffers }) => {
  return (
    <div className="content">
      {offers.offers.map((offer, index) => {
        return (
          <div onClick={() => {}} key={offer._id}>
            <Link to={`/offer/${offer._id}`}>
              <Item
                product_details={offer.product_details}
                product_image={offer.product_image}
                product_price={offer.product_price}
                owner={offer.owner}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
