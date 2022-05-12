function solution(arr) {
  let answer = 0;

  let sum = 0;
  for (const iterator of arr) {
    if (iterator === 1) {
      sum += 1;
      answer += sum;
    } else {
      sum = 0;
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
