const Item = ({ product_details, owner, product_image, product_price }) => {
  return (
    <div className="item">
      <p style={{ margin: "10px 5px" }}>{owner.account.username}</p>

      <img src={product_image.secure_url} alt="" />
      <div className="item-text">
        <div>{product_price} €</div>

        {product_details.map((details, index) => {
          return (
            <div key={index}>
              <p>{details.MARQUE}</p>
              <p className="item-height">{details.TAILLE}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Item;
