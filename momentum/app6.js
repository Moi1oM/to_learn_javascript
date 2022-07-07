const title = document.querySelector("div.hello:first-child h1");
console.log(title);
title.innerText = "Hello";

title.style.color = "blue";

function handleTitleClick() {
  console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);
