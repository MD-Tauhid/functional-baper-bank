// first step:
document.getElementById('btn-deposite').addEventListener('click', function(){
    const newDepositeAmount = getInputFieldValueById('user-deposite');
    const previousDepositeTotal = getTextElementValueById('total-deposite');
    const newDepositeTotal = newDepositeAmount + previousDepositeTotal;
    
    const previousBalanceTotal = getTextElementValueById('total-balance');
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    
    if(isNaN(newDepositeAmount) === false){
        setTextElementValueById('total-deposite', newDepositeTotal);
        setTextElementValueById('total-balance', newBalanceTotal);
    }
    else{
        alert('Please Enter your deposite amount !!');
    }
})