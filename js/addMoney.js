document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    
    const pinNumber = document.getElementById('input-pin-number').value;

    console.log(addMoney, pinNumber);
    // wrong way to verify pin
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber + addMoneyNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money.')
    }

})