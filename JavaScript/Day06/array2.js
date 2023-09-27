const menus = [
  {
    title: "상품목록",
    istoggled: false,
  },
  {
    title: "회원목록",
    istoggled: true,
  },
  {
    title: "결제관리",
    istoggled: false,
  },
];

const everyToggledMenus = menus.every((menu) => menu.istoggled); //모든 메뉴가 true??
console.log(everyToggledMenus); //false

const someToggledMenus = menus.some((menu) => menu.istoggled);
console.log(someToggledMenus); //true

const sortArr = [5, 4, 1, 2, 3];
sortArr.sort();
console.log(sortArr);

const sortArr2 = [1, 10, 2, 3, 5];
sortArr2.sort();
console.log(sortArr2);
//유니코드로 계산 -전 세계의 모든 문자와 숫자에 대해 코드를 기준하는 일종의 국제 표중

sortArr2.sort((a, b) => a - b); //a와 b의 값을 비교하려고 빼는것 (?)
console.log(sortArr2);
