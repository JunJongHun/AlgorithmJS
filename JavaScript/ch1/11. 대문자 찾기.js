function solution(s) {
  let answer = 0;
  let arr = s.split("");
  arr.forEach((element) => {
    if (element === element.toUpperCase()) {
      answer += 1;
    }
  });

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
