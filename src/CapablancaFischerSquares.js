import { useRef } from 'react';
import Squares from './Squares';

const CapablancaFischerSquares = ({ props }) => {
  return (
    <Squares
      props={{
        className: 'capablancaSquares',
        imgsRef:  useRef([]),
        sqsRef: useRef([]),
      }}
    />
  );
}

export default CapablancaFischerSquares;
