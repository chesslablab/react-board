import { useRef } from 'react';
import Squares from './Squares';

const CapablancaFischerSquares = ({ props }) => {
  const sqsRef = useRef([]);

  const imgsRef = useRef([]);

  props.className = 'capablancaSquares';
  props.imgsRef = imgsRef;
  props.sqsRef = sqsRef;

  return (
    <Squares props={props}/>
  );
}

export default CapablancaFischerSquares;
