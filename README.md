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
    fen: 'rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R b KQ -',
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
    fen: 'r1abqkbcnr/ppppp1pppp/2n7/5p4/5P4/7N2/PPPPP1PPPP/RNABQKBC1R w KQkq -',
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
