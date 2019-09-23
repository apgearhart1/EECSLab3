let index = 1;

function next(){
    
    index++;
    if(index == 6){
        index = 1;
    }
    var img = document.getElementById("image");
    img.src="img/pic" + index + ".jpg";
}

function prev(){
    index--;
    if(index == 0){
        index = 5;
    }
    var img = document.getElementById("image");
    img.src="img/pic" + index + ".jpg";
}