function solution(s) {
  let a = new Map();
  let answer;
  let max = 0;
  for (let x of s) {
    if (a.has(x)) {
      a.set(x, a.get(x) + 1);
    } else {
      a.set(x, 1);
    }
  }

  for (const [key, value] of a) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
