function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_VALUE;
  arr.forEach((value) => {
    //홀수 찾기
    if (value % 2 !== 0) {
      sum += value;
      // 홀수 중 작은 값 찾기
      if (min > value) {
        min = value;
      }
    }
  });
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr)[0]);
console.log(solution(arr)[1]);
