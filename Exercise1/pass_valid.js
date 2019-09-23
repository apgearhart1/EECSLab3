var f;
var s;
function onload(){
    f = document.getElementById('1stpass');
    s = document.getElementById('2ndpass');
}

function checker(){
    if(f.value != s.value){
        alert("Passwords do not match!");
    }
    else{
        if((f.value.length<8 && s.value.length<8)){
            alert("Passwords are not long enough!");
        }
    }
}