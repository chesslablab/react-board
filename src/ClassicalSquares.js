import { useEffect, useRef } from 'react';
import { useMediaQuery } from '@mui/material';
import Squares from './Squares';

const ClassicalSquares = ({ props }) => {
  const maxWidth = {
    '600': useMediaQuery("(max-width:600px)"),
    '900': useMediaQuery("(max-width:900px)")
  };

  const sqSize = maxWidth['600'] ? 12 : maxWidth['900'] ? 10 : 4;

  const sqsRef = useRef([]);

  const imgsRef = useRef([]);

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

export default ClassicalSquares;
