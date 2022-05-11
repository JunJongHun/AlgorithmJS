function solution1(n, arr) {
  let answer;
  let max = 0;
  let maxNum = 0;
  for (const iterator of arr) {
    let sum = String(iterator)
      .split("")
      .map((x) => Number(x))
      .reduce((pre, cur) => pre + cur, 0);

    if (sum > max) {
      max = sum;
      answer = iterator;
    }
    if (sum === max) {
      if (answer < iterator) {
        answer = iterator;
      }
    }
  }
  return answer;
}

let arr1 = [128, 460, 603, 40, 521, 137, 123];
console.log(solution1(7, arr1));

function solution2(n, arr) {
  let answer;
  let sum = 0;
  let max = 0;
  for (let iterator of arr) {
    sum = 0;
    number = iterator;
    while (iterator / 10) {
      sum += iterator % 10;
      iterator = parseInt(iterator / 10);
    }

    if (max < sum) {
      max = sum;
      answer = number;
    }
    if (sum === max) {
      if (answer < number) {
        answer = number;
      }
    }
  }

  return answer;
}

let arr2 = [128, 460, 603, 40, 521, 137, 123];
console.log(solution2(7, arr2));
