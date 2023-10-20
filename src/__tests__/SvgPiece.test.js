import { Pgn } from '../common/Pgn.js';
import * as SvgPiece from '../piece/SvgPiece';

describe('SvgPiece.color()', () => {
  it('r is b', () => {
    expect(SvgPiece.color(' r ')).toBe(Pgn.symbol.BLACK);
  });
  it('n is b', () => {
    expect(SvgPiece.color(' n ')).toBe(Pgn.symbol.BLACK);
  });
  it('R is w', () => {
    expect(SvgPiece.color(' R ')).toBe(Pgn.symbol.WHITE);
  });
  it('N is w', () => {
    expect(SvgPiece.color(' N ')).toBe(Pgn.symbol.WHITE);
  });
});
