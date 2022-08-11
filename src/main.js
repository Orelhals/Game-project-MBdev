import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import CardGame from "./components/CardGame/index";
import PlayerScore from "./components/PlayerScore/index";

const $score = document.querySelector("#score");
const $cards = document.querySelector("#cards");
const $CardGameHtml = CardGame() + CardGame() + CardGame();
const $PlayerScoreHtml = PlayerScore(1) + PlayerScore(2);

// Pra eu usar mais de uma vez um component é só somar +1... funciona como string
$cards.insertAdjacentHTML("beforeend", $CardGameHtml + $CardGameHtml);
$score.insertAdjacentHTML("afterbegin", $PlayerScoreHtml);

// eventos
const turnCard = document.querySelectorAll(".card-game");
console.log(turnCard);
