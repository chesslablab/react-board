import Squares from './Squares';

const CapablancaFischerSquares = ({
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

export default CapablancaFischerSquares;
