


function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
  }


function styleChange(){
    
    let  bred = document.getElementById("bor").value;
    let bgreen = document.getElementById("bog").value;
   let  bblue = document.getElementById("bob").value;
    let kred = document.getElementById("bkr").value;
   let  kgreen = document.getElementById("bkg").value;
   let  kblue = document.getElementById("bkb").value;
   let  width = document.getElementById("wid").value;
   let  f = document.getElementById("texts");
    f.style.borderColor = rgb(bred, bgreen, bblue);
    f.style.borderWidth = width + "px";
    f.style.backgroundColor = rgb(kred, kgreen, kblue);

}