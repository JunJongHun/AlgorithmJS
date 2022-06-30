function solution(n, m) {
  let answer = [];

  let ch = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      console.log(ch[0], ch[1]);
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        ch[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
