import { useState } from 'react';
import Ascii from './common/Ascii';
import Pgn from './common/Pgn';
import Piece from './common/Piece';
import Board from './Board';
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
    const newState = Object.assign({}, state);
    newState.lan = payload.sq;
    newState.pieceGrabbed = {
      i: payload.i,
      j: payload.j,
      sq: payload.sq,
      ascii: ascii[payload.i][payload.j],
    };
    setState(newState);
  };

  const placePiece = (payload) => {
    if (state.pieceGrabbed) {
      const newState = Object.assign({}, state);
      if (state.pieceGrabbed.ascii === ' . ') {
        delete newState.pieceGrabbed;
      } else {
        newState.lan += payload.sq;
        newState.turn = newState.turn === Pgn.symbol.WHITE ? Pgn.symbol.BLACK : Pgn.symbol.WHITE;
        newState.piecePlaced = payload.piecePlaced;
        delete newState.pieceGrabbed;
      }
      setState(newState);
    }
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
    <Board
      props={state}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default App;
