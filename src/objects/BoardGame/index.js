import CardFrontBack from "../../components/CardFrontBack";
import "../BoardGame/style.css";

function BoardGame(amountCards) {
  const $htmlCardFrontBack = CardFrontBack();
  const $htmlBoardGame = $htmlCardFrontBack.repeat(amountCards);

  return /*html*/ `
    <section class="board-game">
      ${$htmlBoardGame}
    </section>
  `;
}

export default BoardGame;
