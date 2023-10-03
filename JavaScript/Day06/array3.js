const generatedMockPosts = require("./moduel");
//exports된 모듈을 require(import-참조) 하는 것 변수명은 맘대로
// 모듈 -> 파일이 다른 함수, 변수, ....

//배열인지 아닌지 검사
console.log(Array.isArray([1, 2, 3]));

//length만으로 배열인지 아닌지확인 불가
//배열이 아닌 경우는 length가 없기 때문
if (Array.isArray("a")) {
} else {
}

const obj = {
  0: "a",
  1: "b",
  length: 2,
};

const arr = Array.from(obj);
console.log(arr); //[a,b]

const arr2 = Array.from({ length: 5 }); //길이가 5인 비어있는 배열 생성
console.log(arr2);
console.log(
  "================================================================="
);

const arr3 = Array.from({ length: 5 }, (el, index) => {
  return 0;
});
//길이를 5로 저장해서 index는 0~4 el은 반환값

console.log(arr3);
//여러분이 설ㄱ계한 구조에서 필요한 길이만큼 생성해야하는 배열이 있을 때 사용

console.log(
  "================================================================="
);

//Array().fill().map()

// const generatedMockPosts = (n) => {
//   //n개의 mockpost를 만들거다
//   return;
//   Array;
// };

//함수 표현식과 {}의 객체 표현식의 {}이 겹침으로서 return 생략이 불가
//이럴경우 함수 표현식 부분의 {}를 ()로 바꿔주면 return 생략 가능
//리턴하는 값이 하나의 실행문이라면 return을 생략하는게 가독성이 좋다
//그러나 리턴하는 값외에 로직이 있다면 return을 생략할 수 있음
//+ealry return에서도 return은 탈출문이기 때문에 생략 불가능, {} 생략가능

// 밑에는 도듈js 하느라 잠시 주석
// const generatedMockPosts = (n) => {
//   return Array(n)
//     .fill()
//     .map((_, i) => ({
//       // _ -> 값을 따로 정하지 않겠따
//       id: i + 1,
//       title: `title-${i + 1}`,
//       content: `content-${i + 1}`,
//       isLiked: false,
//     }));
// };

console.log(generatedMockPosts(10)); //재사용 가눙
