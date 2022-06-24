function solution(c, arr) {
  let answer;
  let max = 0;
  let ch = Array.from({ length: arr.length }, (v, i) => 0);

  function DFS(L) {
    if (L === arr.length) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 1) sum += arr[i];
      }
      if (sum < c && sum > max) {
        max = sum;
        answer = max;
      }
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
