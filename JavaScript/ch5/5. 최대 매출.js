function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  let sum2 = 0;
  let count = 0;
  let p1 = 0,
    p2 = 0;
  for (let i = 0; i < arr.length - k; i++) {
    if (count < k) {
      sum += arr[i];
      count++;
    } else {
      p2 = i;
      sum2 = sum - arr[p1] + arr[p2];
      p1++;
      p2++;
      if (sum < sum2) {
        sum = sum2;
      }
    }
  }
  answer = sum;

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
