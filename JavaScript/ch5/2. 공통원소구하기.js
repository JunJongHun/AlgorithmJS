function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr1.forEach((element) => {
    if (arr2.includes(element)) {
      answer.push(element);
    }
  });
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
