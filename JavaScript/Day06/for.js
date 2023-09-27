const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]);
}

arr.forEach((el, index, origin) => {
  console.log(el, index, origin);
});

//순서 보장, 모든 요소를 순회, index를 사용할 수 있음

for (let el of arr) {
  console.log(el); //0,1,2,3
}
//순서 보장 X, 모든 요소 순회, 요소의 값만 가지고 올 수 있음

const hyelyeon = {
  age: 20,
  height: 180,
};

for (let key in hyelyeon) {
  console.log(key);
  console.log(hyelyeon[key]);
}
//age 20 height 180
//객체를 반복, 순서가 보장되지는 않음

Object.keys(hyelyeon);
Object.values(hyelyeon);
Object.entries(hyelyeon); // [[age,20],[height,19]]

for (let [key, values] of Object.entries(hyelyeon)) {
  console.log(key, values);
}
