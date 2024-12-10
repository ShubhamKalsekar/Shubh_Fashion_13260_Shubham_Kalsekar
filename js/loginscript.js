
// JQ


var InvalidBorder="2px solid red";
var validBorder="2px solid green";
var emailNode=$("#loginEmail")
var passwordNode=$("#loginPassword")

emailNode.on("keyup",()=>EmailValidate())

passwordNode.on("keyup",()=>PasswordValidate())

loginForm.on("submit",()=>allvalidation())
function EmailValidate(){
    var email = $("#loginEmail").val();
        
    

        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            $("#loginError").text('Please enter a valid email.');
            emailNode.css("border",InvalidBorder);
            
            return false

        } else {
            $("#loginError").text('');
            emailNode.css("border",validBorder);
            return true

        }
        
}

function PasswordValidate(){
    var password = $("#loginPassword").val();
    if (password.length < 6) {
        $("#passwordError").text('Password must be at least 6 characters long.');
        passwordNode.css("border",InvalidBorder);
    
        return false
    } else {
        $("#passwordError").text('');
        passwordNode.css("border",validBorder);
        return true
    }
}
function allvalidation(){
    const state1 =EmailValidate();
    const state2 =PasswordValidate();

    const defaultEmail = "xyz@gmail.com";
    const defaultPassword = "password123";

    var enteredEmail = $("#loginEmail").val();
    var enteredPassword = $("#loginPassword").val();

    if(state1 && state2 && enteredEmail === defaultEmail && enteredPassword === defaultPassword  ){
        // window.alert("Login successful! Redirecting to home page.")
        window.location.href = "./index.html";
        return true 
    }
    else{
        window.alert("Invalid email or password!");
        return false
    }
}
