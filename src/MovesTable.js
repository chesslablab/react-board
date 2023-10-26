import { Movetext } from './common/Movetext.js';
import styles from './styles/movesTable';

export const MovesTable = ({ stateMovesTable, onCellClick }) => {
  const currentMove = (fen) => {
    if (stateMovesTable.fen.length - 1 + stateMovesTable.back === fen ) {
      return styles.current;
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
          style={styles.tr}
        >
          <td width="1%" style={styles.td}>
            {row.n}
          </td>
          <td
            width="3%"
            style={styles.td}
            onClick={() => {
              if (row.w !== '...') {
                onCellClick({ back: stateMovesTable.fen.length - 1 - row.wFen });
              }
            }}
          >
            {row.w}
          </td>
          <td
            width="3%"
            style={styles.td}
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
    <table style={styles.table}>
      <tbody style={styles.tbody}>
        {moves()}
      </tbody>
    </table>
  );
}
