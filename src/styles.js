const maxWidth = {
  '900': window.matchMedia("(max-width:900px)")
};

const styles = {
  classicalSquares: {
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "grid",
    gridGap: "0",
    gridTemplateColumns: maxWidth['900'].matches ? "repeat(8, [col] 12vw)" : "repeat(8, [col] 5vw)",
    gridTemplateRows: maxWidth['900'].matches ? "repeat(8, [col] 12vw)" : "repeat(8, [col] 5vw)",
    justifyContent: "center",
    alignContent: "center",
    margin: "0 auto"
  },
  capablancaSquares: {
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "grid",
    gridGap: "0",
    gridTemplateColumns: maxWidth['900'].matches ? "repeat(10, [col] 9vw)" : "repeat(10, [col] 4vw)",
    gridTemplateRows: maxWidth['900'].matches ? "repeat(8, [col] 9vw)" : "repeat(8, [col] 4vw)",
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
    boxShadow: "inset -4px 0 0 #ffdd43, inset 0 -4px 0 #ffdd43, inset 4px 0 0 #ffeb8e, inset 0 4px 0 #ffeb8e",
    cursor: "pointer",
  },
  isSelected: {
    backgroundColor: "#ffdd43",
  },
  isCheck: {
    boxShadow: "inset -5px 0 0 #fdd57d, inset 0 -5px 0 #fdd57d, inset 5px 0 0 #fdd57d, inset 0 5px 0 #fdd57d"
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
}

export default styles;
