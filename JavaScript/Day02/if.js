let num = 5;
let answer;

if (num > 0) {
  answer = "양수";
} else {
  answer = "음수";
}

console.log(answer);

if (num > 0) {
  answer = "양수";
} else if (num < 0) {
  answer = "음수";
} else {
  answer = "0";
}
