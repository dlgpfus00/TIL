//선언부 호이스팅 -> 평가 과정에서 먼저 수집
console.log(a); //undefined
var a = 5;
console.log(a); //5

// console.log(b);  --error
let b = 3;
console.log(b); //3

let c = 5;
console.log(C); //5
c = 7;
console.log(c); //7

const d = 3;
console.log(d); //3
d = 5;
console.log(d);

//중복과 재할당이 안되는 것이 헷갈린다
//선언과 할당을 명확히 구분
//중복 선언 let c=5, let c=7
//재할당 let c=5, c-7
