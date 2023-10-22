import styles from './styles';

const AlgebraicNotation = ({ props, payload }) => {
  const spans = [];

  if (payload.i === props.size.ranks - 1 && props.flip === 'w') {
    const color = payload.sq.charAt(0).charCodeAt() % 2 !== 0 ? 'dark' : 'light';
    spans.push(
      <span
        key={spans.length}
        style={{...styles.file, ...styles[color]}}
      >
        {payload.sq.charAt(0)}
      </span>
    );
  } else if (payload.i === 0 && props.flip === 'b') {
    const color = payload.sq.charAt(0).charCodeAt() % 2 === 0 ? 'dark' : 'light';
    spans.push(
      <span
        key={spans.length}
        style={{...styles.file, ...styles[color]}}
      >
        {payload.sq.charAt(0)}
      </span>
    );
  }

  if (payload.j === 0 && props.flip === 'w') {
    const color = payload.sq.charAt(1) % 2 !== 0 ? 'dark' : 'light';
    spans.push(
      <span
        key={spans.length}
        style={{...styles.rank, ...styles[color]}}
      >
        {payload.sq.charAt(1)}
      </span>
    );
  } else if (payload.j === props.size.files - 1 && props.flip === 'b') {
    const color = payload.sq.charAt(1) % 2 === 0 ? 'dark' : 'light';
    spans.push(
      <span
        key={spans.length}
        style={{...styles.rank, ...styles[color]}}
      >
        {payload.sq.charAt(1)}
      </span>
    );
  }

  return spans;
}

export default AlgebraicNotation;
