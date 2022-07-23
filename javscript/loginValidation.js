const username=document.getElementById('member_username')
const password=document.getElementById('member_password')
const loginButton=document.getElementById('member_submit')
const usernameErrorMessage=document.querySelector('[error_message_Username]')
const passwordErrorMessage=document.querySelector('[error_message_Password]') 


loginButton.addEventListener('click',()=>{
    validCheck()
    clearDisplay()
    
})


function clearDisplay(){
    password.value=''
    username.value=''

}

function validCheck(){
    if(usernameValidCheck()===true){
        if(passwordValidCheck()===true){
        //password is valid and username is valid
            alert('pass and user are avalid')
       }else{
            passwordInvalidDisplay()
       } 
    }else{
        usernameInvalidMessageDisplay()
    }
   
}



function usernameValidCheck(){
    if (username.validity.valid ){
        usernameErrorMessage.textContent=''
        usernameErrorMessage.className='errorUsername'
        return true
    }else{
        return false
    }
}

function usernameInvalidMessageDisplay(){
    if(username.validity.valueMissing){
        usernameErrorMessage.textContent='Please Enter a User Name'
    }else if (username.validity.typeMismatch){
        usernameErrorMessage.textContent='Please enter an email address as your username'
    }else if(username.validity.tooShort){
        usernameErrorMessage.textContent=`Email length should be at least ${username.minLength} characters in length`
    }
    usernameErrorMessage.className='errorUsername active'
}
    
function passwordValidCheck(){
    if(password.validity.valid){
        passwordErrorMessage.textContent=''
        passwordErrorMessage.className='errorPassword'
        return true
    }else{
        return false
    }
}

function passwordInvalidDisplay(){
    if(password.validity.valueMissing){
        passwordErrorMessage.textContent='Please enter a password'
    }else if (password.validity.patternMismatch){
        passwordErrorMessage.textContent='Please check your passwords format.'
    }
   passwordErrorMessage.className='errorPassword active'

}

