function solution(str) {
  let answer = "";
  let arr = str.split("");
  for (const i of arr) {
    if (!isNaN(parseInt(i))) answer += i;
  }

  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
