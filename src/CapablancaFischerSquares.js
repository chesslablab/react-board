import Squares from './Squares';

const CapablancaFischerSquares = () => {
  return (
    <Squares
      props={{
        className: 'capablancaSquares',
        imgsRef:  useRef([]),
        sqsRef: useRef([])
      }}
    />
  );
}

export default CapablancaFischerSquares;
