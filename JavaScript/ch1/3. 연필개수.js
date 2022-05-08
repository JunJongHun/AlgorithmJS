function solution(n) {
  let answer;
  const das = 12;
  //반올림
  answer = Math.ceil(n / 12);

  return answer;
}

console.log(solution(25));
console.log(solution(178));
