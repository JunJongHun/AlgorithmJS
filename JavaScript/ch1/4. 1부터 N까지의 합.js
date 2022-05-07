function solution(n) {
  let answer = 0;
  for (let index = 1; index <= n; index++) {
    answer += index;
  }
  return answer;
}

console.log(solution(6));
console.log(solution(10));
