function solution1(s) {
  let answer = "YES";

  let stack = s.split("");

  for (let i = 0; i < Number(s.length / 2); i++) {
    if (stack[i] !== stack.pop()) {
      answer = "NO";
      break;
    }
  }

  return answer;
}

let str1 = "gooogd";
console.log(solution1(str1));

function solution2(s) {
  let answer = "YES";
}
let str2 = "gooG";
console.log(solution2(str2));
