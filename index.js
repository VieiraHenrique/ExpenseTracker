// DECLARE VARIABLES
const balance = document.getElementById('balance');
const list = document.getElementById('list')
const add = document.getElementById('add');
const title = document.getElementById('title');
const amount = document.getElementById('amount');
let balanceValue = 0;

let transactions = []

// EVENT LISTENER FOR SUBMIT
add.addEventListener('click', (e)=>{
    e.preventDefault();
    
    if (title.value != '') {
        transactions.push({title: title.value, amount: parseInt(amount.value)});
    }
    displayTransactions()
    title.value = '';
    amount.value = 0;
})

function displayTransactions(){
    list.innerHTML = '';
    balanceValue = 0;
    transactions.forEach((transaction)=>{
        let newItem = document.createElement('li');
        newItem.innerHTML = `${transaction.title} : ${transaction.amount < 0 ? `<span class="negative"> ${transaction.amount}€</span>`: `<span class="positive"> ${transaction.amount}€</span>`}`;
        list.appendChild(newItem);
        balanceValue += transaction.amount;
        newItem.addEventListener('click', ()=>{
            console.log(balanceValue)
            balanceValue -= transaction.amount;
            console.log(balanceValue);
            newItem.remove();
            displayBalance();
            transactions.pop()
            
        })
        
        displayBalance();
    })
}

function displayBalance() {
    balance.innerHTML = balanceValue;
}

displayBalance();