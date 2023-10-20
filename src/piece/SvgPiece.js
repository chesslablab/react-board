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
  const handlePointerDown = (event) => {
    // TODO
    console.log('pointer down!');
  }

  if (props.unicode === ' a ') {
    return (
      <SvgBlackArchbishop />
    );
  } else if (props.unicode === ' b ') {
    return (
      <SvgBlackBishop />
    );
  } else if (props.unicode === ' c ') {
    return (
      <SvgBlackChancellor />
    );
  } else if (props.unicode === ' k ') {
    return (
      <SvgBlackKing />
    );
  } else if (props.unicode === ' n ') {
    return (
      <SvgBlackKnight />
    );
  } else if (props.unicode === ' p ') {
    return (
      <SvgBlackPawn />
    );
  } else if (props.unicode === ' q ') {
    return (
      <SvgBlackQueen />
    );
  } else if (props.unicode === ' r ') {
    return (
      <SvgBlackRook />
    );
  } else if (props.unicode === ' A ') {
    return (
      <SvgWhiteArchbishop />
    );
  } else if (props.unicode === ' B ') {
    return (
      <SvgWhiteBishop />
    );
  } else if (props.unicode === ' C ') {
    return (
      <SvgWhiteChancellor />
    );
  } else if (props.unicode === ' K ') {
    return (
      <SvgWhiteKing />
    );
  } else if (props.unicode === ' N ') {
    return (
      <SvgWhiteKnight />
    );
  } else if (props.unicode === ' P ') {
    return (
      <SvgWhitePawn onPointerDown={handlePointerDown} />
    );
  } else if (props.unicode === ' Q ') {
    return (
      <SvgWhiteQueen />
    );
  } else if (props.unicode === ' R ') {
    return (
      <SvgWhiteRook />
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
