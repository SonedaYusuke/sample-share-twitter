const shareTwitterNG = document.querySelector(".js-share-ng");
const shareTwitterOK = document.querySelector(".js-share-ok");

/**
 * @param {string} text シェアしたいテキスト
 */
const shareURL = (text) =>
	`https://twitter.com/share?text=${encodeURIComponent(text)}`;

const TEXT = `この記事が熱い！！
↓↓↓↓↓↓↓↓
https://zenn.dev/articles/a8340aea70c769/
↑↑↑↑↑↑↑↑`;

shareTwitterNG.addEventListener("click", () => {
	window.open(shareURL(TEXT), "_blank");
});

shareTwitterOK.addEventListener("click", () => {
	window.open(shareURL(TEXT), "_blank", "noreferrer");
});
