import { useRef } from 'react';
import Squares from './Squares';

const Chess960Squares = ({ props }) => {
  const sqsRef = useRef([]);

  const imgsRef = useRef([]);

  return (
    <Squares
      props={{
        className: 'classicalSquares',
        imgsRef: imgsRef,
        sqsRef: sqsRef,
      }}
    />
  );
}

export default Chess960Squares;
