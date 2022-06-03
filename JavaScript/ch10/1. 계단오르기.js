function solution(n) {
  let answer;

  let dp = Array.from({ length: 45 }, (v, i) => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  answer = dp[n];

  return answer;
}

console.log(solution(7));
