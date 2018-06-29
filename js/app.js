// Classes
class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.budgetLeft = this.budget;
  }
}

// Everything related to HTML
class HTML {
  // Inserts the budget when the user submits it
  insertBudget(amount) {
    budgetTotal.innerHTML = `${amount.budget}`;
    budgetLeft.innerHTML = `${amount.budget}`;
  }
  // Display a message (correct or invalid)
  printMessage(message, className) {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('text-center', 'alert', className);
    messageWrapper.appendChild(document.createTextNode(message));
    // Insert into HTML
    document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);
    // Clear the error
    setTimeout(function() {
      messageWrapper.remove();
    }, 2500);
  }
}
// Variables
const addExpenseForm = document.querySelector('#add-expense');
const budgetTotal = document.querySelector('span#total');
const budgetLeft = document.querySelector('span#left');

const html = new HTML();
let budget;
let userBudget;


// Event listeners
function eventListeners () {
  // App init
  document.addEventListener('DOMContentLoaded', function () {
    // Ask the visitor the weekly budget
    userBudget = prompt('What\'s your budget for this week?');
    // Validate the userBudget
    if(userBudget === null || userBudget === '' || userBudget === '0'){
      window.location.reload();
    } else {
      // Budget is valid then instanciate the budget class
      budget = new Budget(userBudget);
      // Instanciate HTML class
      html.insertBudget(budget);
    }
  })
  // When a new expense is added
  addExpenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Read the input values
    const expenseName = document.querySelector('#expense').value;
    const amount = document.querySelector('#amount').value;

    if(expenseName === '' || amount === '') {
      html.printMessage('All the fields are mandatory', 'alert-danger');
    } else {
          console.log('correct');
    }
  });
}





























// Init app
eventListeners();
