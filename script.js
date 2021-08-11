const scoreDisplayOne = document.querySelector("#score-display-one");
const scoreDisplayTwo = document.querySelector("#score-display-two");

const addButtonOne = document.querySelector("#add-button-one");
const addButtonTwo = document.querySelector("#add-button-two");

const minusButtonOne = document.querySelector("#minus-button-one");
const minusButtonTwo = document.querySelector("#minus-button-two");

const paddleOne = document.querySelector("#paddle-one");
const paddleTwo = document.querySelector("#paddle-two");

const gameOver = document.querySelector("#game-over");

let turn = "bottom";
let ab = false;
const switchTurn = (action, ab) => {
  if (ab) {
    if (action === "add") {
      if (
        (Number(scoreDisplayTwo.innerText) +
          Number(scoreDisplayOne.innerText)) %
          2 ===
        0
      ) {
        turn = turn === "bottom" ? "top" : "bottom";
      }
    }
    if (action === "minus") {
      if (
        (Number(scoreDisplayTwo.innerText) +
          Number(scoreDisplayOne.innerText)) %
          2 ===
        0
      ) {
        turn = turn === "bottom" ? "top" : "bottom";
      }
    }

    if (
      (Number(scoreDisplayTwo.innerText) + Number(scoreDisplayOne.innerText)) %
        2 !==
      0
    ) {
      turn = turn === "bottom" ? "top" : "bottom";
    }

    if (turn === "top") {
      paddleTwo.style.display = "none";
      paddleOne.style.display = "block";
    }
    if (turn === "bottom") {
      paddleOne.style.display = "none";
      paddleTwo.style.display = "block";
    }
    return;
  }

  if (action === "add") {
    if (
      (Number(scoreDisplayTwo.innerText) + Number(scoreDisplayOne.innerText)) %
        2 ===
      0
    ) {
      turn = turn === "bottom" ? "top" : "bottom";
    }
  }
  if (action === "minus") {
    if (
      (Number(scoreDisplayTwo.innerText) + Number(scoreDisplayOne.innerText)) %
        2 !==
      0
    ) {
      turn = turn === "bottom" ? "top" : "bottom";
    }
  }

  if (turn === "top") {
    paddleTwo.style.display = "none";
    paddleOne.style.display = "block";
  }
  if (turn === "bottom") {
    paddleOne.style.display = "none";
    paddleTwo.style.display = "block";
  }
};

const checkPoints = () => {
  if (
    Number(scoreDisplayOne.innerText) + Number(scoreDisplayTwo.innerText) ===
    20
  ) {
    ab = true;
  }

  if (
    Number(scoreDisplayOne.innerText) === 11 ||
    Number(scoreDisplayTwo.innerText) === 11
  ) {
    gameOver.style.display = "block";
  }

  if (
    Math.abs(
      Number(scoreDisplayOne.innerText) - Number(scoreDisplayTwo.innerText)
    ) === 2 &&
    Number(scoreDisplayOne.innerText) >= 10 &&
    Number(scoreDisplayTwo.innerText) >= 10
  ) {
    gameOver.style.display = "block";
  }
};

addButtonOne.addEventListener("pointerup", () => {
  scoreDisplayOne.innerText = Number(scoreDisplayOne.innerText) + 1;
  checkPoints();
  switchTurn("add", ab);
});
minusButtonOne.addEventListener("pointerup", () => {
  if (Number(scoreDisplayOne.innerText) !== 0) scoreDisplayOne.innerText--;
  switchTurn("minus", ab);
});

addButtonTwo.addEventListener("pointerup", () => {
  scoreDisplayTwo.innerText = Number(scoreDisplayTwo.innerText) + 1;
  checkPoints();
  switchTurn("add", ab);
});
minusButtonTwo.addEventListener("pointerup", () => {
  if (Number(scoreDisplayTwo.innerText) !== 0) scoreDisplayTwo.innerText--;
  switchTurn("minus", ab);
});
