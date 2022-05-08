function solution(s) {
  let answer = "";
  let arr = [];
  for (const iterator of s) {
    if (iterator === iterator.toUpperCase()) {
      arr.push(iterator.toLowerCase());
    } else {
      arr.push(iterator.toUpperCase());
    }
  }
  answer = arr.join("");

  return answer;
}

console.log(solution("StuDY"));
