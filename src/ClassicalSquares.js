import { useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import ResizeSlider from './ResizeSlider';
import Squares from './Squares';
import styles from './styles';

const ClassicalSquares = ({
  fen,
  stateBoard,
  filterMove,
  handleMove
}) => {
  const maxWidth = {
    900: useMediaQuery('(max-width:900px)'),
  };
  const [sliderValue, setSliderValue] = useState(100);

  return (
    <>
      <Squares
        fen={fen}
        stateBoard={stateBoard}
        filterMove={filterMove}
        handleMove={handleMove}
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
      />
      <ResizeSlider setSliderValue={setSliderValue} />
    </>
  );
};

export default ClassicalSquares;
