import { useRef } from 'react';
import Squares from './Squares';

const CapablancaSquares = ({
  props,
  filterMove,
  handleMove,
  onMouseDown,
  onDragStart,
  onDrop
}) => {
  const sqsRef = useRef([]);

  const imgsRef = useRef([]);

  props.className = 'capablancaSquares';
  props.imgsRef = imgsRef;
  props.sqsRef = sqsRef;

  return (
    <Squares
      props={props}
      filterMove={filterMove}
      handleMove={handleMove}
      onMouseDown={onMouseDown}
      onDragStart={onDragStart}
      onDrop={onDrop}
    />
  );
}

export default CapablancaSquares;
