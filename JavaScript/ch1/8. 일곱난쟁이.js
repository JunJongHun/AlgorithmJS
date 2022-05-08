function solution(arr) {
  let answer = arr;

  let sum = answer.reduce((pre, cur) => pre + cur, 0) - 100;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum === answer[i] + answer[j]) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
