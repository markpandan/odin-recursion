#!/usr/bin/env node

function fibs(num) {
  let arr = [0, 1];
  for (let i = 2; i < num; i++) arr.push(arr[i - 1] + arr[i - 2]);

  return arr;
}

function fibsRec(num) {
  if (num <= 2) return [0, 1];
  let arr = fibsRec(num - 1);

  return [...arr, arr[num - 2] + arr[num - 3]];
}
