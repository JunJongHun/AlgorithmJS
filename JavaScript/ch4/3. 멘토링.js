function solution(test) {
  let answer = 0;
  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < test[i].length; j++) {
      console.log(test[i][j]);
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
