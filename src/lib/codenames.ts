

const keys = [
  0,0,0,0,0,0,0,0,0, // grey
  1,1,1,1,1,1,1, // blue
  2,2,2,2,2,2,2,2, // red
  3, // black
]


/**
 * @name generateKeycard
 * @desc Randomly generates a Codenames keycard.
 * #     Scrambles the order of the cells and creates a 5x5 grid represented i a 2d array.
 * #     This method is called in the App template each time it is loaded.
 */
export function generateKeycard(): string[][] {
  const shuffled = shuffle(keys);
  const rows: (string[] | undefined)[] = shuffled.map((_, index: number, arr: number[]) => {
    if (index === 0 || (index % 5) === 0) {
      return convertNumbersToColorCodes(arr.slice(index, index+5));
    }
    return undefined;
  });
  return compact(rows);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort((_,__) => 0.3 - Math.random())
}

export function compact<T>(x: (T | undefined)[]): T[] {
  return x.filter((e: T | undefined): e is T => !!e)
}

export function convertNumbersToColorCodes(arr: number[]): string[] {
  const translationKey = ['grey', 'blue', 'red', 'black'];
  return arr.map(cell => translationKey[cell]);
}

export default generateKeycard;
