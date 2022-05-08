function solution(m, product) {
  let answer = 0;
  const len = product.length;

  // 오름차순 정렬 ( 첫번째 원소 기준 후 두번째 원소 기준 )
  const Sort = (arr) => {
    arr.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });

    return arr;
  };

  copy = Sort(product);
  copy[len - 1][0] /= 2;
  copy = Sort(product);

  // 예산보다 작아지거나 같아질 때까지
  for (const iterator of copy) {
    if (iterator[0] + iterator[1] <= m) {
      m -= iterator[0] + iterator[1];
      answer++;
    }
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
