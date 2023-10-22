## React Board

An easy-to-use React chessboard.

### Demo

Check out the [demo](https://www.chesslablab.com/) in the [React Chess](https://github.com/chesslablab/react-chess) repository.

### Install

```
npm i @chesslablab/react-board
```

### Usage

```js
import { ClassicalBoard } from '@chesslablab/react-board';

function App() {
  const stateBoard = {
    turn: 'w',
    isCapture: false,
    isCheck: false,
    isMate: false,
    isStalemate: false,
    fen: [
      'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -',
      'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3',
      'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -',
      'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3',
      'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -',
      'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -',
      'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq -',
      'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq -',
      'rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQ -',
      'rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R b KQ -',
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

![Figure 1](/assets/figure_01.png)

### License

[The MIT License](https://github.com/chesslablab/react-chess/blob/master/LICENSE).
