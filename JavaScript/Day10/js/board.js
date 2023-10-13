import MokcPosts from "../mock/posts.json" assert { type: "json" };
// console.log(MokcPosts);

//read(조회)
//MockPosts = 배열, 배열을 화면에 내가 원하는 UI로 그려줘야 한다.
//MockPosts(어떤 데이터), boarde-list (어디에), article(어떤 형태로)

const $boradList = document.querySelector(".board-list");
console.log("$boradList =  ", $boradList);
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

const renderPost = (post) => {
  // const posts = MokcPosts.map(
  //   (post) =>
  //     `<article class="board-card">
  //      <h3 class="flex-center">
  //      ${post.title}
  //      <button>삭제</button>
  //      </h3>
  //      <div class="flex-center"
  //      >${post.content}
  //      </div>
  //      </article>`
  // ).join(" ");
  // $boradList.innerHTML = posts;

  //삭제버튼이 string으로 들어ㅇ가있어서 이벤트 부여 못함 => 다른 방식으로 구현 하는 코드임(노드화 시켜줌)
  const $article = document.createElement("article");
  const $h3 = document.createElement("h3");
  const $deleteBtn = document.createElement("button");
  const $content = document.createElement("div");

  $h3.className = `flex-center`;
  $h3.innerHTML = post.title;
  $deleteBtn.addEventListener("click", () => console.log("삭제!!!!!!!"));
  $deleteBtn.innerText = "삭제";
  $h3.append($deleteBtn);

  console.log("여기");
  $content.className = "flex-center";
  $content.innerHTML = `${post.content}`;

  $article.className = "board-card";
  $article.append($h3);
  $article.append($content);

  $boradList.append($article);
};

for (let post of MokcPosts) {
  renderPost({
    id: post.id,
    content: post.content,
    title: post.title,
  });
}

//renderPosts(); //시작하자마자 조회 해주어야함

("====================================================================");

//Create 생성
//작성 버튼을 누르면 작성한 내용을
// 방법1. mockposts에 push로 데이터 추가한 후 다시 랜더한다 (렌더한다 => 화면에 그려준다)
//방법2. append를 활용해서 새로운 게시글을 추가한다
//작성 인풋(타이틀, 컨텐트), 작성버튼
//방법 1. mockPosts.push({}) -> render
//방법 2. {title, content} -> boardList append

const $title = document.querySelector(".title");
const $contnet = document.querySelector(".content");
const $writeBtn = document.querySelector(".write-btn");

//작성 버튼을 눌렀을 때 이벤트 1번 방법
// $writeBtn.addEventListener("click", () => {
//   //공백을 눌렀을떄 추가 방지

//   if (!$title.value.trim() || !$contnet.value.trim()) {
//     return alert("내용을 입력해주세요");
//   }
//   //mockpost에 데이터를 넣은 다음 위에 만들었던 renderPost() 활용
//   MokcPosts.push({
//     id: Math.floor(Math.random() * 1000000),
//     title: $title.value,
//     content: $contnet.value,
//   });

//   renderPosts();
//   $title.value = " "; //작성하고 input 비워주기
//   $contnet.value = " ";
// });

//작성 버튼을 눌렀을 때 이벤트 2번 방법
$writeBtn.addEventListener("click", () => {
  //공백을 눌렀을떄 추가 방지

  if (!$title.value.trim() || !$contnet.value.trim()) {
    return alert("내용을 입력해주세요");
  }

  MokcPosts.push({
    id: Math.floor(Math.random() * 1000000),
    title: $title.value,
    content: $contnet.value,
  });

  const article = document.createElement("article");
  article.className = "board-card";
  article.innerText = `
    <h3 class="flex-center">
    ${$title.value}
    <button>삭제</button>
    </h3>
    <div class="flex-center">
    ${$contnet.value}
    </div>
  `;

  $boradList.append(article);

  $title.value = " "; //작성하고 input 비워주기
  $contnet.value = " ";
});
