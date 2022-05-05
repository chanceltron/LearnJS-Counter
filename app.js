const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const incrementBtn = document.getElementById('increment');

let number = (document.getElementById('final-number').textContent = 0);

decrementBtn.addEventListener('click', () => {
  number--;
  document.getElementById('final-number').textContent = number;
});

resetBtn.addEventListener('click', () => {
  number = 0;
  document.getElementById('final-number').textContent = number;
});

incrementBtn.addEventListener('click', () => {
  number++;
  document.getElementById('final-number').textContent = number;
});

