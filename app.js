// ページ読み込み時フェード
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// スクロール時 navbar 背景変更
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    nav.style.background = "rgba(0,0,0,0.9)";
  } else {
    nav.style.background = "rgba(0,0,0,0.6)";
  }

});

// タレントカード hover アニメーション
const cards = document.querySelectorAll(".talent-card");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform =
      `rotateY(${(x - rect.width / 2) / 20}deg)
       rotateX(${-(y - rect.height / 2) / 20}deg)
       translateY(-10px)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "rotateY(0deg) rotateX(0deg) translateY(0px)";

  });

});