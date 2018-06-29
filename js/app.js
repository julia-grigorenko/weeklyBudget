// Classes


// Variables
const addExpenseForm = document.querySelector('#add-expense');


// Event listeners
function eventListeners () {
  addExpenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
  })
}









// Init app
eventListeners();
