const generatedMockPosts = (n) => {
  return Array(n)
    .fill()
    .map((_, i) => ({
      // _ -> 값을 따로 정하지 않겠따
      id: i + 1,
      title: `title-${i + 1}`,
      content: `content-${i + 1}`,
      isLiked: false,
    }));
};

//exports --> 밖으로 내보냄
module.exports = generatedMockPosts;
