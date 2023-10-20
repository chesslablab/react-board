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
  if (piece === ' a ') {
    return (
      <SvgBlackArchbishop />
    );
  } else if (piece === ' b ') {
    return (
      <SvgBlackBishop />
    );
  } else if (piece === ' c ') {
    return (
      <SvgBlackChancellor />
    );
  } else if (piece === ' k ') {
    return (
      <SvgBlackKing />
    );
  } else if (piece === ' n ') {
    return (
      <SvgBlackKnight />
    );
  } else if (piece === ' p ') {
    return (
      <SvgBlackPawn />
    );
  } else if (piece === ' q ') {
    return (
      <SvgBlackQueen />
    );
  } else if (piece === ' r ') {
    return (
      <SvgBlackRook />
    );
  } else if (piece === ' A ') {
    return (
      <SvgWhiteArchbishop />
    );
  } else if (piece === ' B ') {
    return (
      <SvgWhiteBishop />
    );
  } else if (piece === ' C ') {
    return (
      <SvgWhiteChancellor />
    );
  } else if (piece === ' K ') {
    return (
      <SvgWhiteKing />
    );
  } else if (piece === ' N ') {
    return (
      <SvgWhiteKnight />
    );
  } else if (piece === ' P ') {
    return (
      <SvgWhitePawn />
    );
  } else if (piece === ' Q ') {
    return (
      <SvgWhiteQueen />
    );
  } else if (piece === ' R ') {
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
