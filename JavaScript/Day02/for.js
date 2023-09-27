for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(`현재숫자는 ${i + 1}입니다.`);
}

//i <10 false
//i=10 -> false, i=9: -> 0~9 10번실행
//10번 반복

//중첩
for (let i = 1; i < 4; i++) {
  //1,2,3
  for (let j = 1; j < 10; j++) {
    console.log(`${i}학년${j}반`);
  }
}
