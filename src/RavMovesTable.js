import { useState } from 'react';
import { Movetext } from './common/Movetext.js';
import styles from './styles/ravMovesTable';

export const RavMovesTable = ({ stateRavMovesTable, onCellClick }) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const isActiveMove = (fen) => {
    if (stateRavMovesTable.fen.length - 1 + stateRavMovesTable.back === fen ) {
      return true;
    }

    return false;
  };

  const level = (rows) => {
    let haystack = Movetext.haystack(stateRavMovesTable?.filtered);
    let needles = Movetext.needles(rows, stateRavMovesTable?.breakdown);
    for (let i = needles.length - 1; i >= 0; i--) {
      const position = haystack.lastIndexOf(needles[i]);
      rows[i].level = Movetext.openParentheses(haystack.substring(0, position));
      haystack = haystack.substring(0, position).slice(0, -1).trim();
    }

    return rows;
  };

  const color = (rows) => {
    return level(rows).map(row => {
      return {
        background: Movetext.rgb(255 - (row.level * 10), 255 - (row.level * 10), 255 - (row.level * 10))
      }
    });
  };

  const description = () => {
    const comment = Movetext.description(stateRavMovesTable?.breakdown[0]);
    if (comment) {
      return (
        <tr style={styles.tr}>
          <td>{comment}</td>
        </tr>
      );
    }

    return null;
  };

  const moves = () => {
    let j = 1;
    let rows = [];
    stateRavMovesTable?.breakdown.forEach((breakdown, i) => {
      rows = [...rows, ...Movetext.toCommentedRows(breakdown, i)];
    });
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

    const colors = color(rows);

    return rows.map((row, i) => {
      return (
        <tr
          key={i}
          style={{...styles.tr, ...colors[i]}}
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
                onCellClick({ back: stateRavMovesTable.fen.length - 1 - row.wFen });
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
                onCellClick({ back: stateRavMovesTable.fen.length - 1 - row.bFen });
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
        {description()}
        {moves()}
      </tbody>
    </table>
  );
}
