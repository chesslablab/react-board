const styles = {
  classicalSquares: {
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "grid",
    gridGap: "0",
    gridTemplateColumns: "repeat(8, [col] 4vw)",
    gridTemplateRows: "repeat(8, [row] 4vw)",
    justifyContent: "center",
    alignContent: "center",
    margin: "0 auto"
  },
  capablancaSquares: {
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "grid",
    gridGap: "0",
    gridTemplateColumns: "repeat(10, [col] 3.29vw)",
    gridTemplateRows: "repeat(8, [row] 3.29vw)",
    justifyContent: "center",
    alignContent: "center",
    margin: "0 auto"
  },
  userSelect: {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  sq: {
    position: "relative",
    textAlign: "center",
    cursor: "default"
  },
  w: {
    backgroundColor: '#ffce9e',
  },
  b: {
    backgroundColor: '#d18b47',
  },
  isLegal: {
    boxShadow:
      "inset -4px 0 0 #ffdd43, inset 0 -4px 0 #ffdd43,\n    inset 4px 0 0 #ffeb8e, inset 0 4px 0 #ffeb8e",
    cursor: "pointer"
  },
  isSelected: {
    backgroundColor: "#ffdd43 !important",
    opacity: 0.75,
    boxShadow:
      "inset -4px 0 0 yellow, inset 0 -4px 0 yellow,\n    inset 4px 0 0 yellow, inset 0 4px 0 yellow"
  },
  isCheck: {
    boxShadow:
      "inset -5px 0 0 #fdd57d, inset 0 -5px 0 #fdd57d,\n    inset 5px 0 0 #fdd57d, inset 0 5px 0 #fdd57d"
  },
  file: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: "0.8rem",
    marginRight: "0.15rem",
    marginBottom: "0.15rem",
    bottom: "0",
    right: "0"
  },
  rank: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: "0.8rem",
    marginLeft: "0.15rem",
    marginTop: "0.15rem",
    top: "0",
    left: "0"
  },
  light: {
    color: '#d18b47',
  },
  dark: {
    color: '#ffce9e',
  },
  "@media (max-width: 900px)": {
    ".classicalSquares": {
      gridTemplateColumns: "repeat(8, [col] 10vw)",
      gridTemplateRows: "repeat(8, [row] 10vw)"
    },
    ".capablancaSquares": {
      gridTemplateColumns: "repeat(10, [col] 9vw)",
      gridTemplateRows: "repeat(8, [row] 9vw)"
    }
  },
  "@media (max-width: 600px)": {
    ".classicalSquares": {
      gridTemplateColumns: "repeat(8, [col] 12vw)",
      gridTemplateRows: "repeat(8, [row] 12vw)"
    },
    ".capablancaSquares": {
      gridTemplateColumns: "repeat(10, [col] 9vw)",
      gridTemplateRows: "repeat(8, [row] 9vw)"
    }
  }
}

export default styles;
