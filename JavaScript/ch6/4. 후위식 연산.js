function solution(s) {
  let answer;

  let stack = [];

  for (const i of s) {
    if (isNaN(Number(i))) {
      num2 = Number(stack.pop());
      num1 = Number(stack.pop());
      let result;
      switch (i) {
        case "+":
          result = num1 + num2;
          break;

        case "-":
          result = num1 - num2;
          break;

        case "*":
          result = num1 * num2;
          break;

        case "/":
          result = num1 / num2;
          break;

        default:
          break;
      }

      stack.push(result);
    } else {
      stack.push(i);
    }
  }
  answer = stack.pop();
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
