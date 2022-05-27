function solution(need, plan) {
  let answer = "Yes";

  let needStack = need.split("");
  let planStack = plan.split("");

  while (needStack.length !== 0) {
    let sub = needStack.shift();
    while (sub !== planStack.shift()) {
      if (planStack.length === 0) return (answer = "NO");
    }
  }

  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
