import { useRef } from 'react';
import Squares from './Squares';

const CapablancaFischerSquares = ({
  props,
  filterMove,
  handleMove,
  onMouseDown,
  onDragStart,
  onDrop
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
      onMouseDown={onMouseDown}
      onDragStart={onDragStart}
      onDrop={onDrop}
    />
  );
}

export default CapablancaFischerSquares;
