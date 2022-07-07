function solution() {
  let answer = [];

  let queue = [1];

  while (queue.length) {
    let data = queue.shift();

    answer.push(data);
    if (data !== 7) {
      for (const i of [data * 2, data * 2 + 1]) {
        queue.push(i);
      }
    } else break;
  }
  console.log(answer);
  return;
}

console.log(solution());
