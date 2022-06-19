function solution(m, arr) {
  let answer;
  let dp = Array.from({ length: 300 }, (v, i) => 0);

  for (let i = 0; i < arr.length; i++) {
    let score = arr[i][0];
    let time = arr[i][1];
    dp[time] = score;
  }

  console.log(dp);

  for (let i = 0; i <= 300; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[i - j] === dp[j]) continue;
      dp[i] = Math.max(dp[i], dp[i - j] + dp[j]);
    }
  }
  console.log(dp);
  answer = dp[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

console.log(solution(20, arr));
