import Squares from './Squares';

const ClassicalSquares = ({
  stateBoard,
  filterMove,
  handleMove
}) => {
  return (
    <Squares
      className="classicalSquares"
      stateBoard={stateBoard}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default ClassicalSquares;
