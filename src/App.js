import Ascii from './common/Ascii';
import Pgn from './common/Pgn';
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

  const filterMove = () => {
    // TODO

    return true;
  };

  const handleMove = () => {
    // TODO
  };

  const onMouseDown = () => {
    // TODO

    return true;
  };

  const onDrop = (ev) => {
    // TODO

    return true;
  };

  return (
    <Board
      props={initialState}
      filterMove={filterMove}
      handleMove={handleMove}
      onMouseDown={onMouseDown}
      onDrop={onDrop}
    />
  );
}

export default App;
