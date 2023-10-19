import { useRef } from 'react';
import Squares from './Squares';

const ClassicalSquares = ({
  props,
  filterMove,
  handleMove
}) => {
  return (
    <Squares
      props={{
        ...props,
        ...{
          className: 'classicalSquares',
        },
      }}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default ClassicalSquares;
