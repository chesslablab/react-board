export const HistoryButtons = ({
  stateHistoryButtons,
  onFastRewindClick,
  onSkipPreviousClick,
  onSkipNextClick,
  onFastForwardClick
}) => {
  return (
    <>
      <button onClick={() => onFastRewindClick()}>⏮</button>
      <button onClick={() => onSkipPreviousClick()}>⏪</button>
      <button onClick={() => onSkipNextClick()}>⏩</button>
      <button onClick={() => onFastForwardClick()}>⏭</button>
    </>
  );
}

export default HistoryButtons;
