import * as React from "react";
import { Range, getTrackBackground } from "react-range";
import { useState } from "react";

const STEP = 1;
const MIN = 1;
const MAX = 500;

const Slider = ({ setParams }) => {
  const [values, setValues] = useState([1, 500]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        left: "15vw",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "15px",
          top: "25px",

          fontSize: "12px",
        }}
      >
        Prix entre :
      </span>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setValues(values);

          setParams((prevParams) => ({
            ...prevParams,
            priceMin: values[0],
            priceMax: values[1],
          }));
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "300px",
              marginTop: "15px",
              marginLeft: "100px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "2px",
                width: "100%",
                borderRadius: "4px",

                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#09aeb6", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#09aeb6",
              }}
            >
              {values[index].toFixed(1)}
            </div>
            <div
              style={{
                height: "1px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default Slider;
