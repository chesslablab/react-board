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
  onDragStart,
  onDrop
}) => {
  if (props.variant === variantConst.CAPABLANCA) {
    return (
      <CapablancaSquares
        props={{
          ...props,
          ...{
            size: {
              files: 10,
              ranks: 8,
            },
          },
        }}
        filterMove={filterMove}
        handleMove={handleMove}
        onMouseDown={onMouseDown}
        onDragStart={onDragStart}
        onDrop={onDrop}
      />
    );
  } else if (props.variant === variantConst.CAPABLANCA_FISCHER) {
    return (
      <CapablancaFischerSquares
        props={{
          ...props,
          ...{
            size: {
              files: 10,
              ranks: 8,
            },
          },
        }}
        filterMove={filterMove}
        handleMove={handleMove}
        onMouseDown={onMouseDown}
        onDragStart={onDragStart}
        onDrop={onDrop}
      />
    );
  } else if (props.variant === variantConst.CHESS_960) {
    return (
      <Chess960Squares
        props={{
          ...props,
          ...{
            size: {
              files: 8,
              ranks: 8,
            },
          },
        }}
        filterMove={filterMove}
        handleMove={handleMove}
        onMouseDown={onMouseDown}
        onDragStart={onDragStart}
        onDrop={onDrop}
      />
    );
  }

  return (
    <ClassicalSquares
      props={{
        ...props,
        ...{
          size: {
            files: 8,
            ranks: 8,
          },
        },
      }}
      filterMove={filterMove}
      handleMove={handleMove}
      onMouseDown={onMouseDown}
      onDragStart={onDragStart}
      onDrop={onDrop}
    />
  );
}

export default Board;
