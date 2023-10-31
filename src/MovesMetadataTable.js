import styles from './styles/movesMetadataTable';

export const MovesMetadataTable = ({ stateMovesMetadataTable }) => {
  if (Object.keys(stateMovesMetadataTable.metadata).length) {
    return (
      <table>
        <tbody>
          <tr key={0} sx={styles.tr}>
            <td align="left" sx={styles.td} >
              <b>{stateMovesMetadataTable.metadata.White}</b><br/>
              {stateMovesMetadataTable.metadata["White ELO"]}
            </td>
            <td align="center" sx={styles.td}>
              <b>{stateMovesMetadataTable.metadata.Result}</b><br/>
              {stateMovesMetadataTable.metadata.Event},  Rd {stateMovesMetadataTable.metadata.Round}<br/>
              {stateMovesMetadataTable.metadata.Site}, {stateMovesMetadataTable.metadata.Date}, {stateMovesMetadataTable.metadata.ECO}
            </td>
            <td align="right" sx={styles.td}>
              <b>{stateMovesMetadataTable.metadata.Black}</b><br/>
              {stateMovesMetadataTable.metadata["Black ELO"]}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
}
