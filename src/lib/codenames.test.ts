import { generateKeycard, shuffle, toString } from './codenames';

describe('generateKeycard', () => {
  test('it returns an array', () => {
    const keyCard = generateKeycard();
    expect(keyCard.length).toBe(5)
  });

  test('it shuffles', () => {
    const keyCard = generateKeycard();
    expect(keyCard[0]).not.toBe(['grey', 'grey', 'grey', 'grey', 'grey'])
  });
});

describe('shuffle', () => {
  test('it returns an array with the same number of elements', () => {
    const arr = [1,2,3,4];
    expect(shuffle(arr).length).toBe(arr.length);
  });

  test('it does not remove any elements', () => {
    const arr = [1,2,2,2];
    expect(shuffle(arr)).toContain(1);
  });

  test('it returns the array in a different order', () => {
    const arr = [1,2,3,4];
    const shuffled = shuffle(arr);
    expect(shuffled[0] != 1 || shuffled[1] != 2 || shuffled[2] != 3 || shuffled[3] != 4).toBeTruthy()
  });
});

describe('toString', () => {
  test('converts an array of numbers to an array of strings', () => {
    const arr = [[0,0,1,1,2,2,3]];
    expect(toString(arr)[0]).toContain('grey');
    expect(toString(arr)[0]).toContain('blue');
    expect(toString(arr)[0]).toContain('red');
    expect(toString(arr)[0]).toContain('black');
  })
});
