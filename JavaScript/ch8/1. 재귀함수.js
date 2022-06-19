function printNum(n) {
  if (n === 1) {
    console.log(1);
    return;
  } else {
    printNum(n - 1);
    console.log(n);
  }
}

function solution(n) {
  printNum(n);
}

solution(10);
