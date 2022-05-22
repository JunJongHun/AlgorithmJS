function solution(s) {
  let answer;

  let stack = [];

  for (const i of s) {
    if (i === "(") {
      stack.push(i);
    } else {
      if (stack.length === 0) return (answer = "NO");
      stack.pop(i);
    }
  }

  answer = stack.length === 0 ? "YES" : "NO";

  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
