import { Ascii } from './common/Ascii';
import Pgn from './common/Pgn';
import * as SvgPiece from './piece/SvgPiece';
import AlgebraicNotation from './AlgebraicNotation';
import * as eventConst from './eventConst';

const Squares = ({
  props,
  filterMove,
  handleMove
}) => {
  const handleMouseMove = (event) => {
    // TODO
    console.log('mouse move!');
  }

  const sqs = () => {
    const fen = props.fen[props.fen.length - 1].split(' ');
    const ascii = Ascii.toAscii(fen[0]);
    return Ascii.flip(
      props.flip,
      ascii
    ).map((rank, i) => {
      return rank.map((piece, j) => {
        let payload = { piece: piece };
        let isLegal, isSelected, isCheck = '';
        let color = (i + j) % 2 !== 0 ? Pgn.symbol.BLACK : Pgn.symbol.WHITE;
        props.flip === Pgn.symbol.WHITE
          ? payload = {
              ...payload,
              i: i,
              j: j,
              sq: Ascii.fromIndexToAlgebraic(i, j, props.size)
            }
          : payload = {
            ...payload,
            i: props.size.ranks - 1 - i,
            j: props.size.files - 1 - j,
            sq: Ascii.fromIndexToAlgebraic(
              props.size.ranks - 1 - i,
              props.size.files - 1 - j,
              props.size
            )
          };
        if (props.pieceGrabbed) {
          if (props.pieceGrabbed.sq === payload.sq) {
            isSelected = 'isSelected';
          }
          if (props.pieceGrabbed.fen) {
            if (Object.keys(props.pieceGrabbed.fen).includes(payload.sq)) {
              isLegal = 'isLegal';
            }
          }
        } else if (props.isCheck) {
          if (fen[1] === Pgn.symbol.WHITE) {
            if (piece === ' K ') {
              isCheck = 'isCheck';
            }
          } else if (fen[1] === Pgn.symbol.BLACK) {
            if (piece === ' k ') {
              isCheck = 'isCheck';
            }
          }
        }

        return <div
          key={payload.sq}
          className={[
              'sq',
              color,
              payload.sq,
              isLegal,
              isSelected,
              isCheck
            ].join(' ')
          }
          onMouseDown={() => {
            if (filterMove()) {
              payload.piecePlaced = {
                ascii: props?.pieceGrabbed?.ascii,
                event: eventConst.ON_MOUSE_DOWN
              };
              handleMove(payload);
            }
          }}
          onMouseUp={(ev) => {
            ev.preventDefault();
            if (filterMove()) {
              payload.piecePlaced = {
                ascii: props?.pieceGrabbed?.ascii,
                event: eventConst.ON_DROP
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
            <AlgebraicNotation props={payload} size={props.size} />
        </div>
      });
    });
  }

  return (
    <div
      className={[props.className].join(' ')}
      onMouseMove={handleMouseMove}
    >
      {sqs()}
    </div>
  );
}

export default Squares;
