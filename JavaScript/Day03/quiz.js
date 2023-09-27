let c = 7;
{
  let b = 5;
  console.log(b, c); // 5,7
  {
    let a = 5;
    let c = 3;
    console.log(a, b, c); //5,5,3
  }
}

///
// let c =7 ;  //전역변수

// (function (){
//   let b=5;
//   console.log(c,b)
//   ....
// })
