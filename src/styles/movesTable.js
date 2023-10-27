const styles = {
  table: {
    width: '100%',
    height: 368,
    overflowY: 'scroll',
    display: 'block',
  },
  td: {
    fontSize: "0.875rem",
    lineHeight: 1.43,
    textAlign: "left",
    padding: "6px 16px",
    background: "#ffffff",
    cursor: 'pointer',
    n: {
      background: "#f6f6f6",
    },
    hover: {
      color: '#ffffff',
      background: "#3d8cd9",
    },
    active: {
      color: '#ffffff',
      background: "#1976d2",
      fontWeight: 'bold',
    },
  },
  tr: {
    display: 'table-row',
    verticalAlign: 'middle',
    height: '2.5rem',
  },
}

export default styles;
