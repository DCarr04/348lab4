function compare(){
    var input1 = document.getElementById("password1");
    var input2 = document.getElementById("password2");
    if(input1.value == input2.value){
        alert("Congratulations, Passwords Match!!");
    }
    else{
        alert("DIRE, Passwords Do NOT Match...");
    }
}

function print_To_Console(){
    
    console.log(input1.value);
    console.log(input2.value);
}