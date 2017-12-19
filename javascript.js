console.log('working....'); 

var getCompany; 

function submetCompany() {
    getCompany = document.getElementById("company").value; 
    document.querySelector(".linksOne").innerHTML = "President AND " + getCompany; 
    document.querySelector(".linksTwo").innerHTML = "CEO AND " + getCompany;
}

function showHide() {
    var getList = document.getElementById("toggleUl"); 
}