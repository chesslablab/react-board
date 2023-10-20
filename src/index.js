import CapablancaSquares from './CapablancaSquares';
import ClassicalSquares from './ClassicalSquares';
import './index.css';

export const CapablancaBoard = ({
  stateBoard,
  filterMove,
  handleMove
}) => {
  return (
    <CapablancaSquares
      stateBoard={stateBoard}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export const ClassicalBoard = ({
  stateBoard,
  filterMove,
  handleMove
}) => {
  return (
    <ClassicalSquares
      stateBoard={stateBoard}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export * from './common/Ascii';

export * from './piece/SvgPiece';
