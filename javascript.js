console.log('working....'); 

function submetCompany() {
    var getExecutive = document.getElementById('executiveEnter').value;
    var getCompany = document.getElementById("companyEnter").value; 
    
    var trimExe = getExecutive.trim(); 
    var trimCom = getCompany.trim();  

    var strExecutive = getExecutive.replace(/\s/g,'+'); 
    var strCompany = getCompany.replace(/\s/g,'+');  

    var nameANDcompany = "http://www.google.com/search?q="+strExecutive+"+"+"AND%20"+strCompany; 
    var nameFacebookORTwitterORLinkedin = "http://www.google.com/search?q="+strExecutive+"+"+"AND%20facebook%20OR%20twitter%20OR%20linkedin";
    var nameANDcompanyJoinedORHiredORPromoted = "http://www.google.com/search?q="+strExecutive+"+"+"AND%20"+strCompany+"%20joined%20OR%20hired%20OR%20promoted";
    var nameANDcompanysaidORcommentedORquoted = "http://www.google.com/search?q="+strExecutive+"+"+"AND%20"+strCompany+"%20said%20OR%20commented%20OR%20quoted";
    var getCompanyCeoANDCfoANDCoo = "http://www.google.com/search?q="+strCompany+"+"+"%20CEO%20AND%20CFO%20AND%20COO%20";
    var getCompanyPresidentANDVicepresident = "http://www.google.com/search?q="+strCompany+"+"+"President%20AND%20Vice%20President";
    var nameANDcompanyLinkedinPresent = "http://www.google.com/search?q="+strExecutive+"+"+strCompany+"%20Linkedin"+"%20"+"-%20"+"Present"; 
    var nameANDcompanyPrnewswireORbusinesswire = "http://www.google.com/search?q="+strExecutive+"+"+strCompany+"%20PR%20newswire"+"%20"+"Business%20Wire"; 


    document.querySelector(".links0").innerHTML = '<a target="_blank" href=' + nameANDcompany + '>' + trimExe + ' AND ' +  trimCom  + '</a>';    
    document.querySelector(".links1").innerHTML = '<a target="_blank" href=' + nameFacebookORTwitterORLinkedin + '>' + getExecutive + ' Facebook OR Linkedin OR Twitter'  + '</a>'; 
    document.querySelector(".links2").innerHTML = '<a target="_blank" href=' + nameANDcompanyJoinedORHiredORPromoted + '>' + getExecutive + ' AND ' + getCompany  + ' Joined OR Hired OR Promoted'  + '</a>';
    document.querySelector(".links3").innerHTML = '<a target="_blank" href=' + nameANDcompanysaidORcommentedORquoted + '>' + getExecutive + ' AND ' + getCompany  + ' Said OR Commented OR Quoted'  + '</a>';
    document.querySelector(".links4").innerHTML = '<a target="_blank" href=' + getCompanyPresidentANDVicepresident+'>'+getCompany+ ' President AND Vice President'+'</a>';
    document.querySelector(".links5").innerHTML =  '<a target="_blank" href=' + getCompanyCeoANDCfoANDCoo+'>'+getCompany+ ' CEO AND CFO AND COO'+'</a>';
    document.querySelector(".links6").innerHTML =  '<a target="_blank" href=' + nameANDcompanyLinkedinPresent+'>'+getExecutive+' '+getCompany+' Linkedin - Present'+'</a>';
    document.querySelector(".links7").innerHTML =  '<a target="_blank" href=' +nameANDcompanyPrnewswireORbusinesswire+'>'+getExecutive+' '+getCompany+' PR newswiren OR Business Wire'+'</a>';
    
    
    // document.querySelector(".links4").innerHTML = "&quot" + "CFO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    // document.querySelector(".links5").innerHTML = "&quot" + "COO AND" + "&quot" + getCompany + "&quot";
    // document.querySelector(".links6").innerHTML = "&quot" + "CMO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    // document.querySelector(".links7").innerHTML = "&quot" + getCompany + "&quot" +  " AND " + "&quot" + getCompany + "&quot";
    // document.querySelector(".links8").innerHTML = "&quot" + "CLO" + "&quot" + " AND " + "&quot" + getCompany + "&quot";
    // document.querySelector(".links9").innerHTML = "&quot" + "site:www.businesswire.com" + "&quot" + " AND " + "&quot" + getCompany + "&quot" + " AND " + "&quot" + getExecutive + "&quot";

}
