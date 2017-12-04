console.log('working....'); 


function submitText() {
    var submitText = document.getElementById('inputText').value;
    var toArr = submitText.split(''); 
    
    for(var i = 0; i < toArr.length / 2; i++) {
        var tempVar = toArr[i]; 
        toArr[i] = toArr[toArr.length - 1 - i]; 
        toArr[toArr.length - 1 - i] = tempVar; 
    } 
    var answer = toArr.join(''); 
   document.getElementById('innterText').innerHTML = answer; 
}


