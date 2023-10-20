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

export const Svg = ({ piece }) => {
  const handleMouseDown = (event) => {
    // TODO
    console.log('mouse down!');
  }

  if (piece === ' a ') {
    return (
      <SvgBlackArchbishop
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' b ') {
    return (
      <SvgBlackBishop
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' c ') {
    return (
      <SvgBlackChancellor
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' k ') {
    return (
      <SvgBlackKing
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' n ') {
    return (
      <SvgBlackKnight
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' p ') {
    return (
      <SvgBlackPawn
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' q ') {
    return (
      <SvgBlackQueen
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' r ') {
    return (
      <SvgBlackRook
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' A ') {
    return (
      <SvgWhiteArchbishop
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' B ') {
    return (
      <SvgWhiteBishop
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' C ') {
    return (
      <SvgWhiteChancellor
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' K ') {
    return (
      <SvgWhiteKing
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' N ') {
    return (
      <SvgWhiteKnight
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' P ') {
    return (
      <SvgWhitePawn
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' Q ') {
    return (
      <SvgWhiteQueen
        onMouseDown={handleMouseDown}
      />
    );
  } else if (piece === ' R ') {
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
