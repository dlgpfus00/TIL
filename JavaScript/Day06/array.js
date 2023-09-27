const mapArr = [1, 2, 3, 4, 5];
mapArr.map((el) => el + 1); //한줄일때는 return 생략 가능
// mapArr.map((el)=>{
//   return el+1
// })

//함수의 매개변수 이름은 본인이 정해줌

const filterArr = [1, 2, 3, 4, 5, 6];
const evenArr = filterArr.filter((el) => el % 2 === 0); //[2,4,6], 필터는 조건식에 맞는 애들만 선택해서 반환

const posts = [
  {
    id: 1,
    title: "title-1",
    content: "content-1",
    isLiked: false,
  },
  {
    id: 2,
    title: "title-2",
    content: "content-2",
    isLiked: false,
  },
];

const findPost = posts.find((post) => post.id === 2);
(findPost.isLiked = true), console.log(posts);

// 특정조건에 맞는 데이터를 가지고 오고싶다 -> fillter

const deletPost = posts.filter((post) => post.id !== 1);
console.log(deletPost);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducdResult = numArr.reduce((sum, n) => {
  console.log(sum);
  return sum + n;
}, 0);

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reducdResult = numArr.reduce((sum, n) => {
//   if (n % 2 === 0) console.log(n);
//   return n;
// }, 0);

//reduce((누적값,현재 요소)=> {})
//sum의 기본 값은 첫번째 요소 (1) n의 기본 값은 다음 요소인 2부터 시작
//sum에도 기본 값을 줄 수 있음 sum에 기본값이 들어가면 sum은 기본값부터 시작, n은 첫번쨰 요소인 1부터 시작

//기본 값 개념만 먼저 이해 -> return하는 값이 다음 sum이 된다
//지금까지 return 된 값과 현재 요소의 연산 결과를 다음 sum

//sum의 기본 값이 ,n} 있으면 sum -> 기본값
//기본값 없으면
// sum-> 첫번쨰 요소 , n은 다음 요소
