function compareMaps(map1, map2) {}
function solution(s, t) {
  let answer = 0;
  let a = new Map();
  let b = new Map();
  let lp = 0;
  let rp = 0;
  let a_sum = 0;
  let b_sum = 0;
  for (const [i, v] of t) {
    if (b.has(i)) {
      b.set(i, b.get(i) + 1);
    } else b.set(i, 1);
  }

  for (const [i, v] of b) {
    b_sum += v;
  }
  //   console.log(b_sum);

  for (let rp = 0; rp < s.length; rp++) {
    if (a.has(s[rp])) {
      a.set(s[rp], a.get(s[rp]) + 1);
    } else a.set(s[rp], 1);
    // console.log(a);
    if (a.size === b.size) {
      let ok = true;
      for (const [key, value] of b) {
        if (!(value === a.get(key))) {
          ok = false;
          break;
        }
      }
      //   console.log(ok);
      if (ok) {
        answer++;
      }

      if (a.get(s[lp]) !== 1) {
        a.set(s[lp], a.get(s[lp]) - 1);
      } else {
        a.delete(s[lp]);
      }
      lp++;
    } else {
      for (const [k, v] of a) {
        a_sum += v;
      }
      //   console.log(a_sum);
      if (a_sum === b_sum) {
        if (a.get(s[lp]) !== 1) {
          a.set(s[lp], a.get(s[lp]) - 1);
        } else {
          a.delete(s[lp]);
        }
        lp++;
      }
      a_sum = 0;
    }
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
