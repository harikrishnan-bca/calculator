let outputScreen = document.getElementById("out-screem");

function display(num){
    outputScreen.value +=num;

}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(error){
        alert("invalide value")
    }

}
function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}