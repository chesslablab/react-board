import useMediaQuery from './hooks/useMediaQuery';
import Squares from './Squares';
import styles from './styles';

const CapablancaSquares = ({
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
        ...styles.capablancaSquares,
        ...{
          gridTemplateColumns: maxWidth['900'] ? "repeat(8, [col] 12vw)" : "repeat(8, [col] 5vw)",
          gridTemplateRows: maxWidth['900'] ? "repeat(8, [col] 12vw)" : "repeat(8, [col] 5vw)",
        },
      }}
      stateBoard={stateBoard}
      goBack={goBack}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default CapablancaSquares;
