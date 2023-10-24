import useMediaQuery from './hooks/useMediaQuery';
import Squares from './Squares';
import styles from './styles';

const ClassicalSquares = ({
  stateBoard,
  goBack,
  filterMove,
  handleMove
}) => {
  const maxWidth = {
    '900': useMediaQuery("(max-width:900px)")
  };

  return (
    <Squares
      style={{
        ...styles.classicalSquares,
        ...{
          gridTemplateColumns: maxWidth['900'] ? "repeat(10, [col] 9vw)" : "repeat(10, [col] 4vw)",
          gridTemplateRows: maxWidth['900'] ? "repeat(8, [col] 9vw)" : "repeat(8, [col] 4vw)",
        },
      }}
      stateBoard={stateBoard}
      goBack={goBack}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default ClassicalSquares;
