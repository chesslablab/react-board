import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBackward,
  faBackwardStep,
  faForward,
  faForwardStep
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles/historyButtons';

export const HistoryButtons = ({
  stateHistoryButtons,
  onFastRewindClick,
  onSkipPreviousClick,
  onSkipNextClick,
  onFastForwardClick
}) => {
  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        disabled={stateHistoryButtons.fen.length - 1 - Math.abs(stateHistoryButtons.back) === 0}
        onClick={() => onFastRewindClick()}
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        style={styles.button}
        disabled={stateHistoryButtons.fen.length - 1 - Math.abs(stateHistoryButtons.back) === 0}
        onClick={() => onSkipPreviousClick()}
      >
        <FontAwesomeIcon icon={faBackwardStep} />
      </button>
      <button
        style={styles.button}
        disabled={stateHistoryButtons.back === 0}
        onClick={() => onSkipNextClick()}
      >
        <FontAwesomeIcon icon={faForwardStep} />
      </button>
      <button
        style={styles.button}
        disabled={stateHistoryButtons.back === 0}
        onClick={() => onFastForwardClick()}
      >
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default HistoryButtons;
