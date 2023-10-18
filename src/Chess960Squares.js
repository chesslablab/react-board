import { useEffect, useRef } from 'react';
import { useMediaQuery } from '@mui/material';
import Animation from './common/Animation';
import Squares from './Squares';

const Chess960Squares = ({ props }) => {
  const maxWidth = {
    '600': useMediaQuery("(max-width:600px)"),
    '900': useMediaQuery("(max-width:900px)")
  };

  const sqSize = maxWidth['600'] ? 12 : maxWidth['900'] ? 10 : 4;

  const sqsRef = useRef([]);

  const imgsRef = useRef([]);

  useEffect(() => {
    new Animation(sqSize, imgsRef, sqsRef).piece();
  }, [
    props.fen,
    sqSize
  ]);

  return (
    <Squares
      props={{
        className: 'classicalSquares',
        imgsRef: imgsRef,
        sqsRef: sqsRef,
      }}
    />
  );
}

export default Chess960Squares;
