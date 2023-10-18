## React Board

An easy-to-use React chessboard.

### Usage

```js
import { Board, variantConst } from 'react-board';

const MyBoard = ({ props }) => {

  return (
    <Board
      props={
        variant: variantConst.CLASSICAL,
        onMouseDown: () => {
          // TODO
        },
        onDrop: (ev) => {
          // TODO
        },
        handleMove: (payload) => {
          // TODO
        }
      }
    />
  );
}

export default MyBoard;
```

### License

[The MIT License](https://github.com/chesslablab/react-chess/blob/master/LICENSE).
