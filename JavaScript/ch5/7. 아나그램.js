function solution(str1, str2) {
  let answer = "Yes";

  let a = new Map();
  let b = new Map();

  for (const i of str1) {
    if (a.has(i)) a.set(i, a.get(i) + 1);
    else a.set(i, 1);
  }

  for (const i of str2) {
    if (b.has(i)) b.set(i, b.get(i) + 1);
    else b.set(i, 1);
  }

  for (const [key, value] of a) {
    if (!(value === b.get(key))) {
      answer = "NO";
      break;
    }
  }

  console.log(a);
  console.log(b);

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";

let c = "abaCC";
let d = "Caaab";

console.log(solution(a, b));
console.log(solution(c, d));
