//로또 당첨 함수를 quiz2로 import, require(참조)하여
//원하는 갯수 만큼 로또 7자리 번호를 생성하고 등수 맞추기
//다차원배열, 순회

const lottoService = require("./quiz");

//배열 생성
const generatedLottoNumberArray = (count) => {
  return Array.from({ length: count }, () =>
    lottoService.generatedLottoNumber()
  ); //배열의 length를 count만큼 늘리고 데이터는 gemeratedLoottonumber만큼
  //count에 넣은 숫자만큼 빈 배열이 만들어지며,
  //그 배열 안에 로또 서비스로 생성한 값을 넣을 것
  /*
  비어있는 count 객수의 요소를 갖는 배열을 생성 
   */
  //만약 count=5
  //[?,?,?,?,?]=>[[generatedLottoNumber],[generatedLottoNumber],[],[],[]]
};

const userNumbersArray = generatedLottoNumberArray(5);
for (let userNumbers of userNumbersArray) {
  const rank = lottoService.lottery(userNumbers);
  console.log(rank);
}
