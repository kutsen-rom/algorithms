function binarySearch(list: number[], target: number): number | null {
  let right = list.length - 1;
  let left = 0;
  if (target < left || target > right) {
    return null;
  }
  while (true) {
    const index = left + Math.ceil((right - left) / 2);
    const current = list[index];
    if (current === target) {
      return index;
    } else if (target > current) {
      left = index;
    } else if (target < current) {
      right = index;
    }
  }
}

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
binarySearch(numbers, 6);
