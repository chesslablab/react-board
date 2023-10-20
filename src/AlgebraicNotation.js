const AlgebraicNotation = ({ props, size }) => {
  const spans = [];

  if (props.i === size.ranks - 1 && props.flip === 'w') {
    spans.push(<span key={spans.length} className="file">
      {props.sq.charAt(0)}
    </span>
    );
  }

  if (props.j === 0 && props.flip === 'w') {
    spans.push(<span key={spans.length} className="rank">
      {props.sq.charAt(1)}
    </span>
    );
  }

  if (props.i === 0 && props.flip === 'b') {
    spans.push(<span key={spans.length} className="file">
      {props.sq.charAt(0)}
    </span>
    );
  }

  if (props.j === size.files - 1 && props.flip === 'b') {
    spans.push(<span key={spans.length} className="rank">
      {props.sq.charAt(1)}
    </span>
    );
  }

  return spans;
}

export default AlgebraicNotation;
