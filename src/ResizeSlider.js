import React from "react";
import styles from "./styles";
import useMediaQuery from "./hooks/useMediaQuery";

const ResizeSlider = ({setSliderValue}) => {
  const maxWidth = {
    900: useMediaQuery("(max-width:900px)"),
  };
  return (
    <input
      type="range"
      min="30"
      max="100"
      defaultValue="100"
      style={{...styles.slider,
        ...{
          width: maxWidth["900"]
              ? `96vw`
              : `40vw`,
        }
      }}
      onChange={(e) => setSliderValue(e.target.value)}
    />
  );
};

export default ResizeSlider;
