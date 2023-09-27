let mont = 2;
//switch는 값, if는 t/f의 조건식
//switch는 분기가 많이 생성되는 것이 아니라면 자주 사용하지 않음. 가독성이 좋지 않기 때문에
//단 분기가 여러개인 경우 if보다는 switch가 가독성이 더 좋은 편
switch (mont) {
  case 1:
    console.log("1월");
    break;
  //탈출문, 대신하여 return을 사용할 수도 있음, 그러나 단순 종료를 위해서는 break를 사용

  case 2:
    console.log("2월");
    break;
  case 3:
    console.log("3월");
    break;
  case 4:
    console.log("4월");
    break;
  default:
    console.log("잘못입력하셨습니다.");
    break;
}
