import { useState } from 'react';
import { Movetext } from './common/Movetext.js';
import styles from './styles/sanMovesInline';

export const SanMovesInline = ({ stateSanMovesInline, onSpanClick }) => {
  const [hoveredSpan, setHoveredSpan] = useState(null);

  const isActiveMove = (fen) => {
    if (stateSanMovesInline.fen.length - 1 + stateSanMovesInline.back === fen ) {
      return true;
    }

    return false;
  };

  const moves = () => {
    let j = 1;
    let rows = Movetext.toRows(
      stateSanMovesInline.movetext?.replace(/\s?\{[^}]+\}/g, '')
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
        <span key={i}>
          <span
            style={row.wFen === hoveredSpan
              ? {...styles.span, ...styles.span.hover}
              : isActiveMove(row.wFen)
              ? {...styles.span, ...styles.span.active}
              : styles.span
            }
            onMouseEnter={() => setHoveredSpan(row.wFen)}
            onMouseLeave={() => setHoveredSpan(null)}
            onClick={() => {
              if (row.w !== '...') {
                onSpanClick({ back: stateSanMovesInline.fen.length - 1 - row.wFen });
              }
            }}
          >
            {row.n}.{row.w}
          </span>
          <span
            style={row.bFen === hoveredSpan
              ? {...styles.span, ...styles.span.hover}
              : isActiveMove(row.bFen)
              ? {...styles.span, ...styles.span.active}
              : styles.span
            }
            onMouseEnter={() => setHoveredSpan(row.bFen)}
            onMouseLeave={() => setHoveredSpan(null)}
            onClick={() => {
              if (row.b) {
                onSpanClick({ back: stateSanMovesInline.fen.length - 1 - row.bFen });
              }
            }}
          >
            {row.b}
          </span>
        </span>
      );
    });
  };

  return (
    <div style={styles.div}>
      {moves()}
    </div>
  );
}
