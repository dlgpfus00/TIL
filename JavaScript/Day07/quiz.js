// Math.random(); //0~0.999999999
// Math.random() * 10; //0~9.99999
// Math.random() * 10 + 1; //1~10.999999999999999999
// Math.floor(math.random() * 45 + 1); //1~45에서 floor로 버림  => 특정 범위의 랜덤 정수

// // 1번 전화번호 가리기
// // 010-1234-1234 => 010-****-1234
// const phone = "010-1234-1234";
// const result = phone.split("-");
// result[1] = "*".repeat(4);
// console.log(result.join("-"));

/* 2번 로또번호 맞추기
  랜덤 번호 생성 [1~45,1~45,1~45,1~45,1~45,1~45,1~45]
  input[?,?,?,?,?,?,?,]
  중복 ㄴㄴ
  마지막 번호 =보너스 번호
  보너스 제외 순서 상관없이 3개 일치 -> 5등
  보너스 제외 순서 상관없이 4개 ->4등
  보너스 제외 순서 상관없이 5개 ->3등
  로또번호 5개+보너스 -> 2등
  로또 번호 6개-> 1등


*/

// function generatedLottoNumber() {
//   //랜덤숫자

//   //중복을 허용하면 안된다.
//   //=> 중복 검사를 해야함. -> 현재까지 작성한 숫자의 배열을 순회.
//   const lottoArray = [];
//   for (let i = 0; lottoArray.length < 7; i++) {
//     const random = Math.floor(math.random() * 45 + 1);
//     if (!lottoArray.includes(random)) {
//       lottoArray.push(random);
//     }
//   }
// }

//요소의 길이가 명확하지 않기 때문에 while반복문을 사용
function generatedLottoNumber() {
  const lottoArray = [];
  while (lottoArray.length < 7) {
    const random = Math.floor(Math.random() * 45 + 1);
    if (!lottoArray.includes(random)) {
      lottoArray.push(random);
    }
  }
  return lottoArray;
}

const lotto = generatedLottoNumber();
console.log(lotto);

//화살표 함수도 기억하기..
const lottery = (numberArr) => {
  //요구사항
  /*
  0. numberArr와 정답의 비교
  1. 맞춘 갯수
  2. 맞춘 갯수에 따라서 다른 결과
  */

  // const winningNumberArray = [6, 18, 20, 34, 45, 32, 15]; // 정답 정하기(임의로)
  const winningNumberArray = generatedLottoNumber(); // //랜덤으로 정답 정하기
  const bonusNum = winningNumberArray.pop(); //마지막 번호 삭제 후 반환 원본배열을 바꿈

  let winningCount = 0;
  //사용자가 랜덤으로 작성한(인자로 전달한) 로또 번호 중 각 번호가 정답 번호에 포함되어있는지 있으면 ++
  for (let num of numberArr) {
    if (winningNumberArray.includes(num)) {
      winningCount++;
    }
  }
  let bonusFlg = false;
  if (numberArr.includes(bonusNum)) {
    bonusFlg = true; //보너스 문제 맞츔
  }
  let rank;
  switch (winningCount) {
    //...
    case 6:
      if (bonusFlg) {
        rank = 2;
      } else rank = 1;
      break;

    case 5:
      rank = 3;
      break;

    case 4:
      rank = 4;
      break;
    case 3:
      rank = 5;
      break;

    default:
      rank = "미당첨";
  }
  console.log(rank);
  // console.log(winningCount);
};
lottery(lotto);
// 3번 로또 여러장 구매해서 맞추기
