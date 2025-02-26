function compare(){
    if(input1.value == input1.value){
        alert("Congratulations, Passwords Match!!");
    }
    else{
        alert("DIRE, Passwords Do NOT Match...");
    }
}

function get_Input(){
    var input1 = document.getElementById("password1");
    var input2 = document.getElementById("password2");
    console.log(input1.value);
    console.log(input2.value);
}