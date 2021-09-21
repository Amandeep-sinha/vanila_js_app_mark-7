var txtInput=document.querySelector("#Input");
var txtOutput=document.querySelector("#Output");
var ok=document.querySelector("#click");
//var url=("hi"+"?text=" + txtInput.value)

function errorHandler(error){
    alert("It seems there is a glitch while connecting to the server please try again later"+"\n"+error)
    return error;
}

function clickHandler(){
    var url=("https://api.funtranslations.com/translate/minion.json"+"?text=" + txtInput.value)
    fetch(url)
        .then(response => response.json())
        .then(json => txtOutput.innerText=json.contents.translated)
        .catch(errorHandler)

        
    
    
    //txtOutput.innerText=txtInput.value;
    
}
ok.addEventListener("click", clickHandler)