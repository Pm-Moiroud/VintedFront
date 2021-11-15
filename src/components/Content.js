import Items from "./Items";
import Banner from "./Banner";

const Content = ({ offers }) => {
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <h3 className="fil-actu">Fil d'actu</h3>
      <div className="content">
        <Items offers={offers} />
      </div>
    </>
  );
};

export default Content;
