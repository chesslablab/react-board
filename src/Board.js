import CapablancaSquares from './CapablancaSquares';
import CapablancaFischerSquares from './CapablancaFischerSquares';
import Chess960Squares from './Chess960Squares';
import ClassicalSquares from './ClassicalSquares';
import * as variantConst from './variantConst';

const Board = ({
  props,
  filterMove,
  handleMove,
  onMouseDown,
  onDrop
}) => {
  if (props.variant === variantConst.CAPABLANCA) {
    props.size = {
      files: 10,
      ranks: 8,
    };
    return (
      <CapablancaSquares
        props={props}
        filterMove={filterMove}
        handleMove={handleMove}
        onMouseDown={onMouseDown}
        onDrop={onDrop}
      />
    );
  } else if (props.variant === variantConst.CAPABLANCA_FISCHER) {
    props.size = {
      files: 10,
      ranks: 8,
    };
    return (
      <CapablancaFischerSquares
        props={props}
        filterMove={filterMove}
        handleMove={handleMove}
        onMouseDown={onMouseDown}
        onDrop={onDrop}
      />
    );
  } else if (props.variant === variantConst.CHESS_960) {
    props.size = {
      files: 8,
      ranks: 8,
    };
    return (
      <Chess960Squares
        props={props}
        filterMove={filterMove}
        handleMove={handleMove}
        onMouseDown={onMouseDown}
        onDrop={onDrop}
      />
    );
  }

  props.size = {
    files: 8,
    ranks: 8,
  };
  return (
    <ClassicalSquares
      props={props}
      filterMove={filterMove}
      handleMove={handleMove}
      onMouseDown={onMouseDown}
      onDrop={onDrop}
    />
  );
}

export default Board;
