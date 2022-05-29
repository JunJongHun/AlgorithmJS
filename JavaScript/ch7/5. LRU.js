function solution(size, arr) {
  let answer;
  let cash = [];

  for (const number of arr) {
    let check = cash.indexOf(number);
    if (check === -1) {
      cash.unshift(number);
      if (cash.length > size) cash.pop();
    } else {
      cash.splice(check, 1);
      cash.unshift(number);
    }
  }
  answer = cash;
  return answer;
}

let arr1 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr1));

function solution2(size, arr) {
  let answer;

  return answer;
}

let arr2 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution2(5, arr2));
