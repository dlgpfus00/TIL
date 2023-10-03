const str = " ";

str.charAt(4); //5
str.concat("마이멜로디"); //hello 마이멜로디
str.indexOf("e"); //1 ,뒤에 e가 또 있어도 처음 발견 기준

const date = new Date();
console.log(date);
console.log(date.getFullYear()); //8 => 0부터 ~11일이라서 8이 9월이라는 뜻
console.log(date.getMonth()); //8 => 0부터 ~11일이라서 8이 9월이라는 뜻
console.log(date.getDate());
console.log(date.getDay()); //6(0:토요일, 6:토요일)

// 주의 2023-09-23T12:21:34.893Z  html 로 입력이 불가능

//이유==> date는 객체임 9~11번ㅇ은 마우스 올리면 number라고 뜸 객체이기떄문에 html로 넣을 수 없음 따라서
//string, number로 바꿔야함

date.toString(); //문자열
date.toDateString(); //시, 분, 초를 생략  //현재 위치의 시간이 나옴
console.log(date.toString());

//내가 생성한 new Date에는 내 위치 나옴 그래서 문자열로 바꾸면 알아서 반환
console.log(date.toISOString()); //utc-0 //백엔드에 데이터 보낼 때
console.log(date.toLocaleString()); //현재 지역에 맞는 날짜와 시간으로 변환
console.log(date.toLocaleTimeString());

//날짜끼리의 연산
const thisyear = date.getFullYear(); //2023
date.setFullYear(thisyear - 1); //2023-1  //setFullyear: 년도 설정
console.log(date.getFullYear());
