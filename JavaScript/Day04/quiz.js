/*   
자판기라는 함수를 정의  
자판기는 처음에 실행되었을 때 자판기가 가동되었습니다 출력  

잔돈이 0원이면 음료수 명을 출력
잔돈이 있으면 음료수 명과 잔돈을 함께 출력

단, 없는 메뉴를 선택하면 존재하지 않는 상품입니다.
만약 투입금액이 선택한 음료수 값보다 적을 경우 금액이 부족합니다 출력

최소금액보다 적은 금액을 투s입했을 떄는 금액을 잘못 투입하셨습니다. 금액 반환 출력

함수의 인자는 투입 금액(coin) 상품명 (product)  

메뉴
솔의눈 300원
비타500 500원
콜라 1000원

*/

const menu = {
  솔의눈: 300,
  비타500: 500,
  콜라: 1000,
};

function machine(coin, product) {
  console.log("자판기가 가동되었습니다.");
  const price = menu[product]; //가격 넣기
  const charge = coin - price;
  if (!price) {
    //price가 undefined 일때
    console.log("존재하지 않는 상품입니다.");
  }

  if (coin < price) {
    console.log("금액이 부족합니다.");
  }
  if (coin < 300) {
    console.log("금액을 잘못 투입하셨습니다.", coin);
  }

  if (charge === 0) {
    console.log(product);
  }

  console.log(product, charge);
}
machine(500, "솔의눈");
