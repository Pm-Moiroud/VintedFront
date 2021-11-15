import "./ToogleButton.css";
import cx from "classnames";

const ToogleButton = ({ rounded, onToogle, isToogle, setParams }) => {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });

  return (
    <label className="switch">
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
