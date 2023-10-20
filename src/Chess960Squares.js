import Squares from './Squares';

const Chess960Squares = ({
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

export default Chess960Squares;
