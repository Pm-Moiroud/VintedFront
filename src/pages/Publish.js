import "./publish.css";
import Preview from "../components/Preview/Preview";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [condition, setCondition] = useState();
  const [city, setCity] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [price, setPrice] = useState();

  const handleSubmit = async (event) => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("picture", file);
    formData.append("description", description);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("price", price);
    try {
      event.preventDefault();

      const fetchData = async () => {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
      };

      fetchData();
    } catch (error) {
      console.log(error.response.message);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Vends ton article</h1>
      <section className="section1-photo">
        <Preview selectedImage={file} setSelectedImage={setFile} />
      </section>
      <section className="section2-title">
        <div>
          <h2>Titre</h2>
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
          />
        </div>
        <div>
          <h2>Décris ton article</h2>
          <input
            onChange={(event) => setDescription(event.target.value)}
            type="text"
          />
        </div>
      </section>
      <section className="section3-details">
        <div>
          <h2>Marque</h2>
          <input
            onChange={(event) => setBrand(event.target.value)}
            type="text"
          />
        </div>
        <div>
          <h2>Taille</h2>
          <input
            onChange={(event) => setSize(event.target.value)}
            type="text"
          />
        </div>
        <div>
          <h2>Couleur</h2>
          <input
            onChange={(event) => setColor(event.target.value)}
            type="text"
          />
        </div>
        <div>
          <h2>Etat</h2>
          <input
            onChange={(event) => setCondition(event.target.value)}
            type="text"
          />
        </div>
        <div>
          <h2>Lieu</h2>
          <input
            onChange={(event) => setCity(event.target.value)}
            type="text"
          />
        </div>
      </section>
      <section className="section4-price">
        <div className="input-price">
          <h2>Prix</h2>
          <input
            onChange={(event) => setPrice(event.target.value)}
            type="text"
          />
        </div>
        <div>
          <input type="checkbox" />
          <span>Je suis intéressé(e) par les échanges</span>
        </div>
      </section>

      <button>Ajouter</button>
    </form>
  );
};

export default Publish;
