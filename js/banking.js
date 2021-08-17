// function for deposit and withdraw
function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const newInputText = inputField.value;
    const newInputAmount = parseFloat(newInputText);
    //clear the deposit input field
    inputField.value = '';

    return newInputAmount;
}

//function for update deposit total
function updateTotalField(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId);
    previousTotalText = totalField.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);

    totalField.innerText = previousTotalAmount + amount;
}


//function for getCurrentBalance
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    return previousBalanceTotal;
}

//function for balance after deposit and withdraw
function updateTotalBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

//deposit section
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the total amount deposited
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        //update deposit total
        updateTotalField('deposit-total', depositAmount);
        //get the total balance after deposit
        updateTotalBalance(depositAmount, true);
    }
});


//withdraw section
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the total amount withdraw
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        //update withdraw total
        updateTotalField('withdraw-total', withdrawAmount)
        //get the total balance after withdraw
        updateTotalBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You cannot withdraw money more than what you have in your account')
    }

})