function solution(day, arr) {
  let answer = 0;
  arr.forEach((value) => {
    if (value % 10 === day) {
      answer += 1;
    }
  });
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));
