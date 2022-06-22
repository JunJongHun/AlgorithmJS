function solution(arr) {
  let answer = "NO";
  let arr1 = [];
  let arr2 = [];
  let ch = Array.from({ length: arr.length }, (v, i) => 0);

  function DFS(L) {
    let sum1 = 0;
    let sum2 = 0;

    if (L === arr.length) {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 1) arr1.push(arr[i]);
        else arr2.push(arr[i]);
      }

      sum1 = arr1.reduce((pre, cur) => pre + cur, 0);
      sum2 = arr2.reduce((pre, cur) => pre + cur, 0);
      if (sum1 === sum2) answer = "YES";
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

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
