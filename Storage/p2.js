// fill the data first
//dom elements or display elements
let balanceEl = document.getElementById("balance");
let moneyPlusEl = document.getElementById("moneyPlus");
let moneyMinusEl= document.getElementById("moneyMinus");

// form elements
let formEl = document.getElementById("expenseForm");
let titleEl = document.getElementById("title");
let amountEl = document.getElementById("amount");
let submitBtn = document.getElementById("submitBtn");
//to handle update
let isEdit = false;


// list -> transactions
let listEl = document.getElementById("list");

// to read data from localstorage
function readTransactions() {
    // JSON.parse => json array into object array
    return localStorage.getItem("transactions") ?JSON.parse(localStorage.getItem("transactions")) : [] // ternary operation using local storage
}

// store the transaction list in data variable
let data = readTransactions();

// submit handler to read form submit
formEl.addEventListener("submit" , function(event) { 
    event.preventDefault(); // to avoid page refresh

    if(amountEl.value == 0 || amountEl.value == -0) {
        alert("Amount should be a proper number")
    } else {
    // form inputs
    let trData = {
        id: Math.round(Math.random() * 100000),
        title: titleEl.value,
        amount: amountEl.value
    };
    console.log(`object =`, trData);
    storeTransactions(trData);
}
})


// store transactions in local storage
function storeTransactions(val) {
    data.unshift(val);
    localStorage.setItem("transactions", JSON.stringify(data));
    alert("Transaction added successfully");
    updateBalanceEXP();
    //window.location.reload();
}


// update the balance , income and expense
function updateBalanceEXP() {
    let amounts = data.map((item,index) => {
        return Number(item.amount)
    })
    console.log(`amounts =` , amounts)
      
    // total balance
    let bal = amounts.reduce((acc,val) =>  acc + val, 0).toFixed(2);
    balanceEl.innerHTML = bal > -1  ? `&#8377;${bal}` : `&#8377;${Math.abs(bal)}`
    
    // income
    let income = amounts.filter((val) => val > 0).reduce((acc,val) =>  acc + val, 0).toFixed(2);
    moneyPlusEl.innerHTML = `&#8377;${income}`
    
    // expense
    let negVal = amounts.filter((val) => val < 0)
    let expense = negVal.reduce((acc,val) => acc + val, 0) * -1
    moneyMinusEl.innerHTML = `&#8377;${expense.toFixed(2)}`
}

// to edit transaction
updateBalanceEXP();
// edit
function editItem(id) {
    let itemVal = data.find((item) => item.id === id)
    //console.log(`edit =`,itemVal)
    titleEl.value = itemVal.title
    amountEl.value = itemVal.amount
    isEdit = true;
    submitBtn.innerText = "Update"
}
//delete
function deleteTransaction(id) {
    //console.log(`id =`, id)
    if(confirm("Are you sure to delete this transaction ?")) {
        // read the index position of transaction
        let itemIndex = data.findIndex((item) => item.id === id)
        //console.log(`item Index =`, itemIndex)
        //delete
        data.splice(itemIndex,1)
        // store post delete data
        localStorage.setItem("transactions", JSON.stringify(data));
        alert("Transaction deleted successfully");
        window.location.reload()
    }
}

// to print all transactions
function printTransactions(val) {
    val.forEach((item) => {
        listEl.innerHTML += `<li class="${item.amount < 0 ? `expense` : `income`}">
        <div class="leftItem">
        <span class="txt"> ${item.title}</span>
        <span class="price">  &#8377; ${item.amount}</span>
        </div>
        <div class="rightItem">
        <span onclick="editItem(${item.id})" class="btn edit"> 
        <i class="fa-solid fa-pen-to-square"></i>
        </span>
        <span onclick="deleteTransaction(${item.id})" class="btn delete" >
        <i class="fa-solid fa-trash"></i>
        </span>
        </div>
        </li>`
    })
}
printTransactions(data)