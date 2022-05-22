function solution(s) {
  let answer;

  let stack = [];

  for (const i of s) {
    if ("(" === i) {
      stack.push(i);
    } else if (")" === i) {
      while (stack.pop() !== "(") {}
    } else {
      stack.push(i);
    }
  }
  answer = stack.join("");
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
