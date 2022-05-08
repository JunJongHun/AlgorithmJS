function solution(s) {
  let answer = "";
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  answer = arr.join("");
  return answer;
}
console.log(solution("ksekkset"));

function solution1(s) {
  let answer = "";
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution1("ksekkset"));
