import { useState } from 'react';
import { Movetext } from './common/Movetext.js';
import styles from './styles/sanMovesTable';

export const SanMovesTable = ({ stateSanMovesTable, onCellClick }) => {
  const [hoveredRow, setHoveredRow] = useState(null)

  const isActiveMove = (fen) => {
    if (stateSanMovesTable.fen.length - 1 + stateSanMovesTable.back === fen ) {
      return true;
    }

    return false;
  };

  const moves = () => {
    let j = 1;
    let rows = Movetext.toRows(
      stateSanMovesTable.movetext?.replace(/\s?\{[^}]+\}/g, '')
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
          <td width="1%" style={{...styles.td, ...styles.td.n}}>
            {row.n}
          </td>
          <td
            width="3%"
            style={row.wFen === hoveredRow
              ? {...styles.td, ...styles.td.hover}
              : isActiveMove(row.wFen)
              ? {...styles.td, ...styles.td.active}
              : styles.td
            }
            onMouseEnter={() => setHoveredRow(row.wFen)}
            onMouseLeave={() => setHoveredRow(null)}
            onClick={() => {
              if (row.w !== '...') {
                onCellClick({ back: stateSanMovesTable.fen.length - 1 - row.wFen });
              }
            }}
          >
            {row.w}
          </td>
          <td
            width="3%"
            style={row.bFen === hoveredRow
              ? {...styles.td, ...styles.td.hover}
              : isActiveMove(row.bFen)
              ? {...styles.td, ...styles.td.active}
              : styles.td
            }
            onMouseEnter={() => setHoveredRow(row.bFen)}
            onMouseLeave={() => setHoveredRow(null)}
            onClick={() => {
              if (row.b) {
                onCellClick({ back: stateSanMovesTable.fen.length - 1 - row.bFen });
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
