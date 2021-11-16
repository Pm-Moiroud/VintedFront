import "./ToogleButton.css";
import cx from "classnames";

const ToogleButton = ({ rounded, onToogle, isToogle }) => {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });

  return (
    <label className="switch">
      <span className="switch-sort">Trier par prix croissant</span>
      <input
        type="checkbox"
        checked={isToogle}
        onChange={onToogle}
        className="toogle-button"
      />
      <span className={sliderCX}></span>
    </label>
  );
};

export default ToogleButton;
