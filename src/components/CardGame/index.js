import "../CardGame/style.css";

function CardGame(icon = "alura-pixel", alt = "logo da alura") {
  return /*html*/ `
    <article class="card-game">
      <img src="src/images/${icon}.png" alt="${alt}" />  
    </article>
  `;
}

export default CardGame;
