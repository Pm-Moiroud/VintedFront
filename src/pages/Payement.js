import "./payement.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [valid, setValid] = useState("");
  const stripe = useStripe();
  const element = useElements();
  const location = useLocation();
  const navigate = useNavigate();

  const states = location.state;

  const title = states.title.title;
  const amount = states.price.price;
  const userId = states.userId.userId;

  const fraisProtection = 0.01 * amount;
  const fraisPort = 0.05 * amount;
  const total = amount + fraisProtection + fraisPort;

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const cardElements = element.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElements, {
        name: userId,
      });

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeResponse.token.id,
          amount,
          title,
        }
      );

      if (response.status === 200) {
        setValid("Paiement validé !");
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        alert(
          "Le paiement, n'a pas fonctionné veuillez réesayer dans quelques instants"
        );
      }
    } catch (error) {
      console.log(error.response.message);
    }
  };

  return (
    <div className="background">
      <div className="payement-container">
        <h2>Résumé de la commande</h2>
        <ul>
          <li>
            <span>Commande</span> <span>{amount} €</span>
          </li>
          <li>
            <span> Frais protection acheteurs</span>
            <span>{fraisProtection} €</span>
          </li>
          <li>
            <span>Frais de port</span> <span>{fraisPort} €</span>
          </li>
          <li className="total-payement">
            <h1>Total</h1> <span>{total} €</span>
          </li>
        </ul>
        <p>
          Il ne vous reste plus qu'une étape pour vous offrir {""}
          <strong>{title}</strong>. Vous allez payer <strong>{total}€</strong>{" "}
          (frais de protection et frais de port inclus).
        </p>
        <form onSubmit={handleSubmit}>
          <CardElement className="cart-component" />
          <strong></strong>
          <button type="submit" className="submit-button">
            Payer
          </button>
          <span className="modale-payement">{valid}</span>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
