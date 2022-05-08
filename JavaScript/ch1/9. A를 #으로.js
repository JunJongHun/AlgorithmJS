function solution1(s) {
  let answer = "";
  answer = s.replace(/A/g, "#");
  return answer;
}
let str1 = "BANANA";
console.log(solution1(str1));

function solution2(s) {
  let answer = Array.from(s);
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "A") {
      answer[i] = "#";
    }
  }

  return answer.join("");
}

let str2 = "BANANA";
console.log(solution2(str2));
