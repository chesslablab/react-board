import CapablancaSquares from './CapablancaSquares';
import ClassicalSquares from './ClassicalSquares';

export const CapablancaBoard = ({
  stateBoard,
  filterMove,
  handleMove
}) => {
  return (
    <CapablancaSquares
      stateBoard={{
        ...stateBoard,
        ...{
          fen: stateBoard.fen.split(' '),
        },
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
  stateBoard,
  filterMove,
  handleMove
}) => {
  return (
    <ClassicalSquares
      stateBoard={{
        ...stateBoard,
        ...{
          fen: stateBoard.fen.split(' '),
        },
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

export * from './common/Movetext';

export * from './common/Nag';

export * from './piece/SvgPiece';

export * from './MovesTable';
