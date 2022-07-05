function solution(board) {
  let answer = 0;
  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];

  function DFS(x, y) {
    if (x === 6 && y === 6) {
      answer++;
      console.log(board);
    } else {
      for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];
        if (0 <= ny && ny <= 6 && 0 <= nx && nx <= 6) {
          if (board[ny][nx] === 0) {
            board[ny][nx] = 1;

            DFS(nx, ny);
            board[ny][nx] = 0;
          }
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
