import SvgBlackArchbishop from './SvgBlackArchbishop';
import SvgBlackBishop from './SvgBlackBishop';
import SvgBlackChancellor from './SvgBlackChancellor';
import SvgBlackKing from './SvgBlackKing';
import SvgBlackKnight from './SvgBlackKnight';
import SvgBlackPawn from './SvgBlackPawn';
import SvgBlackQueen from './SvgBlackQueen';
import SvgBlackRook from './SvgBlackRook';
import SvgWhiteArchbishop from './SvgWhiteArchbishop';
import SvgWhiteBishop from './SvgWhiteBishop';
import SvgWhiteChancellor from './SvgWhiteChancellor';
import SvgWhiteKing from './SvgWhiteKing';
import SvgWhiteKnight from './SvgWhiteKnight';
import SvgWhitePawn from './SvgWhitePawn';
import SvgWhiteQueen from './SvgWhiteQueen';
import SvgWhiteRook from './SvgWhiteRook';

export const Svg = ({ props }) => {
  const handleMouseDown = (event) => {
    // TODO
    console.log('mouse down!');
  }

  if (props.unicode === ' a ') {
    return (
      <SvgBlackArchbishop
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' b ') {
    return (
      <SvgBlackBishop
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' c ') {
    return (
      <SvgBlackChancellor
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' k ') {
    return (
      <SvgBlackKing
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' n ') {
    return (
      <SvgBlackKnight
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' p ') {
    return (
      <SvgBlackPawn
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' q ') {
    return (
      <SvgBlackQueen
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' r ') {
    return (
      <SvgBlackRook
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' A ') {
    return (
      <SvgWhiteArchbishop
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' B ') {
    return (
      <SvgWhiteBishop
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' C ') {
    return (
      <SvgWhiteChancellor
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' K ') {
    return (
      <SvgWhiteKing
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' N ') {
    return (
      <SvgWhiteKnight
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' P ') {
    return (
      <SvgWhitePawn
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' Q ') {
    return (
      <SvgWhiteQueen
        onMouseDown={handleMouseDown}
      />
    );
  } else if (props.unicode === ' R ') {
    return (
      <SvgWhiteRook
        onMouseDown={handleMouseDown}
      />
    );
  }

  return null;
}

export const color = (piece) => {
  const pieces = {
    'w': [' A ', ' B ', ' C ', ' K ', ' N ', ' P ', ' Q ', ' R '],
    'b': [' a ', ' b ', ' c ', ' k ', ' n ', ' p ', ' q ', ' r ']
  };
  if (pieces['w'].includes(piece)) {
    return 'w';
  } else if (pieces['b'].includes(piece)) {
    return 'b';
  }

  return null;
}
