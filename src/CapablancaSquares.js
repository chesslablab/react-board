import Squares from './Squares';

const CapablancaSquares = ({
  stateBoard,
  goBack,
  filterMove,
  handleMove
}) => {
  return (
    <Squares
      className="capablancaSquares"
      stateBoard={stateBoard}
      goBack={goBack}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default CapablancaSquares;
