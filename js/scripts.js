
function akanName(){

    let year = document.getElementById("bdyear").value;
    let CC = parseInt(year.slice(0,2));
    let YY = parseInt(year.slice(2,4));
    let MM = parseInt(document.getElementById("bdmonth").value) ;
    let DD = parseInt(document.getElementById("bddate").value);

    if (DD <= 0 || DD>31){
        document.getElementById('bddate').value = '';
        alert("Date is invalid,\nDates must be between 1 and 31 ");
        return;   
    }
    if (MM <= 0 || MM>12){
        document.getElementById('bdmonth').value = '';
        alert("Month is invalid,\nMonths must be between 1 and 12 ");
        return;   
    }
    if(MM === ""||DD===""||year===""){
        alert("Please fill in all fields.");
        return;
    }

    let gender = document.getElementById("gender").value;
    let male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayOfTheWeek=parseInt((( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7));
    if (gender === "female"){

        document.getElementById("day-born").innerHTML=("You were born on "+days[dayOfTheWeek].toUpperCase());
        document.getElementById("name").innerHTML=('<i class="fas fa-venus    "></i>'+" Your Akan name is "+ female[dayOfTheWeek]+" "+'<i class="fas fa-venus    "></i>');

    }
    else{
        document.getElementById("day-born").innerHTML=("You were born on "+days[dayOfTheWeek].toUpperCase());
        document.getElementById("name").innerHTML=('<i class="fas fa-mars    "></i>'+ " Your Akan name is "+ male[dayOfTheWeek]+" "+'<i class="fas fa-mars   "></i>');
    }
    document.getElementById("myForm").reset();


}