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

let arr = [1, 2, 5, 3, 8];
console.log(solution(23, arr));
