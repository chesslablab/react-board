## ReactBlab

An easy-to-use React library of chess components.

### Demo

Check out the [demo](https://www.chesslablab.com/) in the [React Chess](https://github.com/chesslablab/react-chess) repository.

### Install

```
npm i @chesslablab/reactblab
```

### Usage

#### Initialize a Classical Board

```js
import { ClassicalBoard } from '@chesslablab/reactblab';

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

  const filterMove = () => {
    // Implement pre-processing logic for the chess move.
  }

  const handleMove = () => {
    // Implement validation logic for the chess move.
  }

  return (
    <ClassicalBoard
      stateBoard={stateBoard}
      goBack={-5}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default App;
```

![Figure 1](/assets/figure_01.png)

#### Initialize a Capablanca Board

```js
import { CapablancaBoard } from '@chesslablab/reactblab';

function App() {
  const stateBoard = {
    turn: 'w',
    isCapture: false,
    isCheck: false,
    isMate: false,
    isStalemate: false,
    fen: [
      'rnabqkbcnr/pppppppppp/10/10/10/10/PPPPPPPPPP/RNABQKBCNR w KQkq -',
      'rnabqkbcnr/pppppppppp/10/10/5P4/10/PPPPP1PPPP/RNABQKBCNR b KQkq f3',
      'rnabqkbcnr/ppppp1pppp/10/5p4/5P4/10/PPPPP1PPPP/RNABQKBCNR w KQkq f6',
      'rnabqkbcnr/ppppp1pppp/10/5p4/5P4/7N2/PPPPP1PPPP/RNABQKBC1R b KQkq -',
      'r1abqkbcnr/ppppp1pppp/2n7/5p4/5P4/7N2/PPPPP1PPPP/RNABQKBC1R w KQkq -',
    ],
    flip: 'b',
  };

  const filterMove = () => {
    // Implement pre-processing logic for the chess move.
  }

  const handleMove = () => {
    // Implement validation logic for the chess move.
  }

  return (
    <CapablancaBoard
      stateBoard={stateBoard}
      goBack={0}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default App;
```

![Figure 2](/assets/figure_02.png)

### Contributions

See the [contributing guidelines](https://github.com/chesslablab/reactblab/blob/master/CONTRIBUTING.md).

### License

[The MIT License](https://github.com/chesslablab/react-chess/blob/master/LICENSE).
