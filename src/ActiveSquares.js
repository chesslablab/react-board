import CapablancaSquares from './CapablancaSquares';
import CapablancaFischerSquares from './CapablancaFischerSquares';
import Chess960Squares from './Chess960Squares';
import ClassicalSquares from './ClassicalSquares';
import * as variantConst from './variantConst';

const ActiveSquares = ({ props }) => {
  if (props.variant === variantConst.CAPABLANCA) {
    props.size = {
      files: 10,
      ranks: 8,
    };
    return <CapablancaSquares props={props} />;
  } else if (props.variant === variantConst.CAPABLANCA_FISCHER) {
    props.size = {
      files: 10,
      ranks: 8,
    };
    return <CapablancaFischerSquares props={props} />;
  } else if (props.variant === variantConst.CHESS_960) {
    props.size = {
      files: 8,
      ranks: 8,
    };
    return <Chess960Squares props={props} />;
  }

  props.size = {
    files: 8,
    ranks: 8,
  };
  return <ClassicalSquares props={props} />;
}

export default ActiveSquares;
