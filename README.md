## ReactBlab

An easy-to-use React library of chess components and common utilities.

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
  return (
    <ClassicalBoard
      stateBoard={{
        fen: 'rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R b KQ -',
        isCheck: false,
        flip: 'w',
      }}
      filterMove={() => {
        // Implement pre-processing logic for the chess move.
      }}
      handleMove={() => {
        // Implement validation logic for the chess move.
      }}
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
  return (
    <CapablancaBoard
      stateBoard={{
        fen: 'r1abqkbcnr/ppppp1pppp/2n7/5p4/5P4/7N2/PPPPP1PPPP/RNABQKBC1R w KQkq -',
        isCheck: false,
        flip: 'b',
      }}
      filterMove={() => {
        // Implement pre-processing logic for the chess move.
      }}
      handleMove={() => {
        // Implement validation logic for the chess move.
      }}
    />
  );
}

export default App;
```

![Figure 2](/assets/figure_02.png)

#### Initialize a SAN Moves Table

The `HistoryButtons` and `SanMovesTable` components can be combined to allow browsing
through the history of SAN moves.

```js
import { HistoryButtons, SanMovesTable } from '@chesslablab/reactblab';

function App() {
  const back = 0;

  const fen = [
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -',
    'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3',
    'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -',
    'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3',
    'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -',
    'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq -',
  ];

  return (
    <>
      <HistoryButtons
        stateHistoryButtons={{
          back: back,
          fen: fen,
        }}
        onFastRewindClick={() => {
          // Implement on fast rewind logic.
        }}
        onSkipPreviousClick={() => {
          // Implement on skip previous logic.
        }}
        onSkipNextClick={() => {
          // Implement on skip next logic.
        }}
        onFastForwardClick={() => {
          // Implement on fast forward logic.
        }}
      />
      <SanMovesTable
        stateSanMovesTable={{
          back: back,
          fen: fen,
          movetext: '1.d4 Nf6 2.c4 e6 3.Qb3',
        }}
        onCellClick={() => {
          // Implement on cell click logic.
        }}
      />
    </>
  );
}

export default App;
```

![Figure 3](/assets/figure_03.png)

### Contributions

See the [contributing guidelines](https://github.com/chesslablab/reactblab/blob/master/CONTRIBUTING.md).

### License

[The MIT License](https://github.com/chesslablab/react-chess/blob/master/LICENSE).
