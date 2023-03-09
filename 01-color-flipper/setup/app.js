const colors = ["green", "red", "pink", "yellow", "gray", "blue", "purple"];
const boton = document.querySelector(".btn");
const span = document.querySelector(".color");

boton.addEventListener("click", function () {
  const random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
  span.innerHTML = colors[random];
});
