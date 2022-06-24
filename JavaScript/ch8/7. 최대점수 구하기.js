function solution(m, ps, pt) {
  let answer;
  let max = 0;

  let ch = Array.from({ length: ps.length }, (v, i) => 0);

  function DFS(L) {
    if (L === ps.length) {
      let time_sum = 0;
      let score_sum = 0;
      for (let i = 0; i < pt.length; i++) {
        if (ch[i] === 1) time_sum += pt[i];
      }
      if (time_sum <= m) {
        for (let i = 0; i < ps.length; i++) {
          if (ch[i] === 1) score_sum += ps[i];
        }
        if (score_sum > max) {
          max = score_sum;
          answer = max;
        }
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

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
