import { useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import ResizeSlider from './ResizeSlider';
import Squares from './Squares';
import styles from './styles';

const CapablancaSquares = ({ stateBoard, filterMove, handleMove }) => {
  const maxWidth = {
    900: useMediaQuery('(max-width:900px)'),
  };
  const [sliderValue, setSliderValue] = useState(100);

  return (
    <>
      <Squares
        style={{
          ...styles.capablancaSquares,
          ...{
            gridTemplateColumns: maxWidth['900']
              ? `repeat(10, [col] ${0.09 * sliderValue}vw)`
              : `repeat(10, [col] ${0.04 * sliderValue}vw)`,
            gridTemplateRows: maxWidth['900']
              ? `repeat(8, [col] ${0.09 * sliderValue}vw)`
              : `repeat(8, [col] ${0.04 * sliderValue}vw)`,
          },
        }}
        stateBoard={stateBoard}
        filterMove={filterMove}
        handleMove={handleMove}
      />
      <ResizeSlider setSliderValue={setSliderValue} />
    </>
  );
};

export default CapablancaSquares;
