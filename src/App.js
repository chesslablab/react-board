import { useState } from 'react';
import Ascii from './common/Ascii';
import Pgn from './common/Pgn';
import Piece from './common/Piece';
import ClassicalSquares from './ClassicalSquares';
import * as variantConst from './variantConst';

function App() {
  const initialState = {
    variant: variantConst.CLASSICAL,
    turn: Pgn.symbol.WHITE,
    isCapture: false,
    isCheck: false,
    isMate: false,
    isStalemate: false,
    fen: [Ascii.initialFen()],
    flip: Pgn.symbol.WHITE,
    size: {
      files: 8,
      ranks: 8
    },
  };

  const [state, setState] = useState(initialState);

  const grabPiece = (payload) => {
    const fen = state.fen[state.fen.length - 1].split(' ');
    const ascii = Ascii.toAscii(fen[0]);
    setState({
      ...state,
      ...{
        lan: payload.sq,
        pieceGrabbed: {
          i: payload.i,
          j: payload.j,
          sq: payload.sq,
          ascii: ascii[payload.i][payload.j]
        }
      }});
  };

  const placePiece = (payload) => {
    // TODO
  };

  const filterMove = () => {
    // TODO

    return true;
  };

  const handleMove = (payload) => {
    if (state.turn === Piece.color(payload.piece)) {
      grabPiece(payload);
    } else {
      placePiece(payload);
    }
  };

  return (
    <ClassicalSquares
      props={state}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default App;
