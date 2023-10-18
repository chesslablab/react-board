import CapablancaSquares from './CapablancaSquares';
import CapablancaFischerSquares from './CapablancaFischerSquares';
import Chess960Squares from './Chess960Squares';
import ClassicalSquares from './ClassicalSquares';
import * as variantConst from './variantConst';

const ActiveSquares = ({ props }) => {
  if (props.variant === variantConst.CAPABLANCA) {
    return <CapablancaSquares props={props} />;
  } else if (props.variant === variantConst.CAPABLANCA_FISCHER) {
    return <CapablancaFischerSquares props={props} />;
  } else if (props.variant === variantConst.CHESS_960) {
    return <Chess960Squares props={props} />;
  }

  return <ClassicalSquares />;
}

export default ActiveSquares;
