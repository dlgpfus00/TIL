function addNumberPrint(num1, num2) {
  let result = num1 + num2;
  console.log(result);
  //인자로 전달 받은 두 수를 더하고 콘솔로 출력하는 함수
}

const a = addNumberPrint(3, 5); //8
console.log(a); //a

function addNum(num1, num2) {
  return num1 + num2;
}

addNum(2, 3);

const b = addNum(2, 3);
console.log(b);
