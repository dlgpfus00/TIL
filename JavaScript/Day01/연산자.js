5 == 5; //T
5 == "5"; //T
5 == 8; //F
false == "0"; //t
false == "false"; //F "false는 진짜 문자열"
false == undefined; //F
false == null; //F false는 숫자 0 , null, undefined는 값이 없음
//비어있는 상태와 false라는 값이 존재하는 상태는 엄연히 다른 것
null == undefined; //T
null === undefined; // false -> null과 undefined는 값은 값지만, 데이터 타입이 다르다

// null, undefined는 비어있다. (값은 같음) 데이터 형태는 똑같음

5 === 5; //t
5 === "5"; //F

NaN === NaN; //false
//NaN은 JS에서 유일하게 자기 자신과 일치하지 않는 값
//특정한 값이 NaN인지 판단하기 위해 비교를 했을 것
//기본으로 내장되어있는 isNaN 함수를 통해 NaN유무를 판단할 수 있다
//ex)  isNaN(a)

0 === -0; //T

//달라? 완벽히 달라? 응 달라 T, 아니 똑같아 F
5 != 8; //T
5 != 5; //F
5 != "5"; //F
5 !== 8; //T
5 !== 5; //F
5 != "5"; //T

//실무에서는 일치비교와 불일치 비교만을 사용하고
//완벽히 일치한지와 다른지를 보기위해서만 사용, 값이 같고 다르고 확인하는 용도

// 값이 다른지 확인 => !==
// 값이 같은지 확인 -> ===
