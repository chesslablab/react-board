import { Movetext } from './common/Movetext.js';
import styles from './styles';

export const MovesTable = ({ stateMovesTable, onCellClick }) => {
  const currentMove = (fen) => {
    if (stateMovesTable.fen.length - 1 + stateMovesTable.back === fen ) {
      return styles.movesTable.current;
    }

    return {};
  };

  const moves = () => {
    let j = 1;
    let rows = Movetext.toRows(
      stateMovesTable.movetext?.replace(/\s?\{[^}]+\}/g, '')
        .replace(/\s?\$[1-9][0-9]*/g, '')
        .trim()
    );
    rows.forEach((row, i) => {
      if (row.w !== '...') {
        row.wFen = j;
        j += 1;
      }
      if (row.b) {
        row.bFen = j;
        j += 1;
      }
    });

    return rows.map((row, i) => {
      return (
        <tr
          key={i}
          style={styles.movesTable.tr}
        >
          <td style={styles.movesTable.td}>
            {row.n}
          </td>
          <td
            style={styles.movesTable.td}
            onClick={() => {
              if (row.w !== '...') {
                onCellClick({ back: stateMovesTable.fen.length - 1 - row.wFen });
              }
            }}
          >
            {row.w}
          </td>
          <td
            style={styles.movesTable.td}
            onClick={() => {
              if (row.b) {
                onCellClick({ back: stateMovesTable.fen.length - 1 - row.bFen });
              }
            }}
          >
            {row.b}
          </td>
        </tr>
      );
    });
  };

  return (
    <table style={styles.movesTable.table}>
      <tbody style={styles.movesTable.tbody}>
        {moves()}
      </tbody>
    </table>
  );
}
