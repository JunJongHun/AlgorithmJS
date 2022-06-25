function solution(m, arr) {
  let answer;
  let sum = 0;
  let min = 1000;
  function DFS(L, sum) {
    if (sum > m) {
      min = Math.min(min, L - 1);
      sum = 0;
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);
  answer = min;
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
