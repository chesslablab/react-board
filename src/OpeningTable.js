import { Ascii } from './common/Ascii';

export const OpeningTable = ({ stateOpeningTable }) => {
  if (stateOpeningTable.fen[0] === Ascii.initialFen()) {
    if (stateOpeningTable.opening) {
      return (
        <table>
          <tbody>
            {
              stateOpeningTable.opening.rows?.map((item, i) => (
                <tr key={i}>
                  <td align="left">{item.eco}</td>
                  <td align="left">{item.name}</td>
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
