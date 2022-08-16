import PlayerScore from "../../components/PlayerScore";

function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${PlayerScore("Player1")}
      ${PlayerScore("Player2")}
    </header>
  `;
}

export default ScoreBoard;
