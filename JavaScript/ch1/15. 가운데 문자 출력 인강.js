function solution(s) {
  let answer;
  const mid = parseInt(s.length / 2);

  if (s.length % 2 === 0) {
    answer = s[mid - 1] + s[mid];
  } else {
    answer = s[mid];
  }

  return answer;
}

console.log(solution("study"));
console.log(solution("good"));
