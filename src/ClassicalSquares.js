import { useRef } from 'react';
import Squares from './Squares';

const ClassicalSquares = ({
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

export default ClassicalSquares;
