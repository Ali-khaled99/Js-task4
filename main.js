let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput")
let nameInput = document.getElementById("nameInput")
let signInEmail = document.getElementById("signInEmail")
let signInPassword = document.getElementById("signInPassword")
let usersList = [];
let baseURL = ''



if(localStorage.getItem("users") != null){
    usersList = JSON.parse(localStorage.getItem("users"))
}


let userName = localStorage.getItem("Username")
if(userName){
    document.getElementById("username").innerHTML = "Welcome " + userName
}

function isEmpty(){
    if(nameInput.value == "" ||emailInput.value == "" ||passwordInput.value == "" ){
        return true
    }
}

function emailExist(){
    for(let i = 0 ; i<usersList.length;i++){
        if(usersList[i].userEmail == emailInput.value){
            return true
        }
    }
}

function signUpUser(){

    if(isEmpty() == true){
        document.getElementById("exist").innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return true
    }
        let user = {
            userName : nameInput.value,
            userEmail : emailInput.value,
            userPassword : passwordInput.value
        }

        if(usersList.length == 0){
            usersList.push(user)
            localStorage.setItem("users" , JSON.stringify(usersList))
            document.getElementById("exist").innerHTML = '<span class="text-success m-3">Success</span>'
            return true
        }
        
        if(emailExist() == true){
            document.getElementById("exist").innerHTML = '<span class="text-danger m-3">Email already exists</span>'
        }else{
            usersList.push(user)
            localStorage.setItem('users', JSON.stringify(usersList))
            document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
}
}


function loginEmpty(){
    if(signInEmail.value == "" || signInPassword.value == "" ){
        return true
    }else{
        return false
    }
}

function logIn(){
    if(loginEmpty() == true){
        document.getElementById("error").innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return true
    }
    var email = signInEmail.value
    var password = signInPassword.value

    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].userEmail == email && usersList[i].userPassword == password) {
            localStorage.setItem('Username', usersList[i].userName)
            if (baseURL == '/') {
                location.replace('https://' + location.hostname + '/loggedin.html')
            } else {
                location.replace(baseURL + '/loggedin.html')
            }
        } else {
            document.getElementById('error').innerHTML = '<span class="m-3 text-danger">invalid email or password</span>'
        }
    }

}



