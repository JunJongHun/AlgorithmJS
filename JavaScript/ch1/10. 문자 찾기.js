function solution1(s, t) {
  let answer = 0;
  for (const iterator of s) {
    if (iterator === t) {
      answer += 1;
    }
  }
  return answer;
}

let str1 = "COMPUTERPROGRAMMING";
console.log(solution1(str1, "R"));

function solution2(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}

let str2 = "COMPUTERPROGRAMMING";
console.log(solution2(str2, "R"));
