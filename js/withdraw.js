document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('user-withdraw');
    const previousWithdrawTotal = getTextElementValueById('total-withdraw');
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    
    const previousBalanceTotal = getTextElementValueById('total-balance');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    if(isNaN(newWithdrawAmount) === false){
        if(newWithdrawAmount <= previousBalanceTotal){
            setTextElementValueById('total-withdraw', newWithdrawTotal);
            setTextElementValueById('total-balance', newBalanceTotal);
        }
        else{
            alert('You do not have sufficient balance !!');
        }
    }
    else{
        alert('Please Enter withdraw amount $$$');
    }
    
})