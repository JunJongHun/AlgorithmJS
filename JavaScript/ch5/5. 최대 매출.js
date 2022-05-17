function solution(k, arr) {
  let answer = 0;
  let max = 0;
  let sum2 = 0;
  let count = 0;
  let p1 = 0,
    p2 = k;
  for (let i = 0; i < arr.length; i++) {
    if (count < k) {
      sum2 += arr[i];
      count++;
    } else {
      sum2 = sum2 - arr[p1] + arr[p2];
      p1++;
      p2++;
      if (max < sum2) {
        max = sum2;
      }
    }
  }
  answer = max;

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(4, a));
