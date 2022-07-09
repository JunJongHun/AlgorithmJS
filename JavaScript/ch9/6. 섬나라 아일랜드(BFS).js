function solution(board) {
  let answer = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1 && check[i][j] === false) {
        BFS(i, j);
        answer++;
        // console.log(answer);
      }
    }
  }
  return answer;
}

function BFS(y, x, board) {
  let queue = [];
  let dy = [0, 0, 1, -1, 1, 1, -1, -1];
  let dx = [1, -1, 0, 0, 1, -1, 1, -1];

  queue.push([y, x]);

  while (queue.length) {
    let [y, x] = queue.pop();

    for (let i = 0; i < 8; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (0 <= ny && ny < len && 0 <= nx && nx < len) {
        if (check[ny][nx] === false && arr[ny][nx] === 1) {
          queue.push([ny, nx]);
          check[ny][nx] = true;
        }
      }
    }
  }

  return;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

const len = arr.length;
const check = Array.from(Array(len), () => Array(len).fill(false));

console.log(solution(arr));
