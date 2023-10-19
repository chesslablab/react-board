import CapablancaFischerSquares from './CapablancaFischerSquares';
import CapablancaSquares from './CapablancaSquares';
import Chess960Squares from './Chess960Squares';
import ClassicalSquares from './ClassicalSquares';
import './index.css';

export const CapablancaFischerBoard = ({
  props,
  filterMove,
  handleMove
}) => {
  return (
    <CapablancaFischerSquares
      props={props}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export const CapablancaBoard = ({
  props,
  filterMove,
  handleMove
}) => {
  return (
    <CapablancaSquares
      props={props}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export const Chess960Board = ({
  props,
  filterMove,
  handleMove
}) => {
  return (
    <Chess960Squares
      props={props}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export const ClassicalBoard = ({
  props,
  filterMove,
  handleMove
}) => {
  return (
    <ClassicalSquares
      props={props}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export * from './common/Ascii';

export * from './piece/SvgPiece';
