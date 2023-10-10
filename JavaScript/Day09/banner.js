/*
banner의 next btn을 누르면 index값에 따라
해당하는 banner, opactiy=0
prev button을 누르면 index -1
*/

//shade
let shadeBannerIndex = 0; //next => +1, pre=> -1
const $shadeBanner = document.querySelectorAll("#shade-banner > ul> li");
const $shadeBannerPrevBtn = document.querySelector(".shade-prev-btn");
const $shadeBannerNextBtn = document.querySelector(".shade-next-btn");

const renderShadeBanner = () => {
  $shadeBanner.forEach((banner, index) => {
    //console.log(banner, index);
    if (index === shadeBannerIndex) {
      banner.style.opacity = 1;
    } else {
      banner.style.opacity = 0;
    } //반복문을 돌렸는데, shadebanenrindex와 같으면 보여주고 아니면 보여주지마 !
  });
};

const prevShadePrevBtn = () => {
  //현재 인덱스의 이전 인덱스를 제외하고는 다 opacity=0
  //현재 인덱스는 opacity=1

  if (shadeBannerIndex <= 0) {
    shadeBannerIndex = $shadeBanner.length - 1;
  } else shadeBannerIndex--;

  renderShadeBanner();
};

const nextShadeBtn = () => {
  if (shadeBannerIndex >= $shadeBanner.length - 1) {
    shadeBannerIndex = 0;
  } else shadeBannerIndex++;
  renderShadeBanner();
};

$shadeBannerNextBtn.addEventListener("click", nextShadeBtn);

$shadeBannerPrevBtn.addEventListener("click", prevShadePrevBtn);

//=====================================================================================

//slide
let slideBannerIndex = 0;
const $slideBanner = document.querySelector("#slide-banner >ul");
//모든 banner를 움직이기 위해 상위 요소인 ul을 움직인다
const $slideBannerItem = document.querySelectorAll("#slide-banner > ul> li");
//마지막 index를 알기위해 선언
const $slideBannerNextBtn = document.querySelector(".slide-next-btn");
const $slideBannerPrevBtn = document.querySelector(".slide-prev-btn");

const slideBannerWidth = $slideBanner.clientWidth;

const prevSlideBanner = () => {
  if (slideBannerIndex <= 0) {
    slideBannerIndex = $slideBannerItem.length - 1;
  } else slideBannerIndex--;
  //console.log(slideBannerWidth);
  $slideBanner.style.transform = `translateX(-${
    slideBannerWidth * slideBannerIndex
  }px)`;

  //index를 뺴는 이유는 한 칸 움직인 상태에서 또 움직이려고 할 때 처음 이동의 2배를 움직여야함
};

const nextSlideBanner = () => {
  if (slideBannerIndex >= $slideBannerItem.length - 1) {
    slideBannerIndex = 0;
  } else slideBannerIndex++;

  $slideBanner.style.transform = `translateX(-${
    slideBannerWidth * slideBannerIndex
  }px)`;
};

$slideBannerPrevBtn.addEventListener("click", prevSlideBanner);
$slideBannerNextBtn.addEventListener("click", nextSlideBanner);
