const diceEl =  document.getElementById("dice");
const rollBtn = document.getElementById("roll-btn");
const rollHistoryEl = document.getElementById("roll-history");

const rollHistory = [];

const diceFace = ['&#9856;','&#9857;','&#9858;','&#9859;','&#9860;','&#9861;']

rollBtn.addEventListener('click', () => {
  const rollNo = Math.floor(Math.random() * 6);

  diceEl.classList.add("roll-animation");
  diceEl.innerHTML = diceFace[rollNo];

  rollHistory.push(rollNo);
  updateHistory();

  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
  },500)
})

function updateHistory(){
  rollHistoryEl.innerHTML = "";
  for(let i=0; i<rollHistory.length; i++){
    const list = document.createElement('li');
    list.innerHTML= `Roll ${i+1}: <span>${diceFace[rollHistory[i]]}</span>`;

    rollHistoryEl.appendChild(list);
  }
  

}