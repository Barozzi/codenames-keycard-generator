

const keys = [
  0,0,0,0,0,0,0,0,0, // grey
  1,1,1,1,1,1,1, // blue
  2,2,2,2,2,2,2,2, // red
  3, // black
]

export function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort((_,__) => 0.5 - Math.random())
}

export function generateKeycard(): string[][] {
  const shuffled = shuffle(keys);
  const rows: (number[] | undefined)[] = shuffled.map((_, index: number, arr: number[]) => {
    if (index === 0 || (index % 5) === 0) {
      return arr.slice(index, index+5);
    }
    return undefined;
  });
  const filtered: number[][] = filterUndef(rows);
  return toString(filtered);
}

export function filterUndef<T>(ts: (T | undefined)[]): T[] {
  return ts.filter((t: T | undefined): t is T => !!t)
}

export function toString(arr: number[][]): string[][] {
  return arr.map(row => {
    return row.map(cell => {
      if (cell === 0) {
        return 'grey';
      } else if (cell === 1) {
        return 'blue';
      } else if (cell === 2) {
        return 'red';
      } else if (cell === 3) {
        return 'black';
      } else {
        return 'ERROR'
      }
    })
  })
}

export default generateKeycard;
