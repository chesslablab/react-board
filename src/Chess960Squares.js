import { useRef } from 'react';
import Squares from './Squares';

const Chess960Squares = ({
  props,
  filterMove,
  handleMove
}) => {
  const sqsRef = useRef([]);

  const imgsRef = useRef([]);

  return (
    <Squares
      props={{
        ...props,
        ...{
          className: 'classicalSquares',
          imgsRef: imgsRef,
          sqsRef: sqsRef,
        },
      }}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default Chess960Squares;
