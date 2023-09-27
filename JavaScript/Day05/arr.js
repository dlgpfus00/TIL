const arr = ["이헤련", "짱구", "마이"];
arr.push("해피캣");
console.log(arr); // ["이헤련", "짱구", "마이","해피켓"];
arr.pop();
console.log(arr); //["이헤련", "짱구", "마이"];
arr.unshift("쿠로미");
console.log(arr);
arr.shift();
console.log(arr);

if (!arr.includes("쿠로미")) {
  //만약에 arr에 쿠로미가 없으면 실행하는 구문
  arr.push("쿠로미");
}

console.log(arr);
console.log(arr.indexOf("마이")); //몇번 인덱스인지 확인
console.log(arr.indexOf("짝귀")); //없으면 -1
if (arr.indexOf("쿠로미") < 0) {
  arr.push("쿠로미");
}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = arr1.concat(arr2); //원래의 값이 없어지는게 아닌 arr3에 합쳐짐
console.log(arr3);

//객체의 반환값이 배열이다
//slice, splice, split,join

const apart = ["짱구", "오수", "신혼부부", "훈이", "스폰지밥", "징징이"];
//apart.slice(start,end)
//start-> 몇번째 인덱스 end -> 인덱스 직전까지 자름
const arr4 = apart.slice(3, 5);
//end는 생략이 가능하며 end가 없을경우 마지막까지 모두 가지고 온다
console.log(arr4);

const arr5 = apart.slice(-3, -1);

console.log(arr5);

//원본배열에서 특정구간을 제거할때
// apart.splice(start,count,item)
apart.splice(3, 2); //(index,숫자,대체아이템)
console.log(apart);

//로켓펀치 -> 채용공고

const phone = "010-1234-5678";

phone.split(""); // ['0','1'....]

const splitphone = phone.split("-"); //['010','1234'...]

console.log(splitphone); //배열로 나타남

const hashedphone = splitphone[0] + "****" + splitphone[2];
console.log(hashedphone);

// splitphone[1] = "****"; //['010','****','5678']
console.log(splitphone.join("-")); //010-****-5678

// split() -> ()안에 들어간 요소를 기준으로 자름 -> 배열화
// join()-> ()안에 들어간 요소를 배열의 요소 사이에 넣는다 -> 문자열화
