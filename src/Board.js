import ActiveSquares from './ActiveSquares';
import PawnPromotionDialog from './PawnPromotionDialog';
import ResizeSlider from './ResizeSlider';
import BoardAudio from './BoardAudio';

const Board = () => {
  return (
    <>
      <ActiveSquares />
      <ResizeSlider />
      <PawnPromotionDialog />
      <BoardAudio />
    </>
  );
}

export default Board;
