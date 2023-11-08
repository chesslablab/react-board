const styles = {
  classicalSquares: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'grid',
    gridGap: 0,
    justifyContent: 'center',
    alignContent: 'center',
    margin: '0 auto',
  },
  capablancaSquares: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'grid',
    gridGap: 0,
    justifyContent: 'center',
    alignContent: 'center',
    margin: '0 auto',
  },
  userSelect: {
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  sq: {
    position: 'relative',
    textAlign: 'center',
    cursor: 'default',
  },
  w: {
    backgroundColor: '#ffce9e',
  },
  b: {
    backgroundColor: '#d18b47',
  },
  isLegal: {
    boxShadow: 'inset -4px 0 0 #ffdd43, inset 0 -4px 0 #ffdd43, inset 4px 0 0 #ffeb8e, inset 0 4px 0 #ffeb8e',
    cursor: 'pointer',
  },
  isSelected: {
    backgroundColor: '#ffdd43',
  },
  isCheck: {
    boxShadow: 'inset -5px 0 0 #fdd57d, inset 0 -5px 0 #fdd57d, inset 5px 0 0 #fdd57d, inset 0 5px 0 #fdd57d',
  },
}

export default styles;
