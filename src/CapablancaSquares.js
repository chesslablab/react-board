import { useRef } from 'react';
import Squares from './Squares';

const CapablancaSquares = ({
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
          className: 'capablancaSquares',
          imgsRef: imgsRef,
          sqsRef: sqsRef,
        },
      }}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default CapablancaSquares;
