//properties(props)

//부모 컨포넌트에서 자식 컨포넌트로 전달된 속성값, 컨포넌트 함수의 인자로 전달
const SignForm = ({ signFormState }) => {
  return <div>{props.signFormState}</div>;
};

export default SignForm;
