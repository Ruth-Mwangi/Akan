
function akanName(){

    var year = document.getElementById("bdyear").value;
    var CC = parseInt(year.slice(0,2));
    var YY = parseInt(year.slice(2,4));
    var MM = parseInt(document.getElementById("bdmonth").value) ;
    var DD = parseInt(document.getElementById("bddate").value);
    if (DD <= 0 || DD>31 ||MM <= 0 || MM>12){
        alert("Date or Month is invalid,\nDates must be between 1 and 31\nMonths must be between 1 and 12 ");
        return;
        
    }
    var gender = document.getElementById("gender").value;
    var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

   



}