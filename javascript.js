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
   document.querySelector('.innterText').innerHTML = answer; 
}

function reverseText() {
    document.getElementById('inputText').value = ''; 
    document.getElementById('inputText').placeholder = "Reverse Text";  
}


function meanMedianMode(array) {
    document.getElementById('inputText').value = ''; 
    document.getElementById('inputText').placeholder = "Mean Median Mode";  
    return {
        mean: getMean(array),
        median: getMedian(array)
        // modo: getMode
    };
}
function getMean(array) {
    var num = 0; 
    var mean = 0; 
    var mean = 0; 
    array.forEach(number => {
        num += number; 
    });
    mean = num / array.length; 
    console.log(mean); 
    return
}

function getMedian(array) {
    var median = 0; 
    for(var i = 0; i < array.length / 2; i++) {
        median = array[i]; 
    }
    console.log(median); 
}