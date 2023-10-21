import { Ascii } from './common/Ascii';
import * as SvgPiece from './piece/SvgPiece';
import AlgebraicNotation from './AlgebraicNotation';
import styles from './styles';

const Squares = ({
  className,
  stateBoard,
  goBack,
  filterMove,
  handleMove
}) => {
  const sqs = () => {
    const fen = stateBoard.fen[stateBoard.fen.length - 1 + goBack].split(' ');
    const ascii = Ascii.toAscii(fen[0]);
    return Ascii.flip(
      stateBoard.flip,
      ascii
    ).map((rank, i) => {
      return rank.map((piece, j) => {
        let payload = { piece: piece };
        let isLegal, isSelected, isCheck = '';
        let color = (i + j) % 2 !== 0 ? 'b' : 'w';
        stateBoard.flip === 'w'
          ? payload = {
              ...payload,
              i: i,
              j: j,
              sq: Ascii.fromIndexToAlgebraic(i, j, stateBoard.size)
            }
          : payload = {
            ...payload,
            i: stateBoard.size.ranks - 1 - i,
            j: stateBoard.size.files - 1 - j,
            sq: Ascii.fromIndexToAlgebraic(
              stateBoard.size.ranks - 1 - i,
              stateBoard.size.files - 1 - j,
              stateBoard.size
            )
          };
        if (stateBoard.pieceGrabbed) {
          if (stateBoard.pieceGrabbed.sq === payload.sq) {
            isSelected = 'isSelected';
          }
          if (stateBoard.pieceGrabbed.fen) {
            if (Object.keys(stateBoard.pieceGrabbed.fen).includes(payload.sq)) {
              isLegal = 'isLegal';
            }
          }
        } else if (stateBoard.isCheck) {
          if (fen[1] === 'w') {
            if (piece === ' K ') {
              isCheck = 'isCheck';
            }
          } else if (fen[1] === 'b') {
            if (piece === ' k ') {
              isCheck = 'isCheck';
            }
          }
        }

        return <div
          key={payload.sq}
          style={{
            ...styles.sq,
            ...styles[color],
            ...styles[isLegal],
            ...styles[isSelected],
            ...styles[isCheck],
          }}
          className={[
              'sq',
              payload.sq,
            ].join(' ')
          }
          onMouseDown={() => {
            if (filterMove()) {
              payload.piecePlaced = {
                ascii: stateBoard?.pieceGrabbed?.ascii,
              };
              handleMove(payload);
            }
          }}
          onMouseUp={(ev) => {
            ev.preventDefault();
            if (filterMove()) {
              payload.piecePlaced = {
                ascii: stateBoard?.pieceGrabbed?.ascii,
              };
              handleMove(payload);
            }
          }}
          onContextMenu={(ev)=>{
            ev.preventDefault();
            ev.target.classList.toggle('square-right-clicked');
          }}
          onDragOver={(ev) => {
            ev.preventDefault();
          }}>
            <SvgPiece.Svg
              piece={piece}
            />
            <AlgebraicNotation props={stateBoard} payload={payload} />
        </div>
      });
    });
  }

  return (
    <div style={styles[className]}>
      {sqs()}
    </div>
  );
}

export default Squares;
