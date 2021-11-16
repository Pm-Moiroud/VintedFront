import "./modaleFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useLocation, useNavigate } from "react-router";
import ToogleButton from "./ToogleButton/ToogleButton";
import RangeSlider from "./RangeSlider/RangeSlider";

const ModalFilter = ({ isToogle, setIsToogle, setParams }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {location.pathname === "/" && (
        <div className="second-header-lign">
          <div className="toogle-container">
            <ToogleButton
              rounded={true}
              isToogle={isToogle}
              onToogle={() => {
                setIsToogle(!isToogle);
                if (isToogle === false) {
                  setParams((prevParams) => ({
                    ...prevParams,
                    sort: "price-asc",
                  }));
                } else {
                  setParams({});
                }
              }}
            />
          </div>
          <RangeSlider setParams={setParams} />
          <div className="social">
            <span className="social-medias">Socials Medias</span>
            <a
              target="_blank"
              href="https://www.facebook.com/vintedfr/?brand_redir=205022842980680"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com/vinted"
              target="_blank"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/vinted/"
              className="instagram social"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalFilter;
