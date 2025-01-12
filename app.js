const btns = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".play-again");
const winner = document.querySelector(".winner-text");
const restart =document.querySelector(".reset-btn");
console.log(btns);
let current = "O";
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.innerHTML = current;
    btn.style.fontSize = "50px";
    btn.disabled = true;
    current = current === "O" ? "X" : "O";
    let overBtn = checkWinner(btns);

    if (overBtn === "Draw") {
      winner.innerHTML = "Game Over";
      resetBtn.style.display = "block";
    } else {
      winner.innerHTML = overBtn;
    }
  });
});
resetBtn.addEventListener("click", () => {
  reset(btns);
  resetBtn.style.display = "none";
  
  winner.innerHTML = "";
});
restart.addEventListener("click",()=>{
  reset(btns);
  resetBtn.style.display = "none";
  winner.innerHTML = "";
})
const reset = (btns) => {
  btns.forEach((btn) => {
    btn.innerHTML = "";
    btn.style.backgroundColor = "lightcoral";
    btn.disabled = false;
  });
};
const checkWinner = (btns) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      btns[a].innerHTML &&
      btns[a].innerHTML === btns[b].innerHTML &&
      btns[a].innerHTML === btns[c].innerHTML
    ) {
      resetBtn.style.display = "block";
      winner.style.fontSize = "50px";
      btns.forEach((btn) => {
        btn.disabled = true;
      });
      // Apply debounce animation
      btns[a].style.backgroundColor= "green";
      btns[b].style.backgroundColor= "green";
      btns[c].style.backgroundColor= "green";
      return `Winner is ${btns[a].innerHTML}`;
    }
  }

  if (
    [...btns].every((btn) => btn.innerHTML === "X" || btn.innerHTML === "O")
  ) {
    return "Draw";
  }
  return null;
};

