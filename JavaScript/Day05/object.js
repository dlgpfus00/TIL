// 자바스크립트의 빌트인 객체
//object, 빌트인 객체

const hyelyeon = {
  age: 25,
  height: 100,
  hobby: "코딩",
};

//hyelyeon property
console.log(Object.values(hyelyeon));
console.log(Object.keys(hyelyeon));
console.log(Object.entries(hyelyeon)[0][0]);
console.log(Object.entries(hyelyeon)); //다차원 배열형태로 반환, 배열 안에 요소로 배열이 존재
