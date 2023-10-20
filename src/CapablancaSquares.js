import Squares from './Squares';

const CapablancaSquares = ({
  stateBoard,
  filterMove,
  handleMove
}) => {
  return (
    <Squares
      className="capablancaSquares"
      stateBoard={stateBoard}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default CapablancaSquares;
