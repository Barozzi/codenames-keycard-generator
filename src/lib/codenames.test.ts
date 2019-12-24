import { generateKeycard, shuffle, convertNumbersToColorCodes } from './codenames';

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
    expect(shuffle(arr)).toEqual(expect.arrayContaining(arr));
  });

  test('it does not mutate the original', () => {
    const arr = [1,2,2,2];
    expect(arr).not.toBe(shuffle(arr));
  });
});

describe('convertNumbersToColorCodes', () => {
  test('converts an array of numbers to an array of strings', () => {
    const arr = [0,1,2,3];
    const expected = ['grey', 'blue', 'red', 'black'];
    expect(convertNumbersToColorCodes(arr)[0]).toContain(expected[0]);
    expect(convertNumbersToColorCodes(arr)[1]).toContain(expected[1]);
    expect(convertNumbersToColorCodes(arr)[2]).toContain(expected[2]);
    expect(convertNumbersToColorCodes(arr)[3]).toContain(expected[3]);
  })
});
