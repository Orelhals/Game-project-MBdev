import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import ScoreBoard from "./objects/ScoreBoard";
import BoardGame from "./objects/BoardGame";

/*
const $CardGameHtml = CardGame() + CardGame() + CardGame();
const $cards = document.querySelector("#cards");
// Pra eu usar mais de uma vez um component é só somar +1... funciona como string
$cards.insertAdjacentHTML("beforeend", $CardGameHtml + $CardGameHtml);
*/

/*
const $CardFrontBack = CardFrontBack();
const $cards = document.querySelector("#cards");
$cards.insertAdjacentHTML("beforeend", $CardFrontBack);
*/

const $cards = document.querySelector("#root");
$cards.insertAdjacentHTML(
  "beforeend",
  `
    ${ScoreBoard()}
    ${BoardGame(2)}
  `
);
