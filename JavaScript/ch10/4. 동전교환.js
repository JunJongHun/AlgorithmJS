function solution(m, coin) {
  let answer = 0;
  let i = coin.length - 1;

  coin.sort((a, b) => a - b);

  while (m > 0) {
    let quotient = parseInt(m / coin[i]);
    if (quotient > 0) {
      answer += quotient;
      console.log(`${m}을 ${coin[i]}로 나누면 누적 ${answer}`);
      m = m % coin[i];
    }
    i--;
  }

  return answer;
}

let arr = [1, 2, 5, 10, 16]; //잘못 된 예시!
console.log(solution(20, arr));

function solution1(m, coin) {
  let answer = 0;
  let dp = Array.from({ length: m + 1 }, (v, i) => 1000);
  dp[0] = 0;

  for (const coco of coin) {
    for (let i = coco; i <= m; i++) {
      dp[i] = Math.min(dp[i], dp[i - coco] + 1);
      // dp[i] = dp[i - coco] + 1;
    }
  }
  console.log(dp);

  answer = dp[m];
  return answer;
}

let arr1 = [1, 2, 5];
console.log(solution1(15, arr1));
