function registerUser() {
    userDetails = {
      username: uname.value,
      password: pswrd.value
    }
  if(uname.value == "" || pswrd.value == ""){
    alert ('Please Enter Your Details');
  }
  else {
    if (userDetails.password in localStorage) {
      alert('User already exists');
      window.location = './index.html'
    }
    else {
      localStorage.setItem(userDetails.password, JSON.stringify(userDetails));
      window.location = './index.html'
      alert ('Resgister success')
    }
  }
    
  }