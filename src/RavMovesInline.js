import { useState } from 'react';
import { Movetext } from './common/Movetext.js';
import styles from './styles/ravMovesInline';

export const RavMovesInline = ({ stateRavMovesInline, onSpanClick }) => {
  const [hoveredSpan, setHoveredSpan] = useState(null);

  const isActiveMove = (fen) => {
    if (stateRavMovesInline.fen.length - 1 + stateRavMovesInline.back === fen ) {
      return true;
    }

    return false;
  };

  const level = (rows) => {
    let haystack = Movetext.haystack(stateRavMovesInline?.filtered);
    let needles = Movetext.needles(rows, stateRavMovesInline?.breakdown);
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
    const comment = Movetext.description(stateRavMovesInline?.breakdown[0]);
    if (comment) {
      return (
        <span style={styles.span}>{comment}</span>
      );
    }

    return null;
  };

  const moves = () => {
    let j = 1;
    let rows = [];
    stateRavMovesInline?.breakdown.forEach((breakdown, i) => {
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
      let wSpanStyle = {...styles.span, ...colors[i]};
      let bSpanStyle = {...styles.span, ...colors[i]};

      if (row.wFen === hoveredSpan) {
        row.w !== '...' ? wSpanStyle = {...wSpanStyle, ...styles.span.hover} : wSpanStyle.cursor = 'default';
      } else if (isActiveMove(row.wFen)) {
        wSpanStyle = {...wSpanStyle, ...styles.span.active};
      }

      if (row.bFen === hoveredSpan) {
        row.b ? bSpanStyle = {...bSpanStyle, ...styles.span.hover} : bSpanStyle.cursor = 'default';
      } else if (isActiveMove(row.bFen)) {
        bSpanStyle = {...bSpanStyle, ...styles.span.active};
      }

      return (
        <span key={i}>
          <span
            style={wSpanStyle}
            onMouseEnter={() => setHoveredSpan(row.wFen)}
            onMouseLeave={() => setHoveredSpan(null)}
            onClick={() => {
              if (row.w !== '...') {
                onSpanClick({ back: stateRavMovesInline.fen.length - 1 - row.wFen });
              }
            }}
          >
            {row.w === '...' ? `` : `${row.n}.${row.w}`}
          </span>
          <span
            style={bSpanStyle}
            onMouseEnter={() => setHoveredSpan(row.bFen)}
            onMouseLeave={() => setHoveredSpan(null)}
            onClick={() => {
              if (row.b) {
                onSpanClick({ back: stateRavMovesInline.fen.length - 1 - row.bFen });
              }
            }}
          >
            {row.w === '...' ? `${row.n}...${row.b}` : row.b}
          </span>
        </span>
      );
    });

  };

  return (
    <div style={styles.div}>
      {description()}
      {moves()}
    </div>
  );
}
