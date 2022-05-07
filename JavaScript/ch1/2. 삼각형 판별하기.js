function solution(a, b, c) {
  // 세 변의 길이를 알 때  (가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다 )
  let answer;
  let max = Math.max(a, b, c);
  answer = max < a + b + c - max ? "YES" : "NO";

  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
