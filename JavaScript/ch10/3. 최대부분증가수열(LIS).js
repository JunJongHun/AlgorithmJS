function solution(arr) {
  let answer;

  let dp = Array.from({ length: 10 }, (v, i) => {
    return 0;
  });

  dp[0] = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    console.log(dp);
  }

  answer = Math.max(...dp);

  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
