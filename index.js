function signup() {
    window.location = './register.html'
  }
  
  function loginAcc() {
    username = uname.value;
    password = pswrd.value;
  
    if(uname.value == "" || pswrd.value == ""){
      alert ('Please Enter Your Details.');
    }
    else {
      if (password in localStorage) {
        passwordKey = JSON.parse(localStorage.getItem(password));
        if (password === passwordKey.password) {
          uname.value=""
          window.location = './projectpage.html'
        }
      }
      else {
        alert ('Incorrect password.')
        pswrd.value=""
      }
    }
  
  }