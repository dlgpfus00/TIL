/* 
레시피 재료 추가하기
*/

const $form = document.querySelector("#ingredient-form");
const $inputIngredientName = document.querySelector("#input-ingredient-name");
const $inputWeight = document.querySelector("#input-weight");
const $th = document.querySelectorAll(".thead > th");
const $submitBtn = document.querySelector("#submit_button");
const $ingredientList = document.querySelector("#ingredient-list");

const $addBtn = document.querySelector("#input-all");
const $table = document.querySelector("table");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let ingredientArr = [];
//저장버튼 이벤트
$addBtn.addEventListener("click", () => {
  const $tr = document.createElement("tr");
  const inputIngredientName = $inputIngredientName.value;
  const inputWeight = $inputWeight.value;

  if (ingredientArr.includes(inputIngredientName)) {
    alert("이미 존재하는 재료입니다.");
    $inputIngredientName.value = "";
    $inputWeight.value = "";
  } else {
    ingredientArr.push(inputIngredientName);
    const $td = document.createElement("td");

    const arr = [inputIngredientName, inputWeight];

    for (let i = 0; i < $th.length - 1; i++) {
      $tr.innerHTML += `<td>${arr[i]}</td>`;
    }

    $table.append($tr);
    $tr.append($td);

    const $delBtn = document.createElement("button");
    $delBtn.className = "delete-btn";
    $delBtn.innerText = "삭제";
    $td.append($delBtn);

    $tr.className = "thead";

    $inputIngredientName.value = "";
    $inputWeight.value = "";

    $delBtn.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
      const delTarget = e.target.parentNode.parentNode.innerText;
      for (let i = 0; i <= ingredientArr.length; i++) {
        if (ingredientArr[i] === delTarget[0]) {
          ingredientArr.splice(i, 1);
        }
      }
    });
  }
});

$submitBtn.addEventListener("click", () => {});
