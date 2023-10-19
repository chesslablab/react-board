import SvgBlackArchbishop from 'features/board/piece/SvgBlackArchbishop';
import SvgBlackBishop from 'features/board/piece/SvgBlackBishop';
import SvgBlackChancellor from 'features/board/piece/SvgBlackChancellor';
import SvgBlackKing from 'features/board/piece/SvgBlackKing';
import SvgBlackKnight from 'features/board/piece/SvgBlackKnight';
import SvgBlackPawn from 'features/board/piece/SvgBlackPawn';
import SvgBlackQueen from 'features/board/piece/SvgBlackQueen';
import SvgBlackRook from 'features/board/piece/SvgBlackRook';
import SvgWhiteArchbishop from 'features/board/piece/SvgWhiteArchbishop';
import SvgWhiteBishop from 'features/board/piece/SvgWhiteBishop';
import SvgWhiteChancellor from 'features/board/piece/SvgWhiteChancellor';
import SvgWhiteKing from 'features/board/piece/SvgWhiteKing';
import SvgWhiteKnight from 'features/board/piece/SvgWhiteKnight';
import SvgWhitePawn from 'features/board/piece/SvgWhitePawn';

export const Svg = ({ props }) => {
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
      <SvgWhitePawn />
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
