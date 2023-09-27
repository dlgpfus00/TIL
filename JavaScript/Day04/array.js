//여러가지 값을 넣기위해 사용
//장점은 순서 보장, 객체처럼 키 값을 신경쓰지 ㅇ않아도 됨

// 똑같은 데이터가 여러개이다? => 배열
// 한 데이터의 상세내용을 보여주고싶다 => 객체
//  => 나의 정보를 설명할때

const arr = [];
console.log(arr[0]); //undefined
console.log(arr.length); //0

arr[1] = 1;
arr[3] = 3;
console.log(arr);
console.log(arr.length); //4 이유 -> 배열은 순서가 보장되어 있기 떄문에 3하면 나머지 수는 알아서 채움.empty item

//const로 선언한 것은 수정 불가능인데, 수정이 어떻게 될까?
//  -> 노트필기
