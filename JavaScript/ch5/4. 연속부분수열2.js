function solution(m, arr) {
  let pl = 0;
  let pr = 0;
  let sum = 0;
  let count = 0;
  while (pl < arr.length) {
    sum += arr[pr];
    if (sum <= m) {
      count++;
      pr++;
    } else {
      sum -= arr[pl];
      sum -= arr[pr];
      count++;
      pl++;
    }
    console.log(sum);
  }

  return count;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
