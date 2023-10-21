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
  ".capablancaSquares": {
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "grid",
    gridGap: "0",
    gridTemplateColumns: "repeat(10, [col] calc(var(--slider-value)*0.0400vw))",
    gridTemplateRows: "repeat(8, [row] calc(var(--slider-value)*0.0400vw))",
    justifyContent: "center",
    alignContent: "center",
    margin: "0 auto"
  },
  ".sq": { position: "relative", textAlign: "center", cursor: "default" },
  ".square-right-clicked": { backgroundColor: "#eb3131", opacity: 0.75 },
  ".sq span.file": {
    position: "absolute",
    fontWeight: "bold",
    fontSize: "0.8rem",
    marginRight: "0.15rem",
    marginBottom: "0.15rem",
    bottom: "0",
    right: "0"
  },
  ".sq span.rank": {
    position: "absolute",
    fontWeight: "bold",
    fontSize: "0.8rem",
    marginLeft: "0.15rem",
    marginTop: "0.15rem",
    top: "0",
    left: "0"
  },
  ".sq.a1 span,\n.sq.c1 span,\n.sq.e1 span,\n.sq.g1 span,\n.sq.i1 span,\n.sq.j8 span,\n.sq.h8 span,\n.sq.f8 span,\n.sq.d8 span,\n.sq.b8 span": {
    color: "#ffce9e"
  },
  ".sq.b1 span,\n.sq.d1 span,\n.sq.f1 span,\n.sq.h1 span,\n.sq.j1 span,\n.sq.i8 span,\n.sq.g8 span,\n.sq.e8 span,\n.sq.c8 span,\n.sq.a8 span": {
    color: "#d18b47"
  },
  ".sq.j2 span,\n.sq.j4 span,\n.sq.j6 span": { color: "#ffce9e" },
  ".sq.a3 span,\n.sq.a5 span,\n.sq.a7 span": { color: "#ffce9e" },
  ".sq.h6 span,\n.sq.h4 span,\n.sq.h2 span": { color: "#ffce9e" },
  ".sq.j3 span,\n.sq.j5 span,\n.sq.j7 span": { color: "#d18b47" },
  ".sq.a2 span,\n.sq.a4 span,\n.sq.a6 span": { color: "#d18b47" },
  ".sq.h7 span,\n.sq.h5 span,\n.sq.h3 span": { color: "#d18b47" },
  ".sq.isSelected": {
    backgroundColor: "#ffdd43 !important",
    opacity: 0.75,
    boxShadow:
      "inset -4px 0 0 yellow, inset 0 -4px 0 yellow,\n    inset 4px 0 0 yellow, inset 0 4px 0 yellow"
  },
  ".sq.isLegal": {
    boxShadow:
      "inset -4px 0 0 #ffdd43, inset 0 -4px 0 #ffdd43,\n    inset 4px 0 0 #ffeb8e, inset 0 4px 0 #ffeb8e",
    cursor: "pointer"
  },
  ".sq.isCheck": {
    boxShadow:
      "inset -5px 0 0 #fdd57d, inset 0 -5px 0 #fdd57d,\n    inset 5px 0 0 #fdd57d, inset 0 5px 0 #fdd57d"
  },
  ".sq.w": { backgroundColor: "#ffce9e" },
  ".sq.b": { backgroundColor: "#d18b47" },
  ".past": {},
  "svg,\n.classicalSquares,\n.capablancaSquares": {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none"
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
