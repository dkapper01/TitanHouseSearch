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
    
    var nameANDcompany = "http://www.google.com/search?q="+getExecutive+"+"+"AND%20"+getCompany; 
    var nameFacebookORTwitterORLinkedin = "http://www.google.com/search?q="+getExecutive+"+"+"AND%20facebook%20OR%20twitter%20OR%20linkedin";
    var nameANDcompanyJoinedORHiredORPromoted = "http://www.google.com/search?q="+getExecutive+"+"+"AND%20"+getCompany+"%20joined%20OR%20hired%20OR%20promoted";
    var nameANDcompanyJoinORHireORPromotion = "http://www.google.com/search?q="+getExecutive+"+"+"AND%20"+getCompany+"%20join%20OR%20hire%20OR%20promotion";
    var nameANDcompanysaidORcommentedORquoted = "http://www.google.com/search?q="+getExecutive+"+"+"AND%20"+getCompany+"%20said%20OR%20commented%20OR%20quoted";
    var nameANDcompanysayORcommentORquote = "http://www.google.com/search?q="+getExecutive+"+"+"AND%20"+getCompany+"%20say%20OR%20comment%20OR%20quote";
    var getCompanyCeoANDCfoANDCoo = "http://www.google.com/search?q="+getCompany+"+"+"%20CEO%20AND%20CFO%20AND%20COO%20";
    var getCompanyPresidentANDVicepresident = "http://www.google.com/search?q="+getCompany+"+"+"President%20AND%20Vice%20President";
    
    document.querySelector(".links0").innerHTML = '<a target="_blank" href=' + nameANDcompany + '>' + getExecutive  + ' AND ' +  getCompany  + '</a>';    
    document.querySelector(".links1").innerHTML = '<a target="_blank" href=' + nameFacebookORTwitterORLinkedin + '>' + getExecutive + ' Facebook OR Linkedin OR Twitter'  + '</a>'; 
    document.querySelector(".links2").innerHTML = '<a target="_blank" href=' + nameANDcompanyJoinedORHiredORPromoted + '>' + getExecutive + ' AND ' + getCompany  + ' Joined OR Hired OR Promoted'  + '</a>';
    document.querySelector(".links3").innerHTML = '<a target="_blank" href=' + nameANDcompanysaidORcommentedORquoted + '>' + getExecutive + ' AND ' + getCompany  + ' Said OR Commented OR Quoted'  + '</a>';
    document.querySelector(".links4").innerHTML = '<a target="_blank" href=' + getCompanyPresidentANDVicepresident+'>'+getCompany+ ' President AND Vice President'+'</a>';
    // document.querySelector(".links3").innerHTML = "&quot" + "CEO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    // document.querySelector(".links4").innerHTML = "&quot" + "CFO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    // document.querySelector(".links5").innerHTML = "&quot" + "COO AND" + "&quot" + getCompany + "&quot";
    // document.querySelector(".links6").innerHTML = "&quot" + "CMO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    // document.querySelector(".links7").innerHTML = "&quot" + getCompany + "&quot" +  " AND " + "&quot" + getCompany + "&quot";
    // document.querySelector(".links8").innerHTML = "&quot" + "CLO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    // document.querySelector(".links9").innerHTML = "&quot" + "site:www.businesswire.com" + "&quot" + " AND " + "&quot" + getCompany + "&quot" + " AND " + "&quot" + getExecutive + "&quot";

}
