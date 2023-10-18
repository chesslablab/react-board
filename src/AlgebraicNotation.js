import Pgn from './common/Pgn';

const AlgebraicNotation = ({ props }) => {
  const spans = [];

  if (props.i === props.size.ranks - 1 && props.flip === Pgn.symbol.WHITE) {
    spans.push(<span key={spans.length} className="file">
      {props.sq.charAt(0)}
    </span>
    );
  }

  if (props.j === 0 && props.flip === Pgn.symbol.WHITE) {
    spans.push(<span key={spans.length} className="rank">
      {props.sq.charAt(1)}
    </span>
    );
  }

  if (props.i === 0 && props.flip === Pgn.symbol.BLACK) {
    spans.push(<span key={spans.length} className="file">
      {props.sq.charAt(0)}
    </span>
    );
  }

  if (props.j === props.size.files - 1 && props.flip === Pgn.symbol.BLACK) {
    spans.push(<span key={spans.length} className="rank">
      {props.sq.charAt(1)}
    </span>
    );
  }

  return spans;
}

export default AlgebraicNotation;
