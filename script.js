

/*// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
*/

generateBtn.addEventListener("click", writePassword);

var inputLength = document.querySelector('input[name="length"]');
        var smallLetter = document.querySelector('input[name="lowercase"]');
        var bigLetter = document.querySelector('input[name="uppercase"]');
        var num = document.querySelector('input[name="number"]');
        var sym = document.querySelector('input[name="symbol"]');
        var generate = document.querySelector('.wrapper button');
        var copy = document.getElementById("copy");
        

const passKeys = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '*;<>()[]{}#$?!^|'
};


copy.addEventListener("click", () => {
    var genPass = document.querySelector('input[type="text"]');
    if(genPass.value != "" && genPass.value != "Include any key string and define the length!"){
        genPass.select();
        document.execCommand('copy');
        alert("Password copied!");
    }
});

generate.addEventListener("click", () => {
    var length = +inputLength.value;
    var activeLower = smallLetter.checked;
    var activeUpper = bigLetter.checked;
    var activeNumber = num.checked;
    var activeSymbol = sym.checked;
    
    generatePassword(activeLower, activeUpper, activeNumber, activeSymbol, length);
    
    
});

function generatePassword(lower, upper, num, sym, length){
    let main = "";
    let finalPassword = "";
    
    const passOptions = {
        lowercase: lower,
        uppercase: upper,
        number: num,
        symbol: sym
    };
    
    for(i=0;i<Object.keys(passOptions).length;i++){
        main += (Object.values(passOptions)[i]) ? passKeys[Object.keys(passOptions)[i]] : "";
    }
    
    if(main != "" && length > 0){
        for(i=0;i<length;i++){
            finalPassword += main[Math.floor(Math.random() * main.length)];
        }
        
        document.querySelector('input[type="text"]').value = finalPassword;
        
    }else{
        document.querySelector('input[type="text"]').value = "Select any password option and specify the length";
    }
    
        
}




/*
heres some of my own code trying to make it work.
function myFunction() {
    var confirmation;
    var r = confirm("Are you ready to make a password?");
    if (r == true) {
        confirmation = ("Great!");
    } else {
        confirmation = prompt("Okay. I will be here when you are ready");
    }
/*
    var confirm = confirm();
    confirm("Are you ready to make a password?")
    if (confirm() = true) {
    return confirm("Would you like to include UPPER case letters in your password?");  
    }
    else {
        return prompt("Okay. I will be here when you are ready")
*/



/*

 for(i=0;i<length;i++){
            Password += main[Math.floor(Math.random() * main.length)];

confirm("Would you like to include Numbers in your password?");

}


/*var = confirmation;
if (confirmation = true) {
    confirm("Would you like to include lower case letters in your password?");    
} else("Okay. I will be here when you are ready ")

function myFunction {

confirm("Would you like to include lower case Letters in your password?")
confirm("Would you like to include UPPER case Letters in your password?")
confirm("Would you like to include Numbers in your password?")
confirm("Would you like to include Special Characters in your password?")
}
*/