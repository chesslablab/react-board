import Board from './Board';
import * as variantConst from './variantConst';

function App() {
  return (
    <Board
      props={{
        fen: 'rnb1k2r/ppp2ppp/5n2/4pq2/1b1P4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -',
        variant: variantConst.CLASSICAL,
        flip: false,
        isCheck: false,
        size: {
          files: 8,
          ranks: 8,
        },
        pieceGrabbed: {},
        filterMove: () => {
          // TODO

          return true;
        },
        onMouseDown: () => {
          // TODO
        },
        onDrop: (ev) => {
          // TODO
        },
        handleMove: (payload) => {
          // TODO
        },
      }}
    />
  );
}

export default App;
