import * as SvgPiece from '../piece/SvgPiece';

describe('SvgPiece.color()', () => {
  it('r is b', () => {
    expect(SvgPiece.color(' r ')).toBe('b');
  });
  it('n is b', () => {
    expect(SvgPiece.color(' n ')).toBe('b');
  });
  it('R is w', () => {
    expect(SvgPiece.color(' R ')).toBe('w');
  });
  it('N is w', () => {
    expect(SvgPiece.color(' N ')).toBe('w');
  });
});
