## React Board

An easy-to-use React chessboard.

### Usage

```js
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
    if (filterMove()) {
      // TODO
      console.log('mouse down');
    }
  };

  const onDragStart = () => {
    if (filterMove()) {
      // TODO
      console.log('drag start');
    }
  };

  const onDrop = (ev) => {
    ev.preventDefault();
    if (filterMove()) {
      // TODO
      console.log('drop');
    }
  };

  return (
    <Board
      props={initialState}
      filterMove={filterMove}
      handleMove={handleMove}
      onMouseDown={onMouseDown}
      onDragStart={onDragStart}
      onDrop={onDrop}
    />
  );
}

export default App;
```

### License

[The MIT License](https://github.com/chesslablab/react-chess/blob/master/LICENSE).
