const text = "Do your best and let God do the rest.";

let index = 0;

function writeText(){
    document.body.innerText = text.slice(0, index);
    
    index++;

    if(index > text.length){
         index = 0;
    }
}

setInterval(writeText, 100);