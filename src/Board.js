import CapablancaFischerSquares from './CapablancaFischerSquares';
import CapablancaSquares from './CapablancaSquares';
import Chess960Squares from './Chess960Squares';
import ClassicalSquares from './ClassicalSquares';
import * as variantConst from './variantConst';

const Board = ({
  props,
  filterMove,
  handleMove
}) => {
  if (props.variant === variantConst.CAPABLANCA_FISCHER) {
    return (
      <CapablancaFischerSquares
        props={props}
        filterMove={filterMove}
        handleMove={handleMove}
      />
    );
  } else if (props.variant === variantConst.CAPABLANCA) {
    return (
      <CapablancaSquares
        props={props}
        filterMove={filterMove}
        handleMove={handleMove}
      />
    );
  } else if (props.variant === variantConst.CHESS_960) {
    return (
      <Chess960Squares
        props={props}
        filterMove={filterMove}
        handleMove={handleMove}
      />
    );
  }

  return (
    <ClassicalSquares
      props={props}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default Board;
