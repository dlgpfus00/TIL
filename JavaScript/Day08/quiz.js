/*
1. 구현이랑 설계를 해야한다, 한국어로 먼저 설명하 듯이, 구글링이 가능하도록(직관적으로 구글링 안됨)
  ex) 자바스크립트 번호 가리기 (x) 배열에서 특정 구간 제거하고 다른 요소 대체 등등(o)

2. 출력 값을 통해 입력 값을 예상 
 */

/*
output - 1등, 2등, 3등,4등,5등,미당첨 -> 경우에 따라서 console.log
                                        ------------ 특정 조건에 따라 다르다 (분기점)
         맞춘 숫자의 갯수
         정답, 사용자 입력 값
         로또 7자리 -----------숫자가 들어간 길이가 7인 배열
         보너스 숫자 - 마지막 자리 

input - 정답, 입력 값 ----------> [?,?,?,?,?,?,?] 
                                 ---------------- 수동, 자동 (문제에 따라 알아서)
                                                        ------- 랜덤 생성

배열에 겹치지 않는 1~45의 랜덤 숫자로 이루어진 요소 
[1~45,1~45,1~45,1~45,1~45,1~45,1~45]                                                        

#1. 길이가 7인 배열을 생성 or 빈 배열을 생성 
#2. 1~45 랜덤 숫자 생성 
#3. 배열을 순회하여 길이가 7일떄까지 반복 (로또7자리이기 때문에)
#4. 똑같은 번호가 배열에 포함되어 있을 때는 포함시키지 않는다=> 중복된 요소를 허용하지 않는다 


 */

function generatedLottoNumber() {
  const lottoNumbers = [];
  // 조건을 사용한 반복문 => for, while
  // for(;lottoNumbers.length<7;){
  //   //초기식과 증감식은 생략 가능
  // }

  //new Set()-이라는 자료구조가 나올 것임 중복된 구조를 허용하지 않음
  while (lottoNumbers.length < 7) {
    //1~45의 랜덤 생성
    const randomNumber = Math.floor(Math.random() * 45 + 1);

    if (!lottoNumbers.includes(randomNumber)) {
      lottoNumbers.push(randomNumber);
    }
  }

  return lottoNumbers;
}

//위에서 생성된 것들이 들어감
function lottery(userNumbers) {
  let rank;
  let winningCount = 0;
  // let winningNumberArray = generatedLottoNumber();
  let winningNumberArray = [2, 3, 45, 13, 14, 31, 35];
  let bonusNumber = userNumbers.pop(); //pop은 원본배열의 마지막 제거 반환값 -> 제거한 값
  /*
  [?,?,?,?,?,?,?]-userNumbers
  winningNumberArray
  userNumbers의 각 요소가 winningNumberArray에 포함되어 있는지 확인 
  배열의 요소가 다른 배열의 요소에 포함되어 있는지 

  순회 -> forEach,map,filter(map,filter은 순회는 하지만, 새롤운 배열은 피룡하지 않읗ㅁ 따라서 고차함수 안써도 가능),for of
  포함되어있는지 검사 -> includes
   */

  // reduce ->빠르지만 가독성 안좋음
  // userNumbers.reduce((sum,el)=>{
  //   if(winningNumberArray.includes(el)){
  //     sum+
  //   }

  //   },0)

  for (let number of userNumbers) {
    if (winningNumberArray.includes(number)) {
      winningCount++;
    }
  }

  switch (winningCount) {
    case 6:
      rank = 1;
      break;
    case 5:
      if (winningNumberArray.includes(bonusNumber)) {
        rank = 2;
      } else rank = 3;
      break;
    case 4:
      rank = 4;
      break;
    case 3:
      rank = 5;

    default:
      rank = "미당첨";
      break;
  }

  return rank;
}

const userNumbers = generatedLottoNumber();
lottery(userNumbers);

module.exports = {
  lottery,
  generatedLottoNumber,
};
