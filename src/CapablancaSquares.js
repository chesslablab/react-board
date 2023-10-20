import Squares from './Squares';

const CapablancaSquares = ({
  props,
  filterMove,
  handleMove
}) => {
  return (
    <Squares
      props={{
        ...props,
        ...{
          className: 'capablancaSquares',
        },
      }}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default CapablancaSquares;
