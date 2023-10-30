## ReactBlab

An easy-to-use, state-management agnostic React library of chess components as well as common chess utilities.

### Demo

Check out the [demo](https://www.chesslablab.com/) in the [React Chess](https://github.com/chesslablab/react-chess) repository.

### Install

```The state of the chessboard.
npm i @chesslablab/reactblab
```

### Usage

Some familiarity with chess terms and concepts is required but if you're new to chess this document will guide you through how to easily create amazing apps with ReactBlab components. Happy coding and learning!

#### Initialize a Classical Board

FEN stands for Forsyth-Edwards Notation and is the standard way for describing chess positions using text strings. As you can see in the following example, a FEN string representing a chess position is passed as a prop in the `stateBoard` parameter. The `isCheck` and `flip` key-value pairs are also used.

| ClassicalBoard Props | Description |
| -------------------- | ----------- |
| `stateBoard` | The state of the chessboard. |
| `filterMove` | Allows to implement pre-processing logic for chess moves. |
| `handleMove` | Allows to implement validation logic for chess moves. |
<p>&nbsp;</p>
```js
import { ClassicalBoard } from '@chesslablab/reactblab';

function App() {
  return (
    <ClassicalBoard
      stateBoard={{
        fen: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R b KQ -",
        isCheck: false,
        flip: "w",
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

Similarly as with a classical board, a Capablanca board is initialized by passing the `stateBoard` prop to the component. A FEN string is used as well as the `isCheck` and `flip` key-value pairs.


| CapablancaBoard Props | Description |
| --------------------- | ----------- |
| `stateBoard` | The state of the chessboard. |
| `filterMove` | Allows to implement pre-processing logic for chess moves. |
| `handleMove` | Allows to implement validation logic for chess moves. |
<p>&nbsp;</p>
```js
import { CapablancaBoard } from '@chesslablab/reactblab';

function App() {
  return (
    <CapablancaBoard
      stateBoard={{
        fen: "r1abqkbcnr/ppppp1pppp/2n7/5p4/5P4/7N2/PPPPP1PPPP/RNABQKBC1R w KQkq -",
        isCheck: false,
        flip: "b",
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

#### Allow Browsing Through the History of San Moves

SAN stands for Standard Algebraic Notation. It is a human-readable text format that allows chess players to read and write chess games in Portable Game Notation (PGN) format. A SAN movetext is basically the same thing as a RAV movetext with the only difference that it doesn't include variations. The `HistoryButtons` and `SanMovesTable` components can be combined to allow browsing through the history of SAN moves.

| HistoryButtons Props | Description |
| -------------------- | ----------- |
| `stateHistoryButtons` | The state of the history buttons. |
| `onFastRewindClick` | Allows to implement on fast rewind logic. |
| `onSkipPreviousClick` | Allows to implement on skip previous logic. |
| `onSkipNextClick` | Allows to implement on skip next logic. |
| `onFastForwardClick` | Allows to implement on fast forward logic. |
<p>&nbsp;</p>
| SanMovesTable Props | Description |
| ------------------- | ----------- |
| `stateSanMovesTable` | The state of the SAN moves table. |
| `onCellClick` | Allows to implement on cell click logic. |
<p>&nbsp;</p>
```js
import { HistoryButtons, SanMovesTable } from '@chesslablab/reactblab';

function App() {
  const back = 0;

  const fen = [
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
    "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3",
    "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -",
    "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3",
    "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -",
    "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq -",
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
          movetext: "1.d4 Nf6 2.c4 e6 3.Qb3",
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

Also you may want to display the chess opening that is being played at a certain point in which case the `OpeningTable` component can be helpful.

| OpeningTable Props  | Description |
| ------------------- | ----------- |
| `stateOpeningTable` | The state of the chess opening table. |
<p>&nbsp;</p>
```js
import { HistoryButtons, OpeningTable, SanMovesTable } from '@chesslablab/reactblab';

function App() {
  const back = 0;

  const fen = [
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
    "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3",
    "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -",
    "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3",
    "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -",
    "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq -",
  ];

  const opening = {
    rows: [
      {
        eco: "E00",
        name: "Indian Defense",
        movetext: "1.d4 Nf6 2.c4 e6 3.Qb3",
      },
    ],
  };

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
          movetext: "1.d4 Nf6 2.c4 e6 3.Qb3",
        }}
        onCellClick={() => {
          // Implement on cell click logic.
        }}
      />
      <OpeningTable
        stateOpeningTable={{
          opening: opening,
          fen: fen,
        }}
      />
    </>
  );
}

export default App;
```

#### Initialize a RAV Moves Table

Annotated games are games with comments that help understand what is going on the chessboard. They usually include variations showing the development of the game in selected positions that require an in-depth understanding. RAV stands for Recursive Annotation Variation. It is the standard format for annotated chess games. The `HistoryButtons` and `RavMovesTable` components can be combined to allow browsing through the history of RAV moves.

| RavMovesTable Props | Description |
| ------------------- | ----------- |
| `stateRavMovesTable` | The state of the RAV moves table. |
| `onCellClick` | Allows to implement on cell click logic. |
<p>&nbsp;</p>
```js
import { HistoryButtons, RavMovesTable } from '@chesslablab/reactblab';

function App() {
  const back = 0;

  const filtered = "{Adapted notes, originally by J. R. Capablanca.} 1.d4 d5 2.Nf3 e6 3.c4 Nf6 4.Bg5 Be7 5.e3 Nbd7 6.Nc3 O-O 7.Rc1 c6 8.Qc2 c5 {is not a recommended move.} 9.Rd1 (9.cxd5 {would have been proper to continue.}) 9...Qa5 10.cxd5 Nxd5 11.Bxe7 Nxe7 12.Bd3 Nf6 13.O-O cxd4 14.Nxd4 (14.exd4 {was the alternative. It would have left, however, to a very difficult game where, in exchange for the attack, White would remain with an isolated queen\u0027s pawn; leading at this stage of the match by one point, I did not want to take any risks.}) 14...Bd7 15.Ne4 Ned5 16.Nb3 Qd8 17.Nxf6+ Nxf6 18.Qc5 Qb6 {neutralizes whatever little advantage White might have had. The draw is now insight.} 19.Rc1 Rfc8 20.Qxb6 axb6 21.Rxc8+ Rxc8 22.Rc1 Rxc1+ 23.Nxc1 Kf8";

  const breakdown = [
    "{Adapted notes, originally by J. R. Capablanca.} 1.d4 d5 2.Nf3 e6 3.c4 Nf6 4.Bg5 Be7 5.e3 Nbd7 6.Nc3 O-O 7.Rc1 c6 8.Qc2 c5 {is not a recommended move.} 9.Rd1",
    "9.cxd5 {would have been proper to continue.}",
    "9...Qa5 10.cxd5 Nxd5 11.Bxe7 Nxe7 12.Bd3 Nf6 13.O-O cxd4 14.Nxd4",
    "14.exd4 {was the alternative. It would have left, however, to a very difficult game where, in exchange for the attack, White would remain with an isolated queen\u0027s pawn; leading at this stage of the match by one point, I did not want to take any risks.}",
    "14...Bd7 15.Ne4 Ned5 16.Nb3 Qd8 17.Nxf6+ Nxf6 18.Qc5 Qb6 {neutralizes whatever little advantage White might have had. The draw is now insight.} 19.Rc1 Rfc8 20.Qxb6 axb6 21.Rxc8+ Rxc8 22.Rc1 Rxc1+ 23.Nxc1 Kf8"
  ];

  const fen = [
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
    "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3",
    "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6",
    "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq -",
    "rnbqkbnr/ppp2ppp/4p3/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -",
    "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq c3",
    "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -",
    "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R b KQkq -",
    "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R w KQkq -",
    "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/4PN2/PP3PPP/RN1QKB1R b KQkq -",
    "r1bqk2r/pppnbppp/4pn2/3p2B1/2PP4/4PN2/PP3PPP/RN1QKB1R w KQkq -",
    "r1bqk2r/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQkq -",
    "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ -",
    "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R b K -",
    "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R w K -",
    "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R b K -",
    "r1bq1rk1/pp1nbppp/4pn2/2pp2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R w K -",
    "r1bq1rk1/pp1nbppp/4pn2/2pp2B1/2PP4/2N1PN2/PPQ2PPP/3RKB1R b K -",
    "r1bq1rk1/pp1nbppp/4pn2/2pP2B1/3P4/2N1PN2/PPQ2PPP/2R1KB1R b KQ -",
    "r1b2rk1/pp1nbppp/4pn2/q1pp2B1/2PP4/2N1PN2/PPQ2PPP/3RKB1R w K -",
    "r1b2rk1/pp1nbppp/4pn2/q1pP2B1/3P4/2N1PN2/PPQ2PPP/3RKB1R b K -",
    "r1b2rk1/pp1nbppp/4p3/q1pn2B1/3P4/2N1PN2/PPQ2PPP/3RKB1R w K -",
    "r1b2rk1/pp1nBppp/4p3/q1pn4/3P4/2N1PN2/PPQ2PPP/3RKB1R b K -",
    "r1b2rk1/pp1nnppp/4p3/q1p5/3P4/2N1PN2/PPQ2PPP/3RKB1R w K -",
    "r1b2rk1/pp1nnppp/4p3/q1p5/3P4/2NBPN2/PPQ2PPP/3RK2R b K -",
    "r1b2rk1/pp2nppp/4pn2/q1p5/3P4/2NBPN2/PPQ2PPP/3RK2R w K -",
    "r1b2rk1/pp2nppp/4pn2/q1p5/3P4/2NBPN2/PPQ2PPP/3R1RK1 b - -",
    "r1b2rk1/pp2nppp/4pn2/q7/3p4/2NBPN2/PPQ2PPP/3R1RK1 w - -",
    "r1b2rk1/pp2nppp/4pn2/q7/3N4/2NBP3/PPQ2PPP/3R1RK1 b - -",
    "r1b2rk1/pp2nppp/4pn2/q7/3P4/2NB1N2/PPQ2PPP/3R1RK1 b - -",
    "r4rk1/pp1bnppp/4pn2/q7/3N4/2NBP3/PPQ2PPP/3R1RK1 w - -",
    "r4rk1/pp1bnppp/4pn2/q7/3NN3/3BP3/PPQ2PPP/3R1RK1 b - -",
    "r4rk1/pp1b1ppp/4pn2/q2n4/3NN3/3BP3/PPQ2PPP/3R1RK1 w - -",
    "r4rk1/pp1b1ppp/4pn2/q2n4/4N3/1N1BP3/PPQ2PPP/3R1RK1 b - -",
    "r2q1rk1/pp1b1ppp/4pn2/3n4/4N3/1N1BP3/PPQ2PPP/3R1RK1 w - -",
    "r2q1rk1/pp1b1ppp/4pN2/3n4/8/1N1BP3/PPQ2PPP/3R1RK1 b - -",
    "r2q1rk1/pp1b1ppp/4pn2/8/8/1N1BP3/PPQ2PPP/3R1RK1 w - -",
    "r2q1rk1/pp1b1ppp/4pn2/2Q5/8/1N1BP3/PP3PPP/3R1RK1 b - -",
    "r4rk1/pp1b1ppp/1q2pn2/2Q5/8/1N1BP3/PP3PPP/3R1RK1 w - -",
    "r4rk1/pp1b1ppp/1q2pn2/2Q5/8/1N1BP3/PP3PPP/2R2RK1 b - -",
    "r1r3k1/pp1b1ppp/1q2pn2/2Q5/8/1N1BP3/PP3PPP/2R2RK1 w - -",
    "r1r3k1/pp1b1ppp/1Q2pn2/8/8/1N1BP3/PP3PPP/2R2RK1 b - -",
    "r1r3k1/1p1b1ppp/1p2pn2/8/8/1N1BP3/PP3PPP/2R2RK1 w - -",
    "r1R3k1/1p1b1ppp/1p2pn2/8/8/1N1BP3/PP3PPP/5RK1 b - -",
    "2r3k1/1p1b1ppp/1p2pn2/8/8/1N1BP3/PP3PPP/5RK1 w - -",
    "2r3k1/1p1b1ppp/1p2pn2/8/8/1N1BP3/PP3PPP/2R3K1 b - -",
    "6k1/1p1b1ppp/1p2pn2/8/8/1N1BP3/PP3PPP/2r3K1 w - -",
    "6k1/1p1b1ppp/1p2pn2/8/8/3BP3/PP3PPP/2N3K1 b - -",
    "5k2/1p1b1ppp/1p2pn2/8/8/3BP3/PP3PPP/2N3K1 w - -"
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
      <RavMovesTable
        stateRavMovesTable={{
          back: back,
          filtered: filtered,
          breakdown: breakdown,
          fen: fen,
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

![Figure 5](/assets/figure_05.png)

The RAV reader displays the variation levels in different shades of gray. It is a 2D scrollable HTML table where the main line is shown in a white background color. The deeper the level, the darker the background color is displayed.

#### Encyclopedia of Chess Openings (ECO)

Chess openings can easily be imported into your app as an array of JavaScript objects.

```js
import { openings } from '@chesslablab/reactblab';
```

```js
[
  {
    "eco": "A00",
    "name": "Amar Gambit",
    "movetext": "1.Nh3 d5 2.g3 e5 3.f4 Bxh3 4.Bxh3 exf4"
  },
  {
    "eco": "A00",
    "name": "Amar Opening",
    "movetext": "1.Nh3"
  },
  ...
  {
    "eco": "E99",
    "name": "King's Indian Defense: Orthodox Variation, Classical System, Benko Attack",
    "movetext": "1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.f3 f5 11.g4"
  },
  {
    "eco": "E99",
    "name": "King's Indian Defense: Orthodox Variation, Classical System, Traditional Line",
    "movetext": "1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.f3 f5"
  }
];
```

### Contributions

See the [contributing guidelines](https://github.com/chesslablab/reactblab/blob/master/CONTRIBUTING.md).

### License

[The MIT License](https://github.com/chesslablab/react-chess/blob/master/LICENSE).
