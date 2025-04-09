function mergeSort(array) {
  if (array.length < 2) return array;

  let mid = Math.trunc(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  let result = [];
  let a = (b = 0);

  while (a < left.length && b < right.length) {
    left[a] < right[b] ? result.push(left[a++]) : result.push(right[b++]);
  }

  if (a < left.length) result.push(...left.slice(a));
  if (b < right.length) result.push(...right.slice(b));

  return result;
}
