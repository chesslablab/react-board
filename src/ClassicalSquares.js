import { useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import ResizeSlider from './ResizeSlider';
import Squares from './Squares';
import styles from './styles';

const ClassicalSquares = ({ stateBoard, goBack, filterMove, handleMove }) => {
  const maxWidth = {
    900: useMediaQuery('(max-width:900px)'),
  };
  const [sliderValue, setSliderValue] = useState(100);

  return (
    <>
      <Squares
        style={{
          ...styles.classicalSquares,
          ...{
            gridTemplateColumns: maxWidth['900']
              ? `repeat(8, [col] ${0.12 * sliderValue}vw)`
              : `repeat(8, [col] ${0.05 * sliderValue}vw)`,
            gridTemplateRows: maxWidth['900']
              ? `repeat(8, [col] ${0.12 * sliderValue}vw)`
              : `repeat(8, [col] ${0.05 * sliderValue}vw)`,
          },
        }}
        stateBoard={stateBoard}
        goBack={goBack}
        filterMove={filterMove}
        handleMove={handleMove}
      />
      <ResizeSlider setSliderValue={setSliderValue} />
    </>
  );
};

export default ClassicalSquares;
