console.log('working....'); 
var getCompany; 

document.getElementById("companyEnter").addEventListener('keydown', function(e) {
    if(e.keyCode == 13) {
        submetCompany(); 
    }
}); 


function submetCompany() {
    var getCompany = document.getElementById("companyEnter").value; 
    document.querySelector(".links1").innerHTML = "President AND " + "&quot" + getCompany + "&quot"; 
    document.querySelector(".links2").innerHTML = "Vice President AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links3").innerHTML = "CEO AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links4").innerHTML = "CFO AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links5").innerHTML = "COO AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links6").innerHTML = "CMO AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links7").innerHTML = "CMO AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links8").innerHTML = "CLO AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links9").innerHTML = "site:www.businesswire.com AND " + "&quot" + getCompany + "&quot" + " AND Press Release";
}
