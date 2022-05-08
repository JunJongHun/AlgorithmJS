function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    switch (a[i]) {
      case 1:
        if (b[i] === 1) {
          answer += "D";
        } else {
          answer += b[i] === 2 ? "B" : "A";
        }
        break;

      case 2:
        if (b[i] === 2) {
          answer += "D";
        } else {
          answer += b[i] === 3 ? "B" : "A";
        }
        break;

      case 3:
        if (b[i] === 3) {
          answer += "D";
        } else {
          answer += b[i] === 1 ? "B" : "A";
        }
        break;

      default:
        break;
    }
  }

  return answer.split("");
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
