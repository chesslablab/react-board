## React Board

An easy-to-use React chessboard.

### Usage

```js
import { Board, variantConst } from 'react-board';

const MyBoard = ({ props }) => {
  return (
    <Board
      props={{
        fen: 'rnb1k2r/ppp2ppp/5n2/4pq2/1b1P4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -',
        variant: variantConst.CLASSICAL,
        flip: false,
        size: {
          files: 8,
          ranks: 8,
        },
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

export default MyBoard;
```

### License

[The MIT License](https://github.com/chesslablab/react-chess/blob/master/LICENSE).
