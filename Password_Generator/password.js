let stringValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generatePassword()
{
   var passwordLength =  document.getElementById("passwordLength").value;4
   var newPassword = "";
   for (var i = 0; i < passwordLength; i++)
   {
        newPassword += stringValue[Math.floor(Math.random()*stringValue.length)]
   }
   document.getElementById("passwordSlot").value = newPassword;
}