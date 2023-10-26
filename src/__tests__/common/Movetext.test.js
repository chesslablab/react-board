import { Movetext } from '../../common/Movetext';

describe('toRows()', () => {
  it('is 1.e4', () => {
    const string = '1.e4';
    const expected = [
      {
        n: 1,
        w: 'e4',
      }
    ];
    expect(Movetext.toRows(string)).toEqual(expected);
  });
  it('is 1.e4 e5', () => {
    const string = '1.e4 e5';
    const expected = [
      {
        n: 1,
        w: 'e4',
        b: 'e5',
      }
    ];
    expect(Movetext.toRows(string)).toEqual(expected);
  });
  it('is 1.e4 e5 2.Nf3', () => {
    const string = '1.e4 e5 2.Nf3';
    const expected = [
      {
        n: 1,
        w: 'e4',
        b: 'e5',
      },
      {
        n: 2,
        w: 'Nf3',
      }
    ];
    expect(Movetext.toRows(string)).toEqual(expected);
  });
  it('is 1.e4 e5 2.Nf3 Nc6', () => {
    const string = '1.e4 e5 2.Nf3 Nc6';
    const expected = [
      {
        n: 1,
        w: 'e4',
        b: 'e5',
      },
      {
        n: 2,
        w: 'Nf3',
        b: 'Nc6',
      }
    ];
    expect(Movetext.toRows(string)).toEqual(expected);
  });
});

describe('toCommentedRows()', () => {
  it('is 1.e4 c5 {foo} 2.Nf3 d6', () => {
    const string = '1.e4 c5 {foo} 2.Nf3 d6';
    const expected = [
      {
        n: 1,
        w: 'e4',
        b: 'c5 foo'
      },
      {
        n: 2,
        w: 'Nf3',
        b: 'd6'
      }
    ];
    expect(Movetext.toCommentedRows(string)).toEqual(expected);
  });
  it('is 1.e4 c5 {foo}', () => {
    const string = '1.e4 c5 {foo}';
    const expected = [
      {
        n: 1,
        w: 'e4',
        b: 'c5 foo'
      }
    ];
    expect(Movetext.toCommentedRows(string)).toEqual(expected);
  });
  it('is 1.e4 c5 {foo} (2.Nf3 d6)', () => {
    const string = '1.e4 c5 {foo} (2.Nf3 d6)';
    const expected = [
      {
        n: 1,
        w: 'e4',
        b: 'c5 foo'
      },
      {
        n: 2,
        w: 'Nf3',
        b: 'd6'
      }
    ];
    expect(Movetext.toCommentedRows(string)).toEqual(expected);
  });
});

describe('substring()', () => {
  it('is 1.e4', () => {
    const string = '1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 e5 5.dxe5 Nc6 6.Nf3 Bb4 7.Bd2';
    const expected = '1.e4';
    expect(Movetext.substring(string, -12)).toEqual(expected);
  });
  it('is 1.e4 d5', () => {
    const string = '1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 e5 5.dxe5 Nc6 6.Nf3 Bb4 7.Bd2';
    const expected = '1.e4 d5';
    expect(Movetext.substring(string, -11)).toEqual(expected);
  });
  it('is 1.e4 d5 2.exd5', () => {
    const string = '1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 e5 5.dxe5 Nc6 6.Nf3 Bb4 7.Bd2';
    const expected = '1.e4 d5 2.exd5';
    expect(Movetext.substring(string, -10)).toEqual(expected);
  });
});

describe('openParentheses()', () => {
  it('is 0', () => {
    const string = '1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 e5 5.dxe5 Nc6 6.Nf3 Bb4 7.Bd2';
    const expected = 0;
    expect(Movetext.openParentheses(string)).toEqual(expected);
  });
  it('is 1', () => {
    const string = '1.e4 e5 2.Nf3 Nc6 (2...Nf6 3.Nc3';
    const expected = 1;
    expect(Movetext.openParentheses(string)).toEqual(expected);
  });
  it('is 2', () => {
    const string = '1.e4 e5 2.Nf3 Nc6 (2...Nf6 3.Nc3 (3.Bc4';
    const expected = 2;
    expect(Movetext.openParentheses(string)).toEqual(expected);
  });
  it('is 1', () => {
    const string = '1.e4 e5 2.Nf3 Nc6 (2...Nf6 3.Nc3 (3.Bc4)';
    const expected = 1;
    expect(Movetext.openParentheses(string)).toEqual(expected);
  });
  it('is 0', () => {
    const string = '1.e4 e5 2.Nf3 Nc6 (2...Nf6 3.Nc3 (3.Bc4 d5))';
    const expected = 0;
    expect(Movetext.openParentheses(string)).toEqual(expected);
  });
});
