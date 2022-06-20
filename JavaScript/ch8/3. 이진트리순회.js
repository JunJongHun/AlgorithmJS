function solution1(n) {
  //전위
  if (n > 7) return;
  console.log(n);
  solution1(n * 2);
  solution1(n * 2 + 1);
}

function solution2(n) {
  //중위
  if (n > 7) return;
  solution2(n * 2);
  console.log(n);
  solution2(n * 2 + 1);
}

function solution3(n) {
  //후위
  if (n > 7) return;
  solution3(n * 2);
  solution3(n * 2 + 1);
  console.log(n);
}

console.log(solution1(1));
console.log(solution2(1));
console.log(solution3(1));
