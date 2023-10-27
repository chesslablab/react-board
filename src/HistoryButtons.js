import styles from './styles/historyButtons';

export const HistoryButtons = ({
  stateHistoryButtons,
  onFastRewindClick,
  onSkipPreviousClick,
  onSkipNextClick,
  onFastForwardClick
}) => {
  return (
    <div style={styles}>
      <button
        disabled={stateHistoryButtons.fen.length - 1 - Math.abs(stateHistoryButtons.back) === 0}
        onClick={() => onFastRewindClick()}
      >
        ⏮
      </button>
      <button
        disabled={stateHistoryButtons.fen.length - 1 - Math.abs(stateHistoryButtons.back) === 0}
        onClick={() => onSkipPreviousClick()}
      >
        ⏪
      </button>
      <button
        disabled={stateHistoryButtons.back === 0}
        onClick={() => onSkipNextClick()}
      >
        ⏩
      </button>
      <button
        disabled={stateHistoryButtons.back === 0}
        onClick={() => onFastForwardClick()}
      >
        ⏭
      </button>
    </div>
  );
}

export default HistoryButtons;
