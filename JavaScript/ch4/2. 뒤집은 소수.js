function solution(arr) {
  let answer = [];
  let revserse_arr = arr.map((x) => {
    return Number(String(x).split("").reverse().join(""));
  });

  for (let i = revserse_arr.length - 1; i > 0; i--) {
    for (let j = 2; j < revserse_arr[i]; j++) {
      if (revserse_arr[i] % j === 0) {
        revserse_arr.splice(i, 1);
        break;
      }
    }
  }

  while (revserse_arr.indexOf(1) !== -1) {
    revserse_arr.splice(revserse_arr.indexOf(1), 1);
  }
  answer = revserse_arr;
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

function solution2(arr) {
  let answer = [];
  let revserse_arr;
  const MaxNum = 100000;
  let primeNumber = [2, 3];

  for (let i = 4; i < MaxNum; i++) {
    for (let j = 0; j < primeNumber.length; j++) {
      if (i % primeNumber[j] === 0) {
        break;
      }
      if (j === primeNumber.length - 1) {
        primeNumber.push(i);
      }
    }
  }

  revserse_arr = arr.map((x) => Number(String(x).split("").reverse().join("")));

  for (const iterator of revserse_arr) {
    if (primeNumber.indexOf(iterator) !== -1) answer.push(iterator);
  }

  return answer;
}

let arr2 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution2(arr2));
