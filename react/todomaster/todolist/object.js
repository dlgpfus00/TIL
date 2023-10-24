//비구조화 할당 === 구조분해
// 객체나 배열을 해체하여 각각의 속성 혹은 요소 하나하나를 변수로 선언

const hyelyeon = {
  age: 20,
  height: 200,
};

// const age = hyelyeon.age

//하나하나 객체의 속성을 변수로 지정하긴 힘드니까 구조를 부숴버리자

const { age: hyelyeonAge, height } = hyelyeon;
//const {}를 통해 {}안에 key를 작성하면 객체의 구조 분해 할당 가능

// const SignForm = (props)=>{
//     console.log(props.signFormState)
// }

const SignForm = ({ signFormState }) => {};

SignForm({
  signFormState: "SIGN-IN",
});
