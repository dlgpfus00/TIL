/* 
이름: 여러분들의 성함 ----> 변수 / 상수
국어: 80점
수학: 70점
영어: ..점
탐구: ..점
평균
학점

이 네가지의 점수의 평균을 구하여
90점 이상이면 a학점
80점 이상이면 b학점
70점 이상이면 c학점
그 외 F학점

if문 사용
console.log()
OOO님의 이번학기 성적인 O학점 입니다.
// console.log에 문자열과 함께 변수를 사용하는 방법
let name = "이혜련";
let grade = "A";
console.log("이혜련님의 이번하기 성적은 A학점 입니다.");
//1 "+"
console.log(name + "님의 이번학기 성적은" + grade + "학점 입니다.");
//2 "`"
console.log(`${name}님의 이번학기 성적은 ${grade}학점 입니다`);
//3 ","
console.log(name, "님의 이번학기 성적은", grade, "학점 입니다.");
*/

let name = "이혜련";
let kor = 90;
let math = 90;
let eng = 90;
let research = 90;
let grade;
let total = (kor + math + eng + research) / 4;

// total = (kor + math + eng + research) / 4;
console.log(total);

if (total >= 90) {
  grade = "A";
} else if (total < 90 && total > 70) {
  grade = "B";
  // } else if (total > 70) {
  //   grade = "C";
} else {
  grade = "F";
}
console.log(`${name}님의 이번학기 성적은 ${grade} 입니다`);
