import CapablancaSquares from './CapablancaSquares';
import ClassicalSquares from './ClassicalSquares';
import './index.css';

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
