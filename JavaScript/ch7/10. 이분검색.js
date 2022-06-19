function solution(target, arr) {
  let answer;

  let left = 0;
  let right = arr.length - 1;

  arr.sort((a, b) => a - b);

  console.log(arr);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    console.log(left, mid, right);
    if (target === arr[mid]) {
      answer = mid + 1;
      break;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
