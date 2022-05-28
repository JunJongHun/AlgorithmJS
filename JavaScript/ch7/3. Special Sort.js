function solution(arr) {
  let answer;

  let negativeNumber = [];
  let postiveNumber = [];

  for (const i of arr) {
    if (i < 0) negativeNumber.push(i);
    else postiveNumber.push(i);
  }

  answer = negativeNumber.concat(postiveNumber);

  return answer;
}

let arr1 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr1));

function solution2(arr) {
  let answer = arr;

  return answer;
}

let arr2 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution2(arr2));
