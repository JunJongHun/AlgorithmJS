function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;

  for (const iterator of s) {
    if (iterator.length > max) {
      max = iterator.length;
      answer = iterator;
    }
  }

  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
