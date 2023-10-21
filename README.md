## React Board

An easy-to-use React chessboard.

### Usage

```js
import { ClassicalBoard } from 'react-board';

function App() {
  const stateBoard = {
    turn: 'w',
    isCapture: false,
    isCheck: false,
    isMate: false,
    isStalemate: false,
    fen: [
      'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -',
      'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3',
      'r1bqkbnr/pppppppp/2n5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -',
      'r1bqkbnr/pppppppp/2n5/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -',
    ],
    flip: 'w',
  };

  const handleFilterMove = () => {
    // Implement pre-processing logic for the chess move.
  }

  const handleMove = () => {
    // Implement validation logic for the chess move.
  }

  return (
    <ClassicalBoard
      stateBoard={stateBoard}
      goBack={0}
      filterMove={handleFilterMove}
      handleMove={handleMove}
    />
  );
}

export default App;
```

### License

[The MIT License](https://github.com/chesslablab/react-chess/blob/master/LICENSE).
