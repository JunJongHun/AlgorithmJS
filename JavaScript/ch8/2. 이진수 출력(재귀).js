function printBinaryNum(n) {
  if (n === 1) {
    console.log(1);
    return;
  } else {
    printBinaryNum(parseInt(n / 2));
    console.log(n % 2);
  }
}

function solution(n) {
  printBinaryNum(n);
}

console.log(solution(10));
