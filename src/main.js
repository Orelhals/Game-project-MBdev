import CardGame from "./components/CardGame/index";

const $root = document.querySelector("#root");
const $CardGameHtml = CardGame();

// Pra eu usar mais de uma vez um component é só somar +1... funciona como string
$root.insertAdjacentHTML("beforeend", $CardGameHtml);