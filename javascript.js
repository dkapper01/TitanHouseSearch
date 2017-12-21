console.log('working....'); 
var getCompany; 

document.getElementById("companyEnter").addEventListener('keydown', function(e) {
    if(e.keyCode == 13) {
        submetCompany(); 
    }
}); 


function submetCompany() {
    var getCompany = document.getElementById("companyEnter").value; 
    var getExecutive = document.getElementById('executiveEnter').value; 

    document.querySelector(".links0").innerHTML = "&quot" + getCompany + "&quot" + " AND "+ "&quot" + getExecutive + "&quot";     
    document.querySelector(".links1").innerHTML = "&quot" + "President" + "&quot" + " AND " + "&quot" + getCompany + "&quot"; 
    document.querySelector(".links2").innerHTML = "&quot" + "Vice President" + "&quot" + " AND " + "&quot" + getCompany + "&quot";  
    document.querySelector(".links3").innerHTML = "&quot" + "CEO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links4").innerHTML = "&quot" + "CFO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links5").innerHTML = "&quot" + "COO AND" + "&quot" + getCompany + "&quot";
    document.querySelector(".links6").innerHTML = "&quot" + "CMO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links7").innerHTML = "&quot" + getCompany + "&quot" +  " AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links8").innerHTML = "&quot" + "CLO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    document.querySelector(".links9").innerHTML = "&quot" + "site:www.businesswire.com" + "&quot" + " AND " + "&quot" + getCompany + "&quot" + " AND " + "&quot" + getExecutive + "&quot";
}
