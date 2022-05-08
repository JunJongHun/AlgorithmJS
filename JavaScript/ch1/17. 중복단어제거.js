function solution(s) {
  let answer;

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        s.splice(j, 1);
      }
    }
  }
  answer = s;
  return answer;
}
let str1 = ["good", "time", "good", "time", "student"];
console.log(solution(str1));

function solution1(s) {
  let answer;
  //console.log(s.indexOf("time"));
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i; //배열로 리턴
  });
  return answer;
}
let str2 = ["good", "time", "good", "time", "student"];
console.log(solution1(str2));
