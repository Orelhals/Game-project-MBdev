import CardFrontBack from "../../components/CardFrontBack";
import "../BoardGame/style.css";
import cards from "./Data.js";

function BoardGame() {
  const htmlCardsList = cards.map(function (card) {
    return CardFrontBack(card.icon, card.altIcon);
  });
  const $htmlCards = htmlCardsList.join("");

  return /*html*/ `
    <section class="board-game">
      ${$htmlCards}
    </section>
  `;
}

export default BoardGame;
