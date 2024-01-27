import CapablancaSquares from './CapablancaSquares';
import ClassicalSquares from './ClassicalSquares';

export const CapablancaBoard = ({
  stateBoard,
  filterMove,
  handleMove,
  styleBoard
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
      styleBoard={styleBoard}
    />
  );
}

export const ClassicalBoard = ({
  stateBoard,
  filterMove,
  handleMove,
  styleBoard
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
      styleBoard={styleBoard}
    />
  );
}

export * from './common/Ascii';
export * from './common/Movetext';
export * from './common/Nag';
export * from './common/Opening';
export * from './common/Pgn';
export * from './data/data';
export * from './piece/SvgPiece';
export * from './HistoryButtons';
export * from './MovesMetadataTable';
export * from './OpeningTable';
export * from './RavMovesInline';
export * from './RavMovesTable';
export * from './SanMovesInline';
export * from './SanMovesTable';
