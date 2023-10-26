import CapablancaSquares from './CapablancaSquares';
import ClassicalSquares from './ClassicalSquares';

export const CapablancaBoard = ({
  fen,
  stateBoard,
  filterMove,
  handleMove
}) => {
  return (
    <CapablancaSquares
      fen={fen.split(' ')}
      stateBoard={{
        ...stateBoard,
        ...{
          size: {
            files: 10,
            ranks: 8,
          }
        }
      }}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export const ClassicalBoard = ({
  fen,
  stateBoard,
  filterMove,
  handleMove
}) => {
  return (
    <ClassicalSquares
      fen={fen.split(' ')}
      stateBoard={{
        ...stateBoard,
        ...{
          size: {
            files: 8,
            ranks: 8,
          }
        }
      }}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export * from './common/Ascii';

export * from './piece/SvgPiece';
