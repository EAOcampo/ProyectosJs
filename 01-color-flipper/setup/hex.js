const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const boton = document.querySelector("#btn");
const span = document.querySelector(".color");

boton.addEventListener("click", function () {
  let hexa = "#";
  for (let i = 0; i < 6; i++) {
    hexa += hex[randomNumber()];
  }
  document.body.style.backgroundColor = hexa;
  span.innerHTML = hexa;
});

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
