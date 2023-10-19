import CapablancaFischerSquares from './CapablancaFischerSquares';
import CapablancaSquares from './CapablancaSquares';
import Chess960Squares from './Chess960Squares';
import ClassicalSquares from './ClassicalSquares';
import './index.css';

export const CapablancaFischer = ({
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

export const Capablanca = ({
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

export const Chess960 = ({
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

export const Classical = ({
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
