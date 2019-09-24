var bo, bk, f;


function onload(){
    bo = document.getElementById("bo");
    bk = document.getElementById("bk");
    f = document.getElementById("texts");
}
function borderChange(){
    if(bo.value == "red"){
        f.style.border = "thick solid red";
    }
    else if(bo.value == "blue"){
        f.style.border = "thick solid blue";
    }
    else if(bo.value == "green"){
        f.style.border = "thick solid green";
    }
    
}

function backgroundChange(){
    if(bk.value == "red"){
        f.style.backgroundColor = "red";
    }
    else if(bk.value == "blue"){
        f.style.backgroundColor = "blue";
    }
    else if(bk.value == "green"){
        f.style.backgroundColor = "green";
    }
}