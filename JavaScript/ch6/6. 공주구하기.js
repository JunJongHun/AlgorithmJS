function solution(n, k) {
  let answer = 0;
  let queue = [];
  for (let i = 0; i < n; i++) {
    queue.push(i + 1);
  }

  while (queue.length !== 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }
  answer = queue.shift();
  return answer;
}

console.log(solution(10, 4));
