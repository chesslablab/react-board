import { useRef } from 'react';
import Squares from './Squares';

const ClassicalSquares = ({ props }) => {
  const sqsRef = useRef([]);

  const imgsRef = useRef([]);

  props.className = 'classicalSquares';
  props.imgsRef = imgsRef;
  props.sqsRef = sqsRef;

  return (
    <Squares props={props}/>
  );
}

export default ClassicalSquares;
