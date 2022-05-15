function solution(m, arr) {
  let answer = 0;
  for (let index = 0; index < arr.length; index++) {
    let sum = 0;
    for (let j = index; j < arr.length; j++) {
      sum += arr[j];
      if (sum === m) {
        answer++;
        break;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
