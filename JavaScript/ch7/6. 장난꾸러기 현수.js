function solution(arr) {
  let answer = [];

  let hunsu;
  let zzakgung;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      hunsu = i;
      answer.push(++hunsu);
      break;
    }
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] <= arr[i - 1]) {
      zzakgung = i;
      answer.push(++zzakgung);
      break;
    }
  }

  return answer;
}

let arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr1));

let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
