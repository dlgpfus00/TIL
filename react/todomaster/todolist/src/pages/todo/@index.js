import { useParams, useSearchParams } from "react-router-dom";

function Todopage() {
  const urlParams = useParams();
  const [params, setParams] = useSearchParams();
  console.log(urlParams.todoId);
  console.log(params.get("page"));
  //http://localhost:3000/todo/3?page=2
  console.log(params.get("colors"));
  //http://localhost:3000/todo/3?page=2&colorrs=red
  //주소의 히스토리를 남기기 위해 url에 data를 기록
  // /todo -> /todo(let a=3, let a=5), 뒤로가기 누르면 초기값으로 초기화
  //초기화를 방지하고 뒤로가기를 가능하게 하려면 어디에 남겨야함 !!!!! 저장이 되어있어야 함
  //그 방법이 url에 기록
  return (
    <div>
      {/* jsx문법 안에서 html안에 {}를 사용하여 js사영 가능 */}
      {urlParams.todoId}
    </div>
  );
}
export default Todopage;
