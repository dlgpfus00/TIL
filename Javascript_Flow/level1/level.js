import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

//1. 계좌번호 양식과 은행명은 import 되어 js console.log에 찍어두었습니다.
//2. 은행을 드롭박스로 선택할 수 있게 해야하며 양식에 맞추어 계좌번호 12자리를 피싱하면 됩니다. 단 앞2자리와 끝 2자리를 제외한 모든 자리 **
//3. 어떠한 경우에도 HTML 하드 코딩이 되어서는 안되며 12자리가 맞지 않는다면 alert를 띄워주세요

//banklist에 있는 내용들을 selector안에 option으로 넣어야 함

const $containerBankList = document.querySelector("#bank-selector");

for (let i = 1; i < Object.keys(BANK_LIST).length; i++) {
  const $optionAdd = document.createElement("option"); //옵션 태그 추가
  $containerBankList.append($optionAdd);
  $optionAdd.innerHTML = BANK_LIST[i];
}
