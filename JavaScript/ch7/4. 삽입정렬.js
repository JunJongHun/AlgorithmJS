function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    let index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[index]) {
        [arr[j], arr[index]] = [arr[index], arr[j]];
        index = j;
        break;
      }
    }
    console.log(arr);
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

function solution2(arr) {
  let answer = [];

  return answer;
}

let arr2 = [11, 7, 5, 6, 10, 9];
console.log(solution2(arr2));
