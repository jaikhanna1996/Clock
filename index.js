
window.onload = init();



function init(){
    
    let month = document.getElementById("month");
    let time = document.getElementById("time");
    let day = document.getElementById("day");
    let date = document.getElementById("date");
    let button = document.getElementById("button");
    


    setInterval(() => {
        let d = new Date();
        let htime = d.getHours();
        let mtime = d.getMinutes();
        let stime = d.getSeconds();
        let hrotation = 30*htime + mtime/2;
        let mrotation = 6*mtime;
        let srotation = 6*stime;
    
        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        second.style.transform = `rotate(${srotation}deg)`;

        

        switch(d.getDay()){
            case 0:
                day.innerHTML = "Sunday, ";
                break;
            case 1:
                day.innerHTML = "Monday, ";
                break;
            case 2:
                day.innerHTML = "Tuesday, ";
                break;
            case 3:
                day.innerHTML = "Wednesday, ";
                break;
            case 4:
                day.innerHTML = "Thrusday, ";
                break;
            case 5:
                day.innerHTML = "Friday, ";
                break;
            case 6:
                day.innerHTML = "Saturday, ";
                break;
        }

        switch(d.getMonth()){
            case 0:
                month.innerHTML = "Jan";
                break;
            case 1:
                month.innerHTML = "Feb";
                break;
            case 2:
                month.innerHTML = "Mar";
                break;
            case 3:
                month.innerHTML = "Apr";
                break;
            case 4:
                month.innerHTML = "May ";
                break;
            case 5:
                month.innerHTML = "Jun";
                break;
            case 6:
                month.innerHTML = "Jul";
                break;
            case 7:
                month.innerHTML = "Aug";
                break;
            case 8:
                month.innerHTML = "Sep";
                break;
            case 9:
                month.innerHTML = "Oct";
                break;
            case 10:
                month.innerHTML = "Nov";
                break;
            case 11:
                month.innerHTML = "Dec";
                break;
        }


        
        date.innerHTML = "-" +  d.getDate();

    
    },1000);
}

let toggle = false;
function theme(){
    if(toggle == false){
        document.body.style.backgroundColor = "black";
        button.style.backgroundColor = "rgb(42, 65, 130)";
        button2.style.backgroundColor = "rgb(42, 65, 130)";
        button.innerHTML = "Day mode";
        toggle = true;
    }
    else{
        document.body.style.backgroundColor = "white";
        button.innerHTML = "Night mode";
        button.style.backgroundColor = "rgb(187, 189, 197)";
        button2.style.backgroundColor = "rgb(187, 189, 197)";
        toggle = false;
    }
    
}


let d = new Date();
let newmin = 0;
if(d.getMinutes() < 10){
    newmin = "0" + d.getMinutes();
}
else{
    newmin = d.getMinutes();
}
time.innerHTML = d.getHours() + ":" + newmin;


let toggle2 = false;
let newhour = 0;

function format(){
    if(toggle2 == false){
        time.innerHTML = d.getHours() + ":" + newmin;
        button2.innerHTML = "12hr";
        toggle2 = true;
    }
    else{
        newhour = ((d.getHours() + 11) % 12) + 1;
        if(newhour < 10){
            time.innerHTML = "0" + newhour + ":" + newmin;
        }
        else{
            time.innerHTML = newhour + ":" + newmin;
        }
        button2.innerHTML = "24hr";
        toggle2 = false;
    }
}



