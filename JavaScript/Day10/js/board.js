import MokcPosts from "../mock/posts.json" assert { type: "json" };
console.log(MokcPosts);

//read(조회)
//MockPosts = 배열, 배열을 화면에 내가 원하는 UI로 그려줘야 한다.
//MockPosts(어떤 데이터), boarde-list (어디에), article(어떤 형태로)

const $boradList = document.querySelector(".board-list");
//eventList가 없는 경우

// $boradList.innerHTML = "<div>안녕하세요</div>";

//1. innerText
//$boradList.innerText = "안녕하세요";
//text를 포함하는 경우

//2. innerHTML

//$boradList.innerHTML = "<div>안녕하세요</div>";
//html을 포함하는 경우

//3. append, appendChild
//4. inserAdjacentElement

//mockPost -> [article, article, article] ->  join -> 'article arti...' -> innerHtml
//map 쓰는 이유 새로운 배열을 리턴 and 순회
const posts = MokcPosts.map(
  (post) =>
    `<article class="board-card"> <h3 class="flex-center">
     ${post.title}<button>삭제</button></h3><div class="flex-center"
     >${post.content}</div></article>`
);
