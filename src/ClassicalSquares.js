import Squares from './Squares';

const ClassicalSquares = ({
  stateBoard,
  goBack,
  filterMove,
  handleMove
}) => {
  return (
    <Squares
      className="classicalSquares"
      stateBoard={stateBoard}
      goBack={goBack}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default ClassicalSquares;
