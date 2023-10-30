import { Ascii } from './common/Ascii';
import styles from './styles/openingTable';

export const OpeningTable = ({ stateOpeningTable }) => {
  if (stateOpeningTable.fen[0] === Ascii.initialFen()) {
    if (stateOpeningTable.opening) {
      return (
        <table style={styles.table}>
          <tbody>
            {
              stateOpeningTable.opening.rows?.map((item, i) => (
                <tr key={i} style={styles.tr}>
                  <td style={styles.td}>{item.eco} {item.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      );
    }
  }

  return null;
}
