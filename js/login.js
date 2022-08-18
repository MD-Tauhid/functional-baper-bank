
document.getElementById('btn-login').addEventListener('click', function(){
    const inputEmail = document.getElementById('user-email');
    const email = inputEmail.value;
    
    const inputPass = document.getElementById('user-pass');
    const password = inputPass.value;
    if(email === 'tauhid@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please input the correct user name or password!! hints: email=tauhid@gmail.com pass= secret')
    }
})