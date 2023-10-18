import ActiveSquares from 'features/board/ActiveSquares';
import PawnPromotionDialog from 'features/board/PawnPromotionDialog';
import ResizeSlider from 'features/board/ResizeSlider';
import BoardAudio from 'features/board/BoardAudio';

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
